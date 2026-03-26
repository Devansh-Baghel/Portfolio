# Bloom Filters

2024-02-19
Source: https://samwho.dev/bloom-filters/

---

*Note: This post assumes you know what a hash function is. Sam recommends reading his post about hash functions first.*

Everyone has a set of tools they use to solve problems. Growing this set helps you to solve ever more difficult problems. In this post, I'm going to teach you about a tool you may not have heard of before. It's a niche tool that won't apply to many problems, but when it does you'll find it invaluable. It's called a "bloom filter."

## What bloom filters can do

Bloom filters are similar to the `Set` data structure. You can add items to them, and check if an item is present. While this looks almost identical to a `Set`, there are some key differences. Bloom filters are what's called a **probabilistic data structure**. Where a `Set` can give you a concrete "yes" or "no" answer when you call `contains`, a bloom filter can't. Bloom filters can give definite "no"s, but they can't be certain about "yes."

When bloom filters return `true` it doesn't mean "yes", it means "maybe". When this happens and the item has never been added before, it's called a **false-positive**.

The opposite, claiming "no" when the answer is "yes," is called a **false-negative**. A bloom filter will *never* give a false-negative, and this is what makes them useful.

A data structure that lies to you?! How could that possibly be useful?

It's not strictly lying, it's just not giving you a definite answer. Let's look at an example where we can use this property to our advantage.

## When bloom filters are useful

Imagine you're building a web browser, and you want to protect users from malicious links. You could build and maintain a list of all known malicious links and check the list every time a user navigates the browser.

If we assume there are, say, 1,000,000 malicious links on the Internet, and each link is 20 characters long, then the list of malicious links would be 20MB in size. This isn't a huge amount of data, but it's not small either.

However, if you're happy to accept being wrong 0.0001% of the time (1 in a million), you could use a bloom filter which can store the same data in 3.59MB. That's an 82% reduction in size, and all it costs you is showing the user an incorrect warning 1 in every million links visited.

This use-case isn't hypothetical, either. Google Chrome used a bloom filter for this exact purpose until 2012. If you were worried about showing a warning when it wasn't needed, you could always make an API that has the full list of malicious links in a database. When the bloom filter says "maybe," you would then make an API call to check the full list to be sure. No more spurious warnings, and the bloom filter would save you from having to call the API for every link visited.

## How bloom filters work

At its core, a bloom filter is an array of bits. When it is created, all of the bits are set to 0.

To add an item to the bloom filter, we're going to hash it with 3 different hash functions, then use the 3 resulting values to set 3 bits.

You might occasionally notice that only 2, or even 1, bits get set. This happens when 2 or more of our hash functions produce the same value, or we attempt to set a bit that has already been set. Taking that a bit further, have a think about the implications of a bloom filter that has every bit set.

Hmm... If every bit is set, then won't the bloom filter claim it contains every item you check? That's a false-positive every time!

Exactly right. A bloom filter with every bit set is equivalent to a `Set` that always returns `true` for `contains`.

## False-positive rates

The rate of false-positives in our bloom filter will grow as the percentage of set bits increases. It grows slowly at first, but as we get closer to having all bits set the rate increases. This is because we calculate the false-positive rate as `x^3`, where `x` is the percentage of set bits and `3` is the number of hash functions used.

It looks like more hash functions we use, the better our false-positive rate is. Doesn't that mean we should always use lots of hash functions?

The problem that using lots of hash functions introduces is that it makes the bloom filter fill up faster. The more hash functions you use, the more bits get set for each item you add. There's also the cost of hashing itself. Hash functions aren't free, and while the hash functions you'd use in a bloom filter try to be as fast as possible, it's still more expensive to run 100 of them than it is to run 3.

In practice, 1000 bits is a very small bloom filter, occupying only 125 bytes of memory. Modern computers have a lot of memory, so let's crank this up to 100,000 bits (12.5kB) and see what happens. The bloom filter will be very empty and the false-positive rate will be low. All this cost us was 12.5kB of memory.

## Tuning a bloom filter

Picking the correct number of hash functions and bits for a bloom filter is a fine balance. Fortunately for us, if we know up-front how many unique items we want to store, and what our desired false-positive rate is, we can calculate the optimal number of hash functions, and the required number of bits.

The more items you plan to add, the fewer hash functions you should use. Yet, a larger bloom filter means you can use more hash functions. More hash functions keep the false-positive rate lower for longer, but more items fills up the bloom filter faster. It's a complex balancing act, and I am thankful that mathematicians have done the hard work of figuring it out for us.

While we can stand on the shoulders of giants and pick the optimal number of bits and hash functions for our bloom filter, it's important to remember that these rely on you giving good estimates of the number of items you expect to add, and choosing a false-positive rate that's acceptable for your use-case. These numbers might be difficult to come up with, and I recommend erring on the side of caution.

## Removing items from a bloom filter

We've spent the whole post talking about adding things to a bloom filter, and the optimal parameters to use. We haven't spoken at all about removing items.

And that's because you can't!

In a bloom filter, we're using bits to track the presence of items. If we were to remove an item by setting its bits to 0, we might also be removing other items by accident. There's no way of knowing.

### Counting bloom filters

While you can't remove items from a standard bloom filter, there are variants that allow you to do so. One of these variants is called a "counting bloom filter," which uses an array of counters instead of bits.

The trade-off is that counters are bigger than bits. Using 8x more memory than a standard bloom filter could be a big deal, especially if you're using a bloom filter to save memory in the first place.

Counting bloom filters also introduce the possibility of false-negatives, which are impossible in standard bloom filters. This removes one of the key benefits of using a bloom filter in the first place.

## Bloom filters in the real-world

Real-world users of bloom filters include Akamai, who use them to avoid caching web pages that are accessed once and never again. They do this by storing all page accesses in a bloom filter, and only writing them into cache if the bloom filter says they've been seen before.

Google's BigTable is a distributed key-value store, and uses bloom filters internally to know what keys are stored within. When a read request for a key comes in, a bloom filter in memory is first checked to see if the key is in the database. If not, BigTable can respond with "not found" without ever needing to read from disk.

## Conclusion

Bloom filters, while niche, can be a huge optimisation in the right situation. They're a wonderful application of hash functions, and a great example of making a deliberate trade-off to achieve a specific goal.

Trade-offs, and combining simpler building blocks to create more complex, purpose-built data structures, are present everywhere in software engineering. Being able to spot where a data structure could net a big win can separate you from the pack, and take your career to the next level.

I hope you've enjoyed this post, and that you find a way to apply bloom filters to a problem you're working on.
