# yt-browse: a powerful youtube search TUI

Mar 4, 2026
Source: https://eieio.games/blog/yt-browse

---

I find searching within a youtube channel *very* frustrating. I can't search specifically for playlists, or filter out shorts, or sort my search results in any way, or restrict my search to a specific date range, or…

`yt-browse` is a TUI that solves this for me. It pulls in all videos for a channel and then offers powerful local search with all the features that I want.

I built this for myself, but if you'd like to try it you can get it here: https://github.com/nolenroyalty/yt-browse

## Why do I want this?

A few of my favorite channels have thousands of videos and hundreds of playlists.

For example, the tcgplayer youtube has over 20,000 videos. ddrjake has 229 playlists (I got this number from yt-browse; I don't know how to get it from the youtube UI).

A question I might want to answer is "show my vintage cube drafts by Luis Scott-Vargas on the TCGPlayer channel, ordered by view count or upload date." There is just no way for me to do this from the youtube UI.

Or I might want to search for a specific playlist (or set of playlists) on Jake's channel - but I can't, because there's no playlist search functionality.

The youtube UI used to have more of these features, so it's really frustrating that I can't do this now. Ugh.

`yt-browse` exists to solve these problems for me. I think it's a better experience than searching channels directly, especially if they have a lot of videos.

## What can I do with this tool?

Pressing ? while `yt-browse` is running should show you all the shortcuts. But some useful features:

- Search all of a channel's playlists or videos, with fuzzy and regex support
- Filter out shorts from all search results
- Order search by view count, upload date, or duration (in ascending or descending order)
- Use `after:` and `before:` to search for videos within a date range
- Search over just titles or titles + descriptions
- Running without arguments lets you pick from recently-browsed channels

I've found this is the feature set I need to find the videos that I'm interested in. But I'm open to pull requests that add new useful stuff (I just might encourage you to fork the tool instead if the feature request isn't something I want!)

## How did I make this?

I made this largely using Claude code over a couple of days this week. It felt like a perfect project to build via an agent:

- I know the tools that I want to use, but typing the code is pretty annoying
- Easy to validate that the UI works the way I want; I am the test suite
- Relatively low-risk (the youtube API isn't scary, it's easy for me to validate that caching works)
- Not a project I'd be willing to spend to much time on otherwise

That said, I was a little surprised at the amount of time I still spent going back and forth with Claude code to make `yt-browse` work the way I wanted to. In particular, it took a good amount of pushing to make fetching a channel's videos as fast as possible (it's still slower than I'd like, but that's the youtube api's fault). And the UI went through a bunch of iterations.

I still feel kind of uneasy about making something where I don't carefully review all of the code, but I'm delighted to have a tool that scratches such a specific itch.

I hope someone else finds it useful too!

Thanks for reading!
