# Running a million-board chess MMO in a single process

Jun 24, 2025
Source: https://eieio.games/blog/a-million-realtime-chess-boards-in-a-single-process

---

*One Million Chessboards is over. Thanks for playing! If you'd like to run your own version, you can find the code here: https://github.com/nolenroyalty/one-million-chessboards*

One Million Chessboards is a 1000x1000 grid of chess boards. Moving a piece moves it for everyone, instantly. There are no turns, and pieces can move between boards.

In the 10 days after launch, over 150,000 players made over 15,000,000 moves and hundreds of millions of queries. The game runs out of a single process that I didn't touch over those 10 days.

Making this project taught me a lot. It's the first time I've used protobufs or golang, the first time I've measured nanoseconds, and my first time writing rollback netcode.

Let me tell you about it.

## Basics

### Rules

**Pieces can move between boards** — I wanted one global game, not a million simultaneous ones. This meant that sharding the boards over many processes wasn't free because those processes would need to communicate.

**There are no turns.** I didn't think asking the whole internet to take turns would work well. And I thought real-time chess would be fun. This meant that speed mattered; I needed to make sure that clients could make moves fast.

**I prevented pieces from capturing pieces on other boards.** This was originally to prevent a queen from immediately capturing the king on the board above or below her, but ended up producing fun emergent gameplay as people (ab)used it to make indestructible structures like Rooklyn and Queens.

This rule was interesting, but it locked up the game. After activity died down I tried relaxing the restriction to only apply to unmoved pieces. I think this was a mistake — the original version was likely better.

### System Design Goals

Last year I built a surprisingly popular site called One Million Checkboxes. I learned a lot while scaling it to handle load; those learnings directly lead to my design goals.

I wanted to **minimize bandwidth** since it was my one unbounded cost. It's very stressful going to bed not knowing what you'll owe when you wake up.

I chose to run in a **single process** — partially because it was easier than sharding, partially because it was a fun challenge, but primarily because I was still smarting from a Hacker News comment (correctly!) pointing out that I could have run One Million Checkboxes in a single process (instead of the 8 vms and a database that I used).

I aimed to be **bottlenecked by syscalls or message serialization** overhead. Both of those operations parallelize well, which means I could scale vertically to address them if I needed to.

And finally, I wanted to be **surprisingly fast**. My biggest gripe with most One Million Checkboxes clones is that they have too many loading spinners. I couldn't ship *all* my data to clients this time so they'd have to load data occasionally — but I wanted to be faster than anyone would reasonably expect.

### Basic Architecture

The server runs in a single golang process. It sits behind an nginx reverse proxy that sits behind cloudflare. The frontend is written in React.

The server has 4 core components — the board, client manager, minimap aggregator, and board to disk handler. They're all arrays.

- **The board** is a dense 8000x8000 array of uint64s representing pieces.
- **The client manager** tracks the location of each client
- **The minimap aggregator** summarizes where pieces are
- **The board to disk handler** duplicates our board state and regularly serializes that state to disk

## Distribution

One Million Chessboards starts with 32 million pieces. We can't ship all the pieces to every client!

So we distribute state via **snapshots** and **move batches.** Snapshots and move batches are sent based on a player's **position.**

- A **position** is the center of a player's screen
- A **snapshot** is a list of all pieces in a 95x95 square around a position
- A **move batch** is a list of all moves that have happened close to a position

When a player connects we send them a snapshot. After that we send move batches, since moves are the only way that the board state changes. As the client moves positions we send them new snapshots.

### Protocol

Updates are shipped to clients using protobufs (a binary serialization format from Google) and compressed using zstd. Protobufs are small (reducing bandwidth costs) and very fast to serialize.

Snapshots and moves contain a piece id, the piece's position, and some metadata. Protobufs use a variable number of bytes to encode a number depending on its size, keeping our message size low.

These protobufs compress surprisingly well! In the month of launch I shipped a bit over a terrabyte of data. I'm glad I didn't go with uncompressed JSON!

### The Right Moves

A naive algorithm for distributing state to players in a multiplayer game is often quadratic. You accept moves from N players and distribute those moves to all N players — that's O(N^2)!

To do better, we divide our grid into **zones** — 50x50 groups of tiles. And we send clients moves that happen in a 3x3 box of zones centered on their current position.

We put all clients that currently care about a zone in a set and store those sets in a 2D array. After we've validated a move, we calculate the zones that it touches, then find the clients tracking those zones and send them the move.

### Magic Numbers

Why is a snapshot 95x95? Why do we send new snapshots if a client moves more than 12 tiles? Why is our zone size 50?

They're all derived from the UI! I started with the fact that clients can't see more than 35x35 tiles and worked backwards.

## State

The board is stored as a 64 million (8000x8000) element array protected by a RWMutex (which allows many readers or one writer).

Each piece is represented as a uint64; the empty piece is 0. We use our 64 bits to assign each piece a unique ID and to track fun metadata like the number of times that a piece has moved.

Moves are fed into a go channel (roughly a threadsafe queue), where a single writer validates them, applies them, and distributes them to the relevant clients.

The writer holds the write lock for about 500 nanoseconds. Readers hold the read lock for around 20 microseconds.

### Dense not Sparse

We could store this data as a sparse map instead of a dense array. This would at least halve our memory usage — our board starts half empty!

But doing that would make it slower to take snapshots. Right now a snapshot requires 95 copies of 95 sequential values. CPUs are very good at copying sequential values.

64 million uint64s is 512 MB of memory. That's not nothing, but it's certainly within my server's capabilities. I'm happy with the tradeoff here.

### A single mutex

Using a single mutex seemed a little scary. I considered a row-based locking approach that would likely reduce contention at the cost of complexity.

But I don't write a lot of lock-based code. I figured the number of deadlocks I added scaled with the number of locks I added.

I decided to ship the single-mutex approach but log lock-hold times for each move and snapshot. This meant that if the site was slow I could check my metrics, see whether lock times were much higher than I expected, and swap to row-based locking if needed.

The mutex was never a problem. I'm glad I did the simple thing.

### Bad napkin math

When first speccing out the backend I did some awful math. Latency numbers every programmer should know told me that a read from memory takes about 100ns. Our snapshots have 9025 values. Multiplying that by 100ns told me it'd take almost a millisecond for a snapshot!

To speed things up I decided to fill the board with atomics. I explained this plan to some smart friends and they told me it was bad.

As I tried to figure out what to do I realized that my napkin math was way off. My snapshot isn't 9025 arbitrary values — it's 95 groups of 95 sequential values! And copying sequential values is really fast. I redid my math and realized that my snapshots were *at least* an order of magnitude faster than I had calculated.

That's ok though. Learning by doing is the best way to learn. It'll be obvious next time :)

## Rollback

Here are two clients. On one client moves happen immediately. On the other they happen after 250ms. A delay of 250ms isn't unplayable, but it's not great.

To achieve 0ms wait times we apply moves *optimistically* and *immediately* — pieces move on the client before we hear back from the server at all. Folks often call this "rollback" or "rollback netcode."

When our piece display renders a piece, it checks our optimistic state before referencing the ground truth. When we make a move, we give the server a "move token" that identifies it. The server passes back that move token when accepting or rejecting a move.

When we receive a rejection from the server we revert our move.

### But wait!

*Just* relying on server rejections can put the board into an invalid state. For example, two players might move different rooks to the same position. One client needs to detect the conflict and roll back.

This can get complicated because moves can depend on each other. What if you move a knight and then move a rook to where that knight was, but it turns out that the knight's move wasn't valid? We need to roll back *both* moves!

### This was really hard

Now that I understand how to think about rollback it doesn't seem that hard. But in the moment I found it *extremely* challenging.

When I first sat down to add rollback, I made a cup of coffee at 9 PM and figured I'd program till I solved it. At around 4 AM I realized I need to throw everything I'd done. I did the same thing (and failed again) the next night, which is around the time I realized I needed to think a little harder before starting to code.

I think that's true of many of my favorite problems. The real challenge is taking a step back, precisely understanding your desired behavior, and forming a good mental model of the domain.

## Profiling, wins, and costs

One Million Chessboards is the first game that I've profiled in a meaningful way before shipping. Writing in golang made this all pretty easy!

### Go was a win

My multiplayer games involve giving the whole internet concurrent read-write access (with a few rules) to a chunk of memory on a single computer.

I found golang to be *perfect* for this — it's a quick language designed for concurrency that lets me reason about how memory will be laid out. I'll be using it going forward for games like this.

Go is also a *dumb* language. I found myself missing the power of OCaml — the language I know best. But that simplicity was also a boon. It pushed me to do everything with big arrays protected by mutexes. And it turns out you can go pretty far with big arrays protected by mutexes.

### Costs

One Million Chessboards runs on a single Digital Ocean "CPU-optimized" box. The night before launch I upgraded it to run on a 16-core "premium intel" box (~$450/month). I knew this was *probably* overkill.

And it was *massive* overkill; I'm not sure I ever hit double-digit CPU usage. I've shrunk the box substantially (~$80/month) and I suspect I could keep going.

## Was this game good?

I'm proud of One Million Chessboards. But I think I made some mistakes.

Folks were confused about being assigned to a single color, and the UI didn't explain this behavior super well. Cross-board capturing was also confusing to folks.

More generally, the game's differences from standard chess turned off some chess players more than I expected.

### Trying too hard to impress

Someone left this comment on Hacker News calling the game "an exercise in scale." While I don't agree with all of this comment I think there's some truth to the game being an exercise in scale.

I was focused on building another one million-style game. I was excited about this project because I wanted to push myself, to demonstrate that this game *could* be built in a single process, and to demonstrate that I was capable of building it.

I think that lead me to design decisions that existed to support the scale of the game, instead of design decisions that existed to make the game fun.

### A lack of awe

I realized my biggest mistake when I tried to record footage. Multiplayer games have a cold-start problem; they aren't fun when you're the only one there. To deal with this, I use reservoir sampling to place new players next to someone who has made moves within the last few seconds.

This did a good job of forming clusters of players. But because I tuned my position assignment to form small clusters, the game failed to have the awe-inspiring "wow, there are so many people here" moment that I wanted.

With One Million Checkboxes, everyone started in the same place. That meant that even early on the top few rows of checkboxes looked crazy, which I think drew people in.

I wasn't able to record similar footage for One Million Chessboards; even with a thousand players online it didn't *feel* like there were lots of people on the site.

But I've learned a really valuable lesson! My favorite way to learn is to identify a totally new thing that I can think about as a first-class problem. Now I know that conveying a game's scale *immediately* when you load in is critical, and that telling folks "there are 1,000 players online" isn't enough.

## Wrapping up

Thank you to my friends Won Chun, Freeman Jiang, and Eliot for their help building this; my go would have been worse and my site substantially slower without your help.

And thank you to the Recurse Center — I built this site and wrote this blog at Recurse. Recurse is the best place I know of to build sites like this.

### Fear of trying

I have made many of my most popular projects in 2-4 days. This project took 15 times longer. That *terrified* me.

Last year, after the heights of One Million Checkboxes, I released a game called PacCam. I worked on it for an embarrassingly long time and had high hopes. Instead it was a flop; it got less traction than many of the things I made *before* I found an audience. And that crushed me — it made me want to stop making games.

Now I can look back on PacCam and see all sorts of problems. But in the moment the experience pushed me towards very short projects — things I could make in a week or less.

But I knew I couldn't make One Million Chessboards the way that I wanted to in a week. I wanted it to be *great* — not just a prototype — on release. I wanted to learn from my mistakes, to make something fast, to surprise and delight and wow people. And to show that I could do it.

So I chose to push through that fear, pour myself into the project, and hope for the best. When I finished I wasn't sure what I needed to call the project a success.

A few days in, Ali found the trickiest achievement — a piece is granted "self-hating" if it captures a lot of pieces of its own kind and no other pieces. This wasn't something I *needed* to add — I'd guess under 0.1% of players ever saw it.

Ali noticed that — and told me that it was in that moment that they thought 'I think this game was made with love!'

I don't think I can ask for anything more.

More high-effort (and low-effort) games soon.

Thanks for reading!
