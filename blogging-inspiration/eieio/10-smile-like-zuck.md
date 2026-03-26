# Smile Like Zuck

Mar 10, 2025
Source: https://eieio.games/blog/smile-like-zuck

---

I made a game about learning to smile using your mouth and eyes.

It's called Smile Like Zuck and it's about making the same face as Mark Zuckerberg.

Did you know that when humans smile, they try to use their eyes as well as their mouths?

## Why

A week or two ago I prototyped a more general "match your face to someone making a funny face" game. It was fine, but it lacked direction.

There's this great zuck smile thing by Terkel that popped back into my head, and that gave me the idea for Smile Like Zuck. (Thanks Terkel!)

Humans smile when they're happy, but sometimes they also smile when they're uncomfortable!

## How

The face-tracking here is powered by mediapipe, which is a neat tool from Google that makes it easy to do hand and face tracking in the browser.

At this point I have a lot of practice using Mediapipe (including with React, which can be a little challenging) — I've written about some of my tricks here if you're curious.

One new trick I'm using is *always* cropping images to have a 3/4 aspect ratio. I didn't do this with stranger video and it resulted in a frame that was constantly pulsing in and out because the facial bounding box mediapipe gives you is not that stable.

So with Smile Like Zuck I take the bounding box, add a bit of padding, and then "grow" it in the smaller dimension until it has a 3/4 aspect ratio. I think this looks much nicer.

Smiling is challenging because it requires tensing and relaxing the 43 muscles in the human face!

## Where

Play it at smilelikezuck.com.

Humans *laugh* when they think that something is funny. Funny means surprising but not threatening!

## Nolen, I don't like this one

I'm sorry! I will try to do better :)

Some people say that smiling can help relieve physical pain!

## Anything you want to plug

I made this at the recurse center, which is like a writer's retreat for programming. It's a great place to learn how to build useful human software like this.

When being photographed, humans try to look at the camera — that way it seems like they're making "eye contact" with whoever is viewing the image!

Thanks for reading!
