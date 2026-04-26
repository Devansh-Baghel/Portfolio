# Running Pong in 240 Browser Tabs

Feb 20, 2025
Source: https://eieio.games/blog/running-pong-in-240-browser-tabs

---

What do you do with your unclosed browser tabs? I find that they take up a lot of screen space. So this week I figured out how to run pong inside mine.

That's 240 browser tabs in a tight 8x30 grid. And they're running pong! The ball and paddles are able to cleanly move between the canvas in the foregrounded window and all of the tabs above.

You can see the (awful) code here: https://github.com/nolenroyalty/faviconic. But how does this work?

## Inspiration

This project was inspired by my friend Tru, who made a version of Flappy Bird that runs in a favicon (Flappy Favi) last week.

FlappyFavi is great, but it's a little hard to see what's going on because favicons are so small. I figured I could fix that. My best idea for how to fix this was by drawing an image across multiple tabs. And that gave me a few problems:

- How do I create a nice grid of tabs to draw on?
- How do I update those tabs, even when they're backgrounded?
- How do the tabs coordinate?

## Prototyping

My first problem was figuring out how to make a grid of tabs. I started by opening up a chrome window and mashing the "new tab" button until the tabs were really small. That seemed promising! If I opened a second window and positioned it just right I could add a second row.

But I wanted a *big* grid. Doing this by hand would be a pain. So I turned to one of my favorite tools: AppleScript.

AppleScript is a powerful and bizarre way to control programs on Mac; you *almost* write English, but it's verbose and strict enough that mostly you end up writing Python with a lot of extra words.

But it was a great fit here. I wrote a script that opened up 8 chrome windows with 30 tabs each, carefully positioning each chrome window to stack on top of each other.

### Fast favicon updates

By default browsers look at some known URLs for favicons. But you can also add an element in the `head` of your HTML that says "hey, my favicon is here." If you update that element, the browser will change the icon.

But it wasn't clear to me how this would work when a tab was backgrounded. Browsers restrict the resources that a tab has access to when it is backgrounded — and most of our tabs wouldn't be in the foreground!

I did some simple testing and sure enough, my `setInterval` loop only ran ~once a second in a backgrounded tab! My timer was being throttled.

So I tried out web workers. Web workers are a way to offload a computationally-heavy task off of the main browser thread. And I thought they might be less throttled.

I moved my timer to the web worker and had it post messages back to the main document when my timer triggered. And this worked great! The backgrounded tabs synced up perfectly.

### Tab communication

Tab communication had two sub problems:

- How does each tab know where it is? That is, how do I know that I'm the third tab in the second window?
- What communication channel should I use to update my tabs?

The first problem was relatively easy — I had my AppleScript pass in the current window and tab index as a query parameter.

The second problem was more interesting. The most obvious solution was websockets, but I didn't want to have a server! I wanted to be able to deploy this to browser tabs across the world.

So I moved to broadcast channels — basically a way to distribute information across different tabs on the same domain. I taught backgrounded tabs to send a `registration` message containing their tab and window index. The `main` tab listened for these messages and sent back an `ack`. Once the main tab had received registration events for every backgrounded tab, it started running the animation.

## From canvas to tab bar

Once I had reasonable control over my tabs, I started thinking about what I should actually build. I thought it'd be cool if I could draw something in my foregrounded tab and then have that move "into" the tab bar.

There's this quote from Teller (of Penn and Teller) that I think about a lot when I make projects like this.

> Sometimes magic is just someone spending more time on something than anyone else might reasonably expect.

And while I want to be careful to not make *too much* of this comparison — I am no Teller!! — I had it in mind while doing this.

There's no magic here. Honestly, I just spent a while taking measurements. There are 92 pixels between the left side of a chrome window and the first favicon. And 58 pixels between the bottom of a favicon and the top of the actual window. And favicons are 16x16, and, and, and…

My code takes all of those measurements and uses them to calculate the width of the canvas, the width of each tab, and the dimensions of the entire "canvas" that it's drawing to — including the rows of favicons, the URL bar, and the actual canvas in the window.

### Making it faster

This worked ok! But it used a surprising amount of resources. I fell back on the age-old technique of disabling different bits of code until stuff worked, and eventually I hit on the issue; I was creating hundreds of favicons a second, and that was too slow.

Basically, my code created a 4x4 black and white image and turned that into a URL for the favicon. This code re-ran on each "frame" whether the resulting canvas had changed or not. I had hundreds of tabs that were re-creating tiny white square favicons multiple times a second!

I updated my code to only update the favicon if something changed and performance improved dramatically.

## So what do we build?

After getting my moving square working, I spent some time cleaning up my code just enough that I had a little "engine" that I could write my code against. And then I started thinking of games to make.

The first game I thought of was snake. I figured that snake was naturally block-based and pretty easy to program.

But I quickly ran into a problem. Snake is *too* block-based. Some of the beauty of the moving rectangle animation is how it moves from continuous (on the canvas) to discrete (in the tab bar). I think it's most natural to think of snake as a game operating over a discrete (and small) set of snake cell sized blocks.

So I tried to come up with a new game. Eventually I settled on Pong, since the ball and tabs would have to regularly move between the canvas and the tab bar, which I thought was a cool effect.

### Implementing pong

And then I implemented pong!

To be honest, I don't have too much to say about this part. I have enough practice writing games that getting pong working once I had a good API for drawing was pretty simple.

I was really happy with the effect of the ball and paddles smoothly sliding into the favicons, and ended up adding a trail to the ball to try to emphasize the movement.

The code is open source but extremely ugly; I never really left prototype mode on this one. Sorry about that.

## Wrapping up

This was a fun one! Thanks again to Tru for the inspiration.

I wrote this project while in batch at the Recurse Center — a (free!) place that is like a writer's retreat for programming. Recurse is really special, and it motivated me to get this post out the door today so that I could show this project during Recurse's weekly presentations.

I love Recurse a lot, and being in batch again has motivated me to really up my output — this is my 4th game in the last ~40 days! If you liked this project I think that you should consider applying.

Thanks for reading — I'll be back with more nonsense soon :)
