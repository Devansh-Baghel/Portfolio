# Big O

2025-08-23
Source: https://samwho.dev/big-o/

---

Big O notation is a way of describing the performance of a function without using time. Rather than timing a function from start to finish, big O describes how the time grows as the input size increases. It is used to help understand how programs will perform across a range of inputs.

In this post I'm going to cover 4 frequently-used categories of big O notation: **constant**, **logarithmic**, **linear**, and **quadratic**. Don't worry if these words mean nothing to you right now. I'm going to talk about them in detail, as well as visualise them, throughout this post.

## Iterating

Consider a JavaScript function that calculates the sum of 1 to n. It loops from 1 to n, adding each number to a total. When we pass in 1 billion, it takes just under 1 second. When we pass in 2 billion, it takes about twice as long. The code loops `n` times and does a single addition each time.

The relationship between a function's input and how long it takes to execute is called its **time complexity**, and **big O notation** is how we communicate what the time complexity of a function is.

Because `sum`'s wall-clock time grows at the same rate as `n`, we say that `sum` is a "linear" function. It has a big O of n, or **O(n)**.

The "O" stands for "order," short for "order of growth." Said out loud it would be: "the order of growth of the `sum` function is n." **O(n)** is a compact way to write that. The notation was created by the German mathematician Paul Bachmann in 1894.

A different way to sum the numbers from 1 to n is to use the formula `(n*(n+1))/2`. This formula runs in constant time — **O(1)** — because the wall-clock time is about the same no matter what input you give it.

Wow, so we improved our sum function from **O(n)** to **O(1)**! It always runs instantly now!

We did! Though it is crucial to remember that **O(1)** doesn't *always* mean "instant." It means that **the time taken doesn't increase with the size of the input.**

It's also possible for an **O(n)** algorithm to be faster than an **O(1)** algorithm for some of its inputs. Eventually, though, the **O(1)** algorithm will outpace the **O(n)** algorithm as the input size grows.

The **O(1)** line is always flat, so why don't we say **O(20)** instead?

The purpose of big O notation is to describe the relationship between the input and the wall-clock time of a function. It isn't concerned with what that wall-clock time ends up being, only with how it grows.

Big O describes growth in the smallest terms possible. It would quickly get messy if the world had to figure out what number to put inside the brackets for every function, and have those numbers be correct relative to each other. Likewise, linear functions are always **O(n)** and never **O(2n)** or **O(n + 1)**, because **O(n)** is the smallest linear term.

## Sorting

Let's move away from `sum` and talk about a different algorithm: **bubble sort**.

The idea behind bubble sort is that you loop over the input array and swap elements next to each other if they are not in the desired order. You do this until you're able to complete a loop through the array without making any swaps. It's called bubble sort because of the way numbers "bubble" up to their correct position.

If the array is already sorted, the algorithm loops through once, does no swaps, and exits. This would be **O(n)**. But if the array is in any other order, we need to loop through more than once. In the worst case, where the array is in reverse order, we would have to loop through `n` times in order to move the smallest element from the end to the start.

Looping through the `n` elements of our array `n` times results in `n*n` operations, or `n^2`. That means **bubble sort is an O(n^2) algorithm**. Sometimes called **quadratic.**

Because it's common for an algorithm's performance to depend not just on the *size* of the input, but also its arrangement, **big O notation, unless stated otherwise, describes the worst-case scenario**.

## Searching

The last algorithm I want to talk about is **binary search**.

Let's start with a game. **Think of a number between 1 and 100.** I'm going to try and guess what it is. What I'm doing is starting in the middle of the range, 50, and eliminating half of the possibilities with each guess. This is a **binary search**.

Using this method it will never take more than 7 guesses to find your number. This is because we start with 100 possibilities and half of the possibilities are ruled out with each guess.

When it's possible to eliminate a fraction of possibilities with every step of an algorithm, we call it **logarithmic**. That means that binary search is an **O(log n)** algorithm.

Every time the target number doubles, I need 1 extra guess to find it. If you were to pick a number between 1 and 1 billion, I would need 31 guesses at most to find it. Logarithmic growth is really slow!

## Putting this knowledge to work

### Finding an item in a list

If you're looking up items in the same list lots of times, you might want to consider using a data structure that allows for faster lookups, such as a **Set**. Modern browsers implement `Set` in a way that gives **O(1)** time complexity for lookups.

However, don't build a `Set` inside the function every time — *building* the `new Set(items)` is an **O(n)** operation! You need to weigh the cost of this upfront work against the potential savings from faster lookups.

### Loop an array with indexes

A common mistake I've seen dozens of times in production code is calling `.indexOf` inside a loop. The `.indexOf` function is an **O(n)** operation! Calling it inside the loop makes the overall big O **O(n^2)**!

To fix this we can loop using an index. Looking up an element in an array by its index is **O(1)**, so the overall big O of the function is reduced to **O(n)**.

### Caching intermediate results

We can cache the result of each calculation to avoid redundant work. This makes use of the **O(1)** time complexity for lookups in a `Map`. It doesn't change the worst case time complexity, but it does make the average case faster at the cost of increased memory usage.

When it comes to performance, remember that you can't ever take what you read online at face value. **Always test your code** before and after changes to make sure you're actually improving it!

## Conclusion

Let's recap what we've learned:

- Big O notation describes the **relationship between a function's input and its wall-clock time**.
- From slowest growth to fastest growth we saw examples of:
    - **O(1)**, constant time (best!)
    - **O(log n)**, logarithmic time
    - **O(n)**, linear time
    - **O(n^2)**, quadratic time
- We can improve the time complexity of the code we write by making better algorithmic choices and avoiding common pitfalls.

These posts take me a long time to write, and they wouldn't be possible without the support of my family, friends, sponsors, and reviewers. I'm so grateful to all of you — you know who you are — for making it possible for me to make these.
