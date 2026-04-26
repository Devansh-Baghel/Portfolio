# Why does SSH send 100 packets per keystroke?

Jan 22, 2026
Source: https://eieio.games/blog/ssh-sends-100-packets-per-keystroke

---

Here are a few lines of summarized `tcpdump` output for an ssh session where I send a single keystroke:

```
  1   0.000s  CLIENT->SERVER   36 bytes
  2   0.007s  SERVER->CLIENT  564 bytes
  3   0.015s  CLIENT->SERVER    0 bytes
  4   0.015s  CLIENT->SERVER   36 bytes
  5   0.015s  SERVER->CLIENT   36 bytes
  ...
```

Total packets: 270. That is a lot of packets for one keypress. What's going on here? Why do I care?

## Discovery

I am working on a high-performance game that runs over ssh. The TUI for the game is created in bubbletea and sent over ssh via wish.

The game is played in an 80x60 window that I update 10 times a second. I'm targeting at least 2,000 concurrent players, which means updating ~100 million cells a second. I care about performance.

So I have a script that connects a few hundred bots over ssh and has them make a move a second. Then I use go's outstanding profiling tools to look at what's going on.

Yesterday I inadvertently broke my test harness. Instead of regularly sending game data, my server sent the bots a single message that said "your screen is too small." This cut my game's CPU and bandwidth usage in half.

At first I was disappointed. I (briefly) thought I had a free massive speedup on my hands, but it was actually a testing error.

But wait.

*If I wasn't sending game data back to my bots, why did CPU usage drop by 50% instead of 100%?*

## Investigation

As part of debugging the test harness issue, I used `tcpdump` to log game traffic with and without the breaking change. Something like:

```bash
# The game runs on port 22
timeout 30s tcpdump -i eth0 'port 22' -w with-breaking-change.pcap
# Revert change
timeout 30s tcpdump -i eth0 'port 22' -w without-breaking-change.pcap
```

Our breaking change stopped us from rendering our game over ssh. So the pcap contains packets that represent the *overhead* of each connection without actually rendering the game.

I was debugging this with Claude Code, so I asked it to summarize what it saw. Further analysis pointed to mysterious packets arriving ~20ms apart.

This was baffling to me (and to Claude Code). We kicked around several ideas like SSH flow control messages, PTY size polling, or some quirk of bubbletea or wish.

One thing stood out — these exchanges were initiated by my *ssh client* (stock ssh installed on MacOS) — not by my server.

On a hunch, I took a `tcpdump` of a regular ssh session. I saw the exact same pattern! What in the world?

## Root cause

Once I realized that this was a property of stock ssh and not my game, debugging got a lot easier.

Running `ssh -vvv` gave me a pretty good sense of what was going on:

```
debug3: obfuscate_keystroke_timing: starting: interval ~20ms
debug3: obfuscate_keystroke_timing: stopping: chaff time expired (49 chaff packets sent) 
debug3: obfuscate_keystroke_timing: starting: interval ~20ms
debug3: obfuscate_keystroke_timing: stopping: chaff time expired (101 chaff packets sent)
```

That `20ms` is a smoking gun — it lines up perfectly with the mysterious pattern we saw earlier!

In 2023, ssh added keystroke timing obfuscation. The idea is that the speed at which you type different letters betrays some information about which letters you're typing. So ssh sends lots of "chaff" packets along with your keystrokes to make it hard for an attacker to determine when you're actually entering keys.

That makes a lot of sense for regular ssh sessions, where privacy is critical. But it's a lot of overhead for an open-to-the-whole-internet game where *latency* is critical.

## Remediation

Keystroke obfuscation can be disabled client-side. After reverting my original breaking change, I tried updating my test harness to pass `ObscureKeystrokeTiming=no` when starting up ssh sessions.

This worked great. CPU usage dropped dramatically and bots still received valid data.

But this is hardly a solution in the real world. I want `ssh mygame` to Just Work without asking users to pass options that they might not understand.

Claude Code originally didn't have faith that we could disable this functionality server-side. Fortunately, the description I found of SSH keystroke obfuscation made it easy to look up the relevant code in go's ssh library.

The "chaff" messages that ssh uses to obscure keystrokes are SSH2_MSG_PING messages. And they're sent to servers that advertise the availability of the ping extension. What if we just…don't advertise it?

I searched go's ssh library, found the commit where support was added, and told Claude to revert this change and update our dependencies to use our clone.

Then I re-ran my test harness. The results were…very good:

```
Total CPU  29.90%          -> 11.64%
Syscalls   3.10s           -> 0.66s
Crypto     1.6s            -> 0.11s
Bandwidth  ~6.5 Mbit/sec   -> ~3 Mbit/sec
```

Obviously forking go's crypto library is a little scary, and I'm gonna have to do some thinking about how to maintain my little patch in a safe way.

But this is a *huge* improvement. I've spent much of the last week squeezing out small single-digit performance wins. A >50% drop was unimaginable to me.

## Debugging with LLMs was fun

I've been thinking about whether LLMs remove parts of the problem-solving process that I enjoy. But I've gotta say, debugging this problem using Claude Code was super fun.

I am familiar enough with `tcpdump`, `tshark`, and friends to know what they can do. But I don't use them regularly enough to be fast with them. Being able to tell an agent "here's a weird pcap — tell me what's going on" was really lovely. And by watching commands as the agent ran them I was able to keep my mental model of the problem up to date.

There were still edge cases. At some point I switched to ChatGPT and it *very* confidently told me that my tcpdump output was normal ssh behavior. And then doubled down when I pushed back.

Similarly, I had to push Claude Code to consider forking go's ssh library. And I had to make the original leap of "wait…if our test harness was broken, why was usage not 0%?"

When you say "LLMs did not fully solve this problem" some people tend to respond with "you're holding it wrong!"

I think they're sometimes right! Interacting with LLMs is a new skill, and it feels pretty weird if you're used to writing software like it's 2020. A more talented user of LLMs may have trivially solved this problem.

But the best way to develop a skill is by practicing it. And for me, that means figuring out how to transfer my problem-solving intuitions to the tools that I'm using.

Besides. Being in the loop is fun. How else would I write this post?

Thanks for reading!
