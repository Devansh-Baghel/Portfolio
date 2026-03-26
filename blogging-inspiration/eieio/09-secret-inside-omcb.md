# The Secret Inside One Million Checkboxes

Aug 28, 2024
Source: https://eieio.games/blog/the-secret-inside-one-million-checkboxes

---

A few days into making One Million Checkboxes I thought I'd been hacked. What was *that* doing in my database?

A few hours later I was tearing up, proud of some brilliant teens.

But let's back up.

## What was One Million Checkboxes?

On June 26th 2024, I launched a website called One Million Checkboxes (OMCB). It had one million *global* checkboxes on it — checking (or unchecking) a box changed it for everyone on the site, instantly.

My expectations for the site were very low and very wrong. I thought hundreds of players would check thousands of boxes — instead, 500,000 players checked over 650,000,000 boxes in the two weeks that I kept the site online. The site made it into the New York Times and the Washington Post; it's on Know Your Meme and Wikipedia. The whole thing was a wild ride.

This blog covers my favorite story from running the site.

### Bit of context 1: OMCB made it hard to draw

I like to make games that help people interact on the internet. Some people are assholes when they interact on the internet. So when I make games like this I try to add constraints to make the average interaction a little more pleasant.

I've been around long enough to know what people will draw if you put an unrestricted canvas on the public internet, so for OMCB I wanted to constrain drawing.

To do this I scaled the number of checkboxes in a row to the size of the browser window. If you drew something rude on your phone it wouldn't show up for me on my laptop and vice-versa: your graffiti was only visible to people with the exact same display as your own! This constraint was particularly nice because it was subtle; you might never realize that your writing wasn't visible to anyone else on the site!

I got a *lot* of comments asking for me to "fix" this so that people could draw. But the choice here was very intentional.

I've found that the best stories from my stranger-interaction games come from how people work around the constraints that I add.

That was foreshadowing.

### Bit of context 2: how I stored state

OMCB had a million checkboxes on it. I wanted to store and transmit my state efficiently.

A checkbox has two valid states. It's checked or it's unchecked. That's like a bit. So I just stored the state for each checkbox as a bit. That's a million bits. There are 8 bits in a byte, so that's 125KB — not even the size of an MP3! Totally workable.

I stored this data in Redis and base64-encoded it when transmitting it to clients.

I promise this matters. Let's get back to the story.

## Have I been hacked?

A few days after launching OMCB, I rewrote the backend in go to keep up with the load. And then, for some reason, I dumped an ascii encoding of the raw bytes in my database. I don't know why — I just did it.

The data I saw had URLs in it. URLs pointing to *catgirls.win* in my database!! Something was very very wrong.

I panicked. I assumed I'd been hacked. I poured over my logs, looking for evidence of an intrusion. I read and re-read my code, searching for how somebody could be stuffing strings into a database that should have just contained 0s and 1s.

I couldn't find anything. My access logs looked fine. My (very simple) code was ok. My heart rate increased. My girlfriend patiently waited for me to join her for dinner. And then — wait.

Wait!

I saw it.

## The hidden message

I looked at the checkboxes that corresponded to the sketchy URLs in my database.

That H — it represented one byte. One byte represented 8 bits. *8 bits represented 8 checkboxes.*

Those chunks of 8 checkboxes formed a repeating pattern that lined up with the URLs. And if I changed something — if I unchecked a box — the pattern immediately reappeared.

I hadn't been hacked.

*Someone was writing me a message in binary.*

### What does that mean?

When I dumped my database, redis converted the data to ascii. To do that, it read the data one byte — 8 bits — at a time. It converted that byte to a number between 0 and 255. And then it checked whether that number was in the printable ascii character range.

So someone was:

- Checking boxes
- To flip bits
- To form numbers
- That formed letters
- That spelled out the URL

And they were doing it with *thousands of other people on the site.*

I was impressed.

## Down the rabbit hole

So. `https://catgirls.win/omcb` — *catgirls dot win*

I hemmed and hawed. I googled around. And then I clicked the link.

The link went to a discord! And the discord was called "Checking Boxes." I joined the discord.

And someone was really excited to see me! We chatted for a bit. And then they asked me something that blew my mind:

> "Have you seen your checkboxes as a 1000x1000 image yet?"

I said no. They showed me what they were up to.

They were downloading data for all million checkboxes and rendering them as a 1000x1000 grid. There's a lot going on here! We've got "be gay do crime" — love that — but there's some interesting technical stuff too.

The repeated noise at the bottom is the binary message I found. Above that is a base64 version of the same message. And on the left side is a QR code (with full error correction!). All of these messages linked to the discord.

The discord was full of some very sharp teens, and they were writing these secret messages to gather other very sharp teens to talk about botting the site. Anyone who was writing a bot would probably be looking at either the base64'd version of the data, the binary version, or the 1000x1000 image version; they were covering all the bases.

And this worked! The discord grew from under 20 people when I joined to over 60 by the time I shut the site down.

### So what'd they do?

Well, they drew a whole lot! As they built better systems for drawing (and better reverse-engineered my rate limits) their drawings became more complex.

Over time they experimented with animations and even tried out some protocols for adding color — like treating adjacent cells as the red, green, and blue channels of a color and drawing to a smaller grid.

I gave the discord a warning before I sunset the site. The night before doing it I removed all my rate limits to see how much traffic the site could handle and what they could do. We ended up with some really cool animations — my favorite was a Rickroll.

### Is botting good?

Lots of people were mad about bots on OMCB. I got hundreds of messages about bots. People…did not like bots.

And I get it! The typical ways that folks bump into bots are things like ticket scalping and restaurant reservation bots. Bots that feel selfish and unfair and antisocial.

So, sure. Their drawing probably degraded the experience for "regular" users — although the botters did have some rules around where to bot, and I would occasionally chime in to ask them to dial things down.

So there are some caveats. I understand why people don't like bots; maybe this wasn't an unassailable good. But man…

### I found this so moving!

In highschool, I wrote a recursive mail rule that sent a friend of mine millions of messages as a joke. I (accidentally!) repeatedly crashed the school's mail server.

The adults in my life were largely not mad at me. They asked me to knock it off, but also made me a t-shirt. *I don't think I'd be doing what I do now without the encouragement that I received then.*

What this discord did was so cool — so surprising — so creative. It reminded me of me — except they were 10 times the developer I was then (and frankly, better developers than I am now). Getting to watch it live — getting to provide some encouragement, to see what they were doing and respond with praise and pride instead of anger — was deeply meaningful to me. I still tear up when I think about it.

I'm proud to have made something that this discord decided was worth playing with, and I'm even more proud of what they did with it.

I can't wait to see what they go on to make.

Thanks for reading!
