# Memory Allocation

2023-04-13
Source: https://samwho.dev/memory-allocation/

---

One thing that all programs on your computer have in common is a need for memory. Programs need to be loaded from your hard drive into memory before they can be run. While running, the majority of what programs do is load values from memory, do some computation on them, and then store the result back in memory.

In this post I'm going to introduce you to the basics of memory allocation. Allocators exist because it's not enough to have memory available, you need to use it effectively. We will visually explore how simple allocators work. We'll see some of the problems that they try to solve, and some of the techniques used to solve them. At the end of this post, you should know everything you need to know to write your own allocator.

## `malloc` and `free`

To understand the job of a memory allocator, it's essential to understand how programs request and return memory. `malloc` and `free` are functions that were first introduced in a recognisable form in UNIX v7 in 1979(!).

> Woah, hold on. I've never written any C code before. Will I still be able to follow along?

If you have beginner-level familiarity with another language, e.g. JavaScript, Python, or C#, you should have no problem following along. You don't need to understand every word, as long as you get the overall idea. This is the only C code in the article, I promise.

In the program we ask for 4 bytes of memory by calling `malloc(4)`, store the value returned in a variable called `ptr`, then indicate that we're done with the memory by calling `free(ptr)`.

These two functions are how almost all programs manage the memory they use. Even when you're not writing C, the code that is executing your Java, Python, Ruby, JavaScript, and so on make use of `malloc` and `free`.

## What is memory?

The smallest unit of memory that allocators work with is called a "byte." A byte can store any number between 0 and 255. You can think of memory as being a long sequence of bytes.

In the C code from before, `malloc(4)` allocates 4 bytes of memory. Allocated memory is represented as darker squares. Then `free(ptr)` tells the allocator we're done with that memory.

## The simplest `malloc`

The "hello world" of `malloc` implementations would hand out blocks of memory by keeping track of where the previous block ended and starting the next block right after.

You'll notice no memory is `free`d. If we're only keeping track of where the next block should start, and we don't know where previous blocks start or end, `free` doesn't have enough information to do anything. This is called a "memory leak" because, once allocated, the memory can never be used again.

Believe it or not, this isn't a completely useless implementation. For programs that use a known amount of memory, this can be a very efficient strategy. It's extremely fast and extremely simple.

## The simplest general-purpose `malloc`

In order to `free` memory, we need to keep better track of memory. We can do this by saving the address and size of all allocations, and the address and size of blocks of free memory. We'll call these an "allocation list" and a "free list" respectively.

When `malloc` is called, we loop through our free list until we find a block large enough to accommodate it. When we find one, we save the address and size of the allocation in our allocation list, and shrink the free list entry accordingly.

> Where do we save allocations and free list entries? Aren't we pretending our computer only has 32 bytes of memory?

You caught me. One of the benefits of being a memory allocator is that you're in charge of memory. You could store your allocation/free list in a reserved area that's just for you. Or you could store it inline, in a few bytes immediately preceding each allocation.

So what about `free`? Because we've saved the address and size of the allocation in our allocation list, we can search that list and move the allocation back in to the free list.

Our free list now has 2 entries. This might look harmless, but actually represents a significant problem. We allocated 8 blocks of memory, each 4 bytes in size. Then we `free`d them all, resulting in 8 free list entries. The problem is that if we tried to do a `malloc(8)`, there are no items in our free list that can hold 8 bytes and the `malloc(8)` will fail.

To solve this, when we `free` memory, we should make sure that if the block we return to the free list is next to any other free blocks, we combine them together. This is called "coalescing."

## Fragmentation

A perfectly coalesced free list doesn't solve all of our problems. We can end up with 6 of our 32 bytes free, but split into 2 blocks of 3 bytes. If we had to service a `malloc(6)`, while we have enough free memory in theory, we wouldn't be able to. This is called "fragmentation."

> Couldn't we rearrange the memory to get a block of 6 contiguous bytes? Some sort of defragmentation process?

Sadly not. Remember how the return value of `malloc` is the address of a byte in memory? Moving allocations won't change the pointers we have already returned from `malloc`. We would change the value those pointers are pointed at, effectively breaking them.

One way to combat fragmentation is to overallocate. If we always allocate a minimum of 4 bytes, even when the request is for 1 byte, we trade some wasted space in return for less fragmentation.

Another way to combat fragmentation is to segment memory into a space for small allocations and a space for big ones. Allocators that split memory up based on the size of allocation are called "slab allocators." In practice they have many more size classes than the 2 in our example.

## A quick `malloc` puzzle

What happens if you `malloc(0)`? It turns out that what happens differs between implementations. Some behave as above, allocating space they probably didn't have to. Others return a "null pointer." Others pick one specific location in memory and return that same location for all calls to `malloc(0)`.

Moral of the story? Don't `malloc(0)`.

## Inline bookkeeping

Lots of allocators store information right next to the blocks of memory they relate to. Each block of memory, free or used, gets additional bytes of bookkeeping information.

> We store the size twice? Isn't that wasteful?

It seems wasteful at first, but it is necessary if we want to do any form of coalescing. Without this duplicated size information at the end of the block, it would be impossible to find the previous block and impossible to coalesce properly.

Allocators that store bookkeeping information like this alongside allocations are called "boundary tag allocators."

> What's stopping a program from modifying the bookkeeping information? Wouldn't that completely break memory?

Surprisingly, nothing truly prevents this. We rely heavily, as an industry, on the correctness of code. You might have heard of "buffer overrun" or "use after free" bugs before. These are indeed catastrophic.

We're seeing a rise in popularity of "memory safe" languages, for example Rust. These languages invest a lot in making sure it's not possible to make these types of mistake in the first place.

To get around this, some allocators inject "magic" values as part of the bookkeeping information. This wastes an extra byte of memory per allocation, but allows them to know when a mistake has been made.

## Conclusion

We've covered a lot in this post, and if it has left you yearning for more you won't be disappointed. I've specifically avoided the topics of virtual memory, `brk` vs `mmap`, the role of CPU caches, and the endless tricks real `malloc` implementations pull out of their sleeves. There's no shortage of information about memory allocators on the Internet, and if you've read this far you should be well-placed to dive in to it.
