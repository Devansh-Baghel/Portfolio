# snakes.run: rendering 100M pixels a second over ssh

Feb 25, 2026
Source: https://eieio.games/blog/secure-massively-multiplayer-snake

---

I made a massively multiplayer snake game that's accessible over ssh. Play by running `ssh snakes.run` in your terminal.

The backend for the game - Snake Session Handler Daemon or `sshd` - is capable of handling thousands of concurrent players and rendering over a hundred million pixels a second.

## Challenges

There were 3 core challenges I ran into building snakes.run.

- **Display:** Making snake look nice in the terminal
- **Bandwidth:** My early code used a shocking amount of bandwidth
- **Performance:** Supporting thousands of concurrent players was hard

But before we jump into those challenges, lemme give you a quick tour of how the game works and how it's architected.

## Basics

Everyone connects to the same wrapping playfield. Normal snake rules apply — you eat fruit to grow and die if you hit a snake.

ssh is a dumb client; it just receives, decrypts, and displays lines of text sent by the server. So to run our game we render every frame server-side and relay them to our clients.

The game renders frames using bubbletea (a TUI framework), which is hooked up to ssh via wish. I've forked both bubbletea and go's ssh library to reduce bandwidth and improve performance.

The game server runs at 10 "ticks" a second. Every tick we move and grow players, eat fruit, calculate collisions, and broadcast the new gamestate to clients.

## Two pixels per character

My earliest prototype used ascii characters for snakes and fruit. This had a problem — since terminal characters are twice as tall as they are wide, vertical movement felt much faster than horizontal movement.

To fix this, I moved to Unicode Block Elements. Block elements are a set of blocky unicode characters like UPPER_HALF_BLOCK, LOWER_HALF_BLOCK, and FULL_BLOCK.

Rendering a character as a lower block and then as an upper block gives you two "frames" of motion within the same character and looks much smoother.

On top of that, we can get two full pixels of color using foreground and background colors. If we render an upper block with a foreground color of cyan and a background color of red, we get a cyan pixel sitting on top of a red pixel!

This looked much better than what I had before. But it was a bandwidth hog.

## The bandwidth problem

The first thing I profile when I make a multiplayer game is bandwidth usage. It's easy to accidentally use too much bandwidth, and it's typically my one unbounded cost so I want to minimize it.

Testing told me I used ~3,500 bytes for each *frame* — at 10 FPS, that's ~35 KB/sec. While a nice T1 line could handle that, it'd easily saturate a 56k modem. And supporting even 1,000 clients would mean pushing 35 *megabytes* a second — way too much!

### Stateful rendering and VT100 sequences

Terminal applications have a "cursor" that they can move around. You can use VT100 sequences to replace existing characters with new ones, without re-emitting a whole line.

That's the basis of our custom renderer — we diff each cell and only print changed characters. For horizontal movement we can do even better. If your snake is moving to the right, we start by deleting every character on the left edge of the screen and inserting a new one on the right edge.

With these changes bandwidth use dropped to around 4.5 KB/sec. Much improved, but we can still do better.

### Stateful 4-bit colors

The way color works in the terminal is that you echo a sequence to tell the terminal what color to use. Then all characters have that color until you "reset."

Originally, I used lipgloss — a terminal utility for styling terminal text. But that involved a *lot* of resetting. We save a bunch of bandwidth by tracking the current foreground and background color in our renderer and only emitting a new color escape sequence when our desired color changes.

As a final tweak, I moved from 8 bit ansi colors to 4 bit colors. This restricts our color range, but it saves something like 6 bytes per color.

These changes, along with a few other small tweaks, took the game down to a nice ~2.5 KB/sec. Not bad. After bandwidth, I started to think about CPU.

## Performance

I figured the Secure Snake Home community would be excited to have a new server to play on, so I wanted to support at least a thousand concurrent players. But early performance profiling was *bad*. I was using something like a full core for every 40 users.

### Strings and allocations

25% of my time was spent in lipgloss utility functions. Lipgloss is handy, but handling ansi escape codes and double-width characters is *slow*. To calculate a string's width it has to pass every character through a state machine.

I ripped out almost all of my lipgloss calls and replaced them with hand-rolled functions for concatting and measuring strings. These functions weren't nearly as general, but they worked for my use case.

#### Pre-allocate everything

After that, ~15% of my CPU time was spent in the go garbage collector. The primary cause was all of my hand-rolled string utility functions generating and throwing away tons of strings on every frame.

To work around this, I started pre-allocating…everything. I pre-compute every banner size ahead of time and slam that pre-computed banner into a byte buffer, skipping the intermediate allocation.

These changes reduced time spent in the gc to ~0.5%.

### SSH tweaking

While continuing to push on performance, I noticed a bizarre pattern — my ssh client sent hundreds of no-op packets along with each move I made.

In 2023, OpenSSH added keystroke timing obfuscation to their ssh client. The idea is that the *timing* of your moves gives away information about what the moves are.

While this change is spiritually in line with Tatu Ylonen's development of ssh to prevent move-sniffing attacks, I figured it wasn't necessary for us since we're focused on massively multiplayer play, not competitive play.

Figuring out how to strip it out was a bit of a challenge — I ended up forking go's crypto library — but it was a *huge* win. Performance approximately doubled!

### Final tweaks

That's a 25x speedup from where we started. With this setup, I'm able to support about 2,500 concurrent users before I start to see any stuttering.

That gives me the math for the title of this post. Each test user had a playfield with ~2,200 characters, and each character contains 2 pixels. The game runs at 10 FPS. `2500 * 2200 * 2 * 10` is a little over 100 million! Maybe that's not a fair measurement, but it's the one I chose.

## Wrapping up

The ssh modding community has been a joy to watch these last few years. Terminal Products, Inc has managed to sell coffee over ssh and I've heard that the OpenSSH folks have even used it to log into computers remotely!

But I'm really pumped to get Secure Snake Home back to its roots by standing up a way to securely play multiplayer snake online.

I hope you enjoy playing :)

Thanks for reading!
