# Turing Machines

2024-12-20
Source: https://samwho.dev/turing-machines/

---

*Note: This post contains interactive Turing machine simulations that require JavaScript. The prose below is extracted for reading inspiration.*

In 1928, David Hilbert, one of the most influential mathematicians of his time, asked whether it is possible to create an algorithm that could determine the correctness of a mathematical statement. This was called the "decision problem," or "Entscheidungsproblem" in Hilbert's native German. In 1936 both Alan Turing and Alonzo Church independently reached the conclusion, using different methods, that the answer is "no."

The way Turing did it was to imagine a "universal machine", a machine that could compute anything that could be computed. This idea, the "Turing machine" as Alonzo Church christened it in 1937, laid the foundations for the device you are using to read this post. If we look hard enough we can see Turing's legacy in today's CPUs.

By the end of this post, you will know:

- What a Turing machine is.
- What can and cannot be computed.
- What it means to be Turing complete.
- How modern computers relate to Turing machines.
- How to write and run your own programs for a Turing machine.

## What *is* a Turing machine?

You might expect a universal machine, capable of computing anything that can be computed, to be a complex device. Nothing could be further from the truth. The machine has just 4 parts, and the language used to program it has just 5 instructions.

It's important to keep in mind that what Turing described is a **theoretical** machine. It was created as a thought experiment to explore the limits of what can be computed. Some have of course been built, but in 1936 they existed only in the heads of Turing and those who read his paper.

The parts are: a tape, a head, a program, and a state. The machine has 5 instructions:

- P prints a given symbol to the tape.
- R moves the tape head right.
- L moves the tape head left.
- H halts the machine.
- ↪︎ jumps to a given state.

You're telling me that everything can be computed with just these 5 instructions? Word processors, YouTube, video games, all of it?

All of it! You're probably not going to get Crysis running at 60fps on a simulated Turing machine, but all of the calculations required to render each frame can be done with just these 5 instructions. Everything you have ever seen a computer do can be done with a Turing machine.

## What does it mean to *compute*?

Something is said to be "computable" if there exists an algorithm that can get from the given input to the expected output. For example, adding together 2 integers is computable. The program does this by decrementing from the right number and incrementing the left number until the right number is 0.

That we can write this program at all is proof that addition is computable, but it also implies that all integers are computable. If we can add any 2 integers, we can compute any other integer. 1 is 0+1, 2 is 1+1, 3 is 2+1, and so on.

### Binary vs Decimal

You may have wondered why I'm choosing to work with binary numbers rather than decimal. It's not just because that's how modern computers work.

The program for manipulating decimal numbers is much longer than the binary equivalent. It's for this reason when programming Turing machines we prefer binary numbers: the programs end up being shorter and easier to reason about.

This benefit also translates to the physical world. Components that switch between 2 states are cheaper, smaller, and more reliable than components that switch between 10. It was more practical to build computers that worked in binary than ones that work in decimal, though attempts to build decimal computers were made.

## What *can't* be computed?

To approach this question we need to explain the "Halting problem." It goes like this:

> Given a program and some input, is it possible to write a second program that will tell you with certainty whether the first program will halt or run forever?

The answer is no, and this is what Turing essentially proved. The proof is complicated and I'm not ashamed to admit I don't understand it, but there is an example I can give you that can be intuitively understood to be "undecidable."

Imagine you write a program that takes as its input the program being used to decide whether it will halt or not. What it then does is run the decider program on itself, and then do the opposite of what the decider program says.

This program intentionally enters an infinite loop if it is told it will halt, and halts if it is told it will run forever. It seems like a silly example, the kind of answer a cheeky high school student might try to get away with, but it is a legitimate counterexample to the idea that the halting problem can be solved.

## What does it mean to be *Turing complete*?

If you've been involved in the world of programming for more than a few years, there's a good chance you've come across the term "Turing complete." Most likely in the context of things that really ought not to be Turing complete, like C++ templates, TypeScript's type system or Microsoft Excel.

But what does it *mean*?

A system is Turing complete if it can be used to simulate a Turing machine.

Wait a second, wouldn't you need an infinite amount of memory to simulate a Turing machine? Doesn't the tape extend forever in both directions?

You're right, and everyone tends to cheat a bit with the definition. When someone says something is Turing complete, what they mean is it *would* be Turing complete if it had an infinite amount of memory.

## How does this all relate to *modern computers*?

If you read around the topic of Turing machines outside of this post, you might see it said that modern computers are effectively Turing machines. You would be forgiven for finding it difficult to imagine how you go from adding 2 integers in binary on a tape to running a web browser, but the line is there.

A key difference between our Turing machine and the device you're reading this on is that your device's CPU has "registers." These are small pieces of memory that live directly on the CPU and are used to store values temporarily while they're being operated on. You can think of registers as variables for your CPU, but they can only store fixed-size numbers.

We *can* create registers in our Turing machine. We can do this by creating a "format" for our tape — defining registers with specific bit widths and a "home" marker for navigation.

This program is effectively equivalent to x86 assembly code. If we wanted to add values in A and B, storing the result in C, we need to do more work. But it's a start, and I hope it gives you a glimpse of how this theoretical machine can be built up to operate like a modern CPU.

If you watch the program run to completion, something that might strike you is just how much work is required to do something as simple as adding 2 numbers. Turing machines were not designed to be practical, Turing never intended anyone to go out and build one of these machines in the hope it will be useful.

Modern machines have circuits within them that can add 2 numbers together by passing 2 electrical signals in and getting the sum as a single signal out. This happens in less than a nanosecond. Modern machines have memory where any byte can be accessed at any time, no tape manipulation required. This memory access takes a few dozen nanoseconds.

## Writing and running your own programs

I've built a web-based development environment for writing programs that will run on the Turing machine visualisations you've seen throughout the post. You can access the editor at samwho.dev/christopher.

I encourage you to play around with it. Set a simple goal, like adding together 2 numbers without going back to look at the way I did it in the post. It's a great way to get a feel for how the machine works.

## Conclusion

To recap, we've covered:

- What a Turing machine is.
- What can and cannot be computed.
- What it means to be Turing complete.
- How modern computers relate to Turing machines.

And you now have access to an environment for writing and running your own Turing machine programs.

On June 8th, 1954, Alan Turing was found dead in bed, at his home in Wilmslow. He had died the day before, aged 41, from cyanide poisoning. A half-slice of apple was on his bedside table, laced with cyanide. An inquest ruled the death a suicide.

## Further reading

- Turing's original paper on computable numbers.
- The Annotated Turing by Charles Petzold — a fabulous read, strongly recommend.
- Alan Turing: The Enigma by Andrew Hodges — an excellent biography of Turing.
- Calculating a Mandelbrot Set using a Turing Machine — exceptionally useful for understanding how to get from Turing machines to modern computers.
