# Reservoir Sampling

2025-05-07
Source: https://samwho.dev/reservoir-sampling/

---

Reservoir sampling is a technique for selecting a fair random sample when you don't know the size of the set you're sampling from. By the end of this essay you will know:

- When you would need reservoir sampling.
- The mathematics behind how it works, using only basic operations: subtraction, multiplication, and division. No math notation, I promise.
- A simple way to implement reservoir sampling if you want to use it.

## Sampling when you know the size

In front of you are 10 playing cards and I ask you to pick 3 at random. How do you do it?

The first technique that might come to mind from your childhood is to mix them all up in the middle. Then you can straighten them out and pick the first 3.

Every time you shuffle, all cards have an equal chance of being selected. This makes it "fair."

This method works fine with 10 cards, but what if you had 1 million cards? Mixing those up won't be easy. Instead, we could use a random number generator to pick 3 indices. These would be our 3 chosen cards.

Now let me throw you a curveball: what if I were to show you 1 card at a time, and you had to pick 1 at random?

How many cards are you going to show me?

That's the curveball: you don't know.

Can I hold on to all the cards you give me and then pick 1 after you stop?

No, you can only hold on to 1 card at a time. You're free to swap your card with the newest one each time I show you a card, but you can only hold one and you can't go back to a card you've already seen.

Then it's impossible! Why would I ever need to do this anyway?

Believe it or not, this is a real problem and it has a real and elegant solution.

For example, let's say you're building a log collection service. This service receives log messages from other services and stores them so that it's easy to search them in one place.

One of the things you need to think about when building a service like this is what do you do when another service starts sending you way too many logs. Maybe it's a bad release, maybe one of your videos goes viral. Whatever the reason, it threatens to overwhelm your log collection service.

What we really want is to send *at most* 5 logs per second. This would mean that during quiet periods you get all the logs, but during spikes you discard logs to protect the log collection service.

The simple way to achieve this would be to send the first 5 logs you see each second, but this isn't fair. You aren't giving all logs an equal chance of being selected.

## Sampling when you don't know the size

We instead want to pick a fair sample of all the logs we see each second. The problem is that we don't know how many we will see. Reservoir sampling is an algorithm that solves this exact problem.

Let's go back to our curveball of me showing you 1 card at a time. Here's a recap of the rules:

1. I'll draw cards one at a time from a deck.
2. Each time I show you a card, you have to choose to hold it or discard it.
3. If you were already holding a card, you discard your held card before replacing it with the new card.
4. At any point I can stop drawing cards and whatever card you're holding is the one you've chosen.

How would you play this game in a way that ensures all cards have been given an equal chance to be selected when I decide to stop?

How about we flip a coin every new card? If it's heads, we keep the card we have. If it's tails, we swap it out for the new card.

The problem is that while the hold vs discard counts are roughly equal, later cards are much more likely to be held when I stop than earlier cards. The first card drawn has to win 10 coin flips to still be in your hand after the 10th card is drawn. The last card only has to win 1.

Because believe it or not, we only have to make one small change to this idea to make it fair.

Instead of flipping a coin to decide if we'll hold the card or not, instead we give each new card a `1/n` chance of being held, where `n` is the number of cards we've seen so far.

Wait, that's it? That makes it fair?

Yep! In order to be fair, every card must have an equal chance of being selected. So for the 2nd card, we want both cards to have a `1/2` chance. For the 3rd card, we want all 3 cards to have a `1/3` chance. For the 4th card, we want all 4 cards to have a `1/4` chance, and so on. So if we use `1/n` for the new card, we can at least say that the new card has had a fair shot.

I get how each **new** card has the right chance of being selected, but how does that make the **older** cards fair?

So far we've focused on the chance of the new card being selected, but we also need to consider the chance of the card you're holding staying in your hand.

### Card 1

The first card is easy: we're not holding anything, so we always choose to hold the first card. The chance we're holding this card is `1/1`, or `100%`.

### Card 2

This time we have a real choice. We've said that we're going to do this with a `1/n` chance, where `n` is the number of cards we've seen so far. So our chance of replacing the first card is `1/2`, or `50%`, and our chance of keeping hold of the first card is its chance of being chosen last time multiplied by its chance of not being replaced, so `100% * 1/2`, which is again `50%`.

### Card 3

The new card has a `1/3` chance of being selected, so the card we're holding has a `1/3` chance of being replaced. This means that our held card has a `2/3` chance of remaining held. So its chances of "surviving" this round are `50% * 2/3`.

### Card N

This pattern continues for as many cards as you want to draw.

If `1/n` is the chance of choosing the new card, `1/(n-1)` is the chance of choosing the new card from the previous draw. The chance of *not* choosing the new card is the *complement* of `1/n`, which is `1-(1/n)`.

There's a good chance that through the 2nd half of the deck, you never swap your chosen card. This *feels* wrong, at least to me, but as we saw above the numbers say it is completely fair.

## Choosing multiple cards

Now that we know how to select a single card, we can extend this to selecting multiple cards. There are 2 changes we need to make:

1. Rather than new cards having a `1/n` chance of being selected, they now have a `k/n` chance, where `k` is the number of cards we want to choose.
2. When we decide to replace a held card, we choose one of the `k` cards we're holding at random.

The fairness still holds, and will hold for any `k` and `n` pair. This is because all held cards have an equal chance of being replaced, which keeps them at an equal likelihood of still being in your hand every draw.

A nice way to implement this is to use an array of size `k`. For each new card, generate a random number between 0 and `n`. If the random number is less than `k`, replace the card at that index with the new card. Otherwise, discard the new card.

And that's how reservoir sampling works!

## Applying this to log collection

Let's take what we now know about reservoir sampling and apply it to our log collection service. We'll set `k=5`, so we're "holding" at most 5 log messages at a time, and every second we will send the selected logs to the log collection service. After we've done that, we empty our array of size 5 and start again.

This creates a "lumpy" pattern, and highlights a trade-off when using reservoir sampling. It's no longer a real-time stream of logs, but chunks of logs sent at an interval. However, sent logs never exceeds the threshold, and during quiet periods the two lines track each other almost perfectly.

No logs lost during quiet periods, and never more than threshold logs per second sent during spikes. The best of both worlds. It also doesn't store more than `k=5` logs, so it will have predictable memory usage.

## Further reading

Something you may have thought while reading this post is that some logs are more valuable than others. You almost certainly want to keep all error logs, for example.

For that use-case there *is* a weighted variant of reservoir sampling. The key point is that it exists and if you need it you can use it.

## Conclusion

Reservoir sampling is one of my favourite algorithms, and I've been wanting to write about it for years now. It allows you to solve a problem that at first seems impossible, in a way that is both elegant and efficient.
