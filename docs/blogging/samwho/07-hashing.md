# Hashing

2023-05-24
Source: https://samwho.dev/hashing/

---

As a programmer, you use hash functions every day. They're used in databases to optimise queries, they're used in data structures to make things faster, they're used in security to keep data safe. Almost every interaction you have with technology will involve hash functions in one way or another.

Hash functions are foundational, and they are **everywhere**.

But what *is* a hash function, and how do they work?

In this post, we're going to demystify hash functions. We're going to start by looking at a simple hash function, then we're going to learn how to test if a hash function is good or not, and then we're going to look at a real-world use of hash functions: the hash map.

## What *is* a hash function?

Hash functions are functions that take an input, usually a string, and produce a number. If you were to call a hash function multiple times with the same input, it will always return the same number, and that number returned will always be within a promised range.

## What makes a hash function good?

Because the input can be any string, but the number returned is within some promised range, it's possible that two different inputs can return the same number. This is called a "collision," and good hash functions try to minimise how many collisions they produce.

To visualise collisions, we can use a grid. Each square of the grid represents a number output by a hash function. Every time we hash a value, we make its corresponding square on the grid a bit darker. What we're looking for is a nice, even distribution.

> You said that when a hash function outputs the same value for 2 different inputs, that's a collision. But if we have a hash function that outputs values in a big range, and we mapped those to a small grid, aren't we going to create lots of collisions on the grid that aren't actually collisions?

This is a great observation. You're absolutely right, we're going to be creating "pseudo-collisions" on our grid. It's okay, though, because if the hash function is good we will still see an even distribution.

Let's take a larger grid and hash 1,000 randomly-generated strings using a well-known hash function called `murmur3`. This hash is widely used in the real-world because it has great distribution while also being really, really fast.

What would our grid look like if we used a *bad* hash function — one that just sums the character codes of the input string? With random input, it doesn't look that different. But when the input isn't random — like the numbers from 1 to 1000 converted to strings — the problem becomes clear. The bad hash function forms a pattern, while `murmur3` looks the same as it always does.

### The avalanche effect

Another way hash functions get evaluated is on something called the "avalanche effect." This refers to how many bits in the output value change when just a single bit of the input changes. To say that a hash function has a good avalanche effect, a single bit flip in the input should result in an average of 50% the output bits flipping.

It's this property that helps hash functions avoid forming patterns. If small changes in the input result in small changes in the output, you get patterns. Patterns indicate poor distribution, and a higher rate of collisions.

## Why all of this matters

We've taken the time to understand some of the ways to determine if a hash function is good, but we've not spent any time talking about why it matters. Let's fix that by talking about hash maps.

A map is a data structure that allows you to store key-value pairs. A more fun real-world use-case would be to find anagrams. If you sort the letters in each word alphabetically and use that as a key in a map, words that are anagrams will share the same key.

Hash maps are one of many map implementations. The simplest way is to use a list of lists. The inner lists are often referred to as "buckets." A hash function is used on the key to determine which bucket to store the key-value pair in.

This is also why reducing collisions is so crucial. If we used a dummy hash function that always returns 0, we'd put all of our key-value pairs into the first bucket. Finding anything could mean we have to check all of the values in the hash map. With a good hash function, we reduce the amount of searching we have to do to 1/N, where N is the number of buckets.

## Real-world collisions

When we use hash maps for real, we aren't usually storing random values in them. A bad hash function like `stringSum` has an extremely high collision rate for real-world data — 99.5% collisions on English words, compared to `murmur3`'s 0.005%.

## Manufactured collisions

Now it's `murmur3`'s turn for some bad news. It's not just collisions caused by similarity in the input we have to worry about. Bad actors can find collisions by brute force. I hashed 141 trillion random strings to find values that collide with `murmur3` — and it only took 25 minutes.

This isn't theoretical, either. If you search "HashDoS" you'll find a lot of examples of this. It was a really big deal in the mid-2000s.

Modern hash functions offer a solution: randomisation via a `seed` (sometimes called `salt`). With `murmur3`, changing the seed from 0 to 1 eliminated all of the collisions I'd found. Programming languages often generate a random number to use as the seed when the process starts, so that every time you run your program the seed is different. As a bad guy, not knowing the seed, it is now impossible to reliably cause harm.

## Conclusion

We've covered what a hash function is, some ways to measure how good it is, what happens when it's not good, and some of the ways they can be broken by bad actors.

The universe of hash functions is a large one, and we've really only scratched the surface. We haven't spoken about cryptographic vs non-cryptographic hashing, we've touched on only 1 of the thousands of use-cases for hash functions, and we haven't talked about how exactly modern hash functions actually work.

Some further reading:

- smhasher repository — the gold standard for testing how good hash functions are.
- HyperLogLog — an interactive piece on a data structure that uses hashing in a really clever way.
- gperf — software that can generate a "perfect" hash function automatically.
