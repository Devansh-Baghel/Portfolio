# Writing down (and searching through) every UUID

Dec 4, 2024
Source: https://eieio.games/blog/writing-down-every-uuid

---

I've been struggling to remember all of the UUIDs. There are a lot of them. So this week I wrote them all down. You can see my list at everyuuid.com.

The site looks like this — UUIDs are displayed in a random-ish but consistent order and you can quickly search for one that you like.

I think the site is great. I can quickly find my favorite UUIDs and star them or browse them all to find one that's just right.

But having 5,316,911,983,139,663,491,615,228,241,121,378,304 possible values made it way harder than it needed to be to write them all down. I'm not sure why the authors of the UUID spec wanted to include so many bits!

So I think the final implementation here is pretty interesting. Let me tell you about it.

## The challenges

This problem had a few major challenges:

- Browsers do not want to render a window that is over a trillion trillion pixels high, so I needed to handle scrolling and rendering on my own
- I didn't want to generate UUIDs in order from first to last. We all know the good UUIDs are in the middle! So I needed a way to *generate* UUIDs that ensured that I generated them all once.
- Since I was handling scrolling and rendering on my own, `ctrl-f` didn't really work for search. I wanted to search through every UUID, not just the ones I could see! So I had to implement that too.

## Challenge 1: rendering

Originally I figured I'd make a very very tall div only render the UUIDs that I could see. This is the approach that I took with One Million Checkboxes and it worked great there.

But unfortunately, browsers have a maximum scroll position. Even if it was a 64 bit int and we were displaying our UUIDs with a height of 1 pixel, we'd need orders of magnitude more scroll space.

My solution was:

- Don't do any "real" scrolling. Fix the height of the page to the height of the browser
- Store a virtual scroll position in a BigInt; update it whenever the user performs a scroll-like action.
- Render UUIDs based on the scroll position — if we're at position 1,000 then render UUID 1000, 1001, etc.

This was finicky largely because there's a lot of stuff that the browser does for you when it comes to scrolling. You need to handle mouse wheel and touch events yourself. You need to find all the (platform-specific!) hotkeys for scrolling and add those. You need to add your own scrollbar, and if you want a nice scrolling animation you have to add that yourself too.

That said, most of this was well within Claude's abilities — for example, it slammed out a pretty reasonable easing-based scroll implementation when I asked.

## Challenge 2: ordering

I wanted to display the UUIDs in an interesting order. I came up with the following constraints:

- There should be no distinguishable pattern to the UUIDs displayed
- We should display every UUID exactly once
- UUIDs should be displayed in a consistent order

So: we need to map our integer indices to UUIDs in an interesting way. How do we do that?

### Entropy and bijectivity

So I wanted to add more entropy to the displayed UUIDs — but to display each UUID exactly once. Mathematicians would say I wanted a *bijective* mapping.

I found bijectivity hard to reason about! But eventually I stumbled on an observation that is probably obvious to many of you but blew my mind: **as long as I could always reverse the steps that I took, I had preserved bijectivity.**

The way I think about this is:

- I have a function. It takes in an index and returns exactly one UUID.
- The way that I add entropy is reversible, which means that I can take a UUID, reverse the steps that I took, and recover the index that generated it
- Having a duplicate would require two indices to have the same UUID
- Which would mean that I couldn't recover one of those two indices by reversing the steps that I took
- But we said we could always do that!

Maybe this is silly to you. But framing the problem as "come up with a function that looks like it adds entropy but is reversible" was a lot easier for me to think about than "preserve bijectivity between these two sets."

Look, I'm a college dropout, leave me alone.

### Feistel ciphers

So I wanted to preserve the number of bits that I had and add some entropy in a reversible way. A cipher seemed like a good approach.

I settled on a feistel cipher because it was easy for me to see how it would satisfy my constraints. Feistel ciphers are cool and very elegant. The basic idea is: split your input into two chunks. Several times in a row, feed the "right" chunk into a function that produces some interesting value. XOR that output with your left chunk and make that your new right chunk.

And what's really cool about this is that it is reversible for *any* round function, as long as the round function is pure.

That was originally confusing to me — why is it ok for the round function to be basically anything? The trick is that we can always recover our "seed" (because it's the left chunk of our current iteration), and from that we can always recover our old left chunk (because XORing something twice produces the original input).

#### Aside: bit twiddling is hard

If we didn't care about generating valid UUID v4s, we could just generate 2^128 numbers, scramble them, and convert the resulting bits into a hex string. But it'd be heartbreaking if someone found a UUID on the site only to realize that it didn't correspond to the V4 standard.

A UUID V4 must look like this: `XXXXXXXX-XXXX-4XXX-VXXX-XXXXXXXXXXXX`

It's a little awkward to take our two chunks of 61 bits and map it onto the available bits here. I'm sure that someone more comfortable with bit twiddling would have come up with a better approach. But I couldn't think of a solution other than carefully twiddling all of the bits into place.

This was bug-prone for me (I am bad at bit twiddling) and an area where LLMs seemed to really struggle — maybe because the process is mathy. I had to draw everything out to get it working.

## Challenge 3: search

Shuffling the order of displayed UUIDs posed a problem — how could I find the UUIDs that I liked? So I needed to add search.

Because our mixing function was reversible, adding search for a *specific* UUID was actually pretty easy. We just take the UUID, un-scrambled it to retrieve its original index, and then jump to that index!

### Full text search

I knew all of the UUIDs in view, so I could easily add full-text search over them. But I couldn't make those buffers trillions of items large to hold all the UUIDs! That's too much RAM!

### What do I do with search strings?

I couldn't search over all of the UUIDs directly. But maybe I could take in the search string and then back out some UUIDs that fit it.

At first I massively overcomplicated this problem. I went in circles, throwing away a ton of code. One theme of this project was that Claude really struggled with what I was asking it to do, and that was certainly true here.

But at some point I took a step back and realized there was a much simpler solution. Since we want the user's search string to appear verbatim in any UUID that we match, we can simply:

- Take their input
- Ask "could this input string go at the start of a UUID?"
- Ask "could this input string go at the second character of a UUID?"
- etc

And it's here that I hit a wall. The dependency graph for any bit spit out of our cipher was wildly complicated.

Anything I did to improve one problem made the other problem harder! Here I was left with a feeling that if I had a better understanding of cryptanalysis I might be able to make some headway. But getting the MVP of this project out the door seemed too valuable to divert into studying for that long — people need to browse UUIDs.

So I punted. My solution was pretty simple: for search, I just take the patterns that I generated while analyzing search strings, repeatedly fill in the remaining digits to generate valid UUIDs, and take the "best" one — the one closest to the current position.

And this…works pretty well! It's not perfect, but it certainly lets you cycle through a large set of matching UUIDs.

## Missing features and wrapping up

Flaws of the UUID spec aside, I'm glad that I finally have all the UUIDs in one place.

There are a few things that I think the site is currently missing. Having more social features would be really neat — maybe you could see the UUIDs your friends have favorited? Or maybe the site could feature "trending UUIDs" that are particularly popular across the world right now.

And of course I'm still very curious whether there's a cryptanalysis approach that lets me achieve more effective search over a random-ish ordering of UUIDs.

But all that said, I'm very happy to have launched the site in its current state. I hope you get as much utility out of it as I do.

Thanks for reading!
