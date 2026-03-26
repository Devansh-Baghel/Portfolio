# Load Balancing

2023-04-10
Source: https://samwho.dev/load-balancing/

---

Past a certain point, web applications outgrow a single server deployment. Companies either want to increase their availability, scalability, or both! To do this, they deploy their application across multiple servers with a load balancer in front to distribute incoming requests. Big companies may need thousands of servers running their web application to handle the load.

In this post we're going to focus on the ways that a single load balancer might distribute HTTP requests to a set of servers. We'll start from the bottom and work our way up to modern load balancing algorithms.

## Visualising the problem

Let's start at the beginning: a single load balancer sending requests to a single server. Requests are being sent at a rate of 1 request per second (RPS), and each request reduces in size as the server processes it.

For a lot of websites, this setup works just fine. Modern servers are powerful and can handle a lot of requests. But what happens when they can't keep up?

A rate of 3 RPS causes some requests to get dropped. If a request arrives at the server while another request is being processed, the server will drop it. We can add another server to our load balancer to fix this.

No more dropped requests! The way our load balancer is behaving here, sending a request to each server in turn, is called "round robin" load balancing. It's one of the simplest forms of load balancing, and works well when your servers are all equally powerful and your requests are all equally expensive.

## When round robin doesn't cut it

In the real world, it's rare for servers to be equally powerful and requests to be equally expensive. Even if you use the exact same server hardware, performance may differ.

Let's see what happens when we vary request cost. While most requests get served successfully, we do drop some. One of the ways we can mitigate this is to have a "request queue."

Request queues help us deal with uncertainty, but it's a trade-off. We will drop fewer requests, but at the cost of some requests having a higher latency. Thanks to the request cost variance, servers start to exhibit an imbalance. Queues will get backed up on servers that get unlucky and have to serve multiple expensive requests in a row.

Everything said above applies equally to servers that vary in power. The servers are given a random power value, but odds are some are less powerful than others and quickly start to drop requests. At the same time, the more powerful servers sit idle most of the time. This scenario shows the key weakness of round robin: variance.

Despite its flaws, however, round robin is still the default HTTP load balancing method for nginx.

## Improving on round robin

It's possible to tweak round robin to perform better with variance. There's an algorithm called "weighted round robin" which involves getting humans to tag each server with a weight that dictates how many requests to send to it.

While this handles the variance of server power better than vanilla round robin, we still have request variance to contend with. In practice, getting humans to set the weight by hand falls apart quickly.

Another variant calculates weights dynamically by using a proxy metric: latency. It stands to reason that if one server serves requests 3 times faster than another server, it's probably 3 times faster and should receive 3 times more requests. This is called "dynamic weighted round robin."

## Moving away from round robin

Dynamic weighted round robin seems to account well for variance in both server power and request cost. But what if I told you we could do even better, and with a simpler algorithm?

This is called "least connections" load balancing. Because the load balancer sits between the server and the user, it can accurately keep track of how many outstanding requests each server has. Then when a new request comes in, it knows which servers have the least work to do and prioritises those.

This algorithm performs extremely well regardless how much variance exists. It cuts through uncertainty by maintaining an accurate understanding of what each server is doing. It also has the benefit of being very simple to implement.

While this algorithm is a great balance between simplicity and performance, it's not immune to dropping requests. However, what you'll notice is that the only time this algorithm drops requests is when there is literally no more queue space available.

## Optimizing for latency

Up until now I've been avoiding a crucial part of the discussion: what we're optimising for. Implicitly, I've been considering dropped requests to be really bad and seeking to avoid them. This is a nice goal, but it's not the metric we most want to optimise for in an HTTP load balancer.

What we're often more concerned about is latency. When we're discussing latency in this context, it is common to talk about different "percentiles." For example, the 50th percentile (also called the "median") is defined as the millisecond value for which 50% of requests are below, and 50% are above.

Round robin has the best median latency. But round robin doesn't perform well in the higher percentiles. How can it be that round robin has a great median, but bad 95th and 99th percentiles?

In round robin, the state of each server isn't considered, so you'll get quite a lot of requests going to servers that are idle. This is how we get the low 50th percentile. On the flip side, we'll also happily send requests to servers that are overloaded, hence the bad 95th and 99th percentiles.

Least connections handles overload much better, but the cost of doing that is slightly higher 95th and 99th percentile latencies. Depending on your use-case, this might be a worthwhile trade-off.

## One last algorithm

If we *really* want to optimise for latency, we need an algorithm that takes latency into account. Turns out we're not the first people to have this thought. There's an algorithm called "peak exponentially weighted moving average" (or PEWMA).

For each server, the algorithm keeps track of the latency from the last N requests. Instead of using this to calculate an average, it sums the values but with an exponentially decreasing scale factor. Recent requests influence the calculation more than old ones.

That value is then taken and multiplied by the number of open connections to the server and the result is the value we use to choose which server to send the next request to. Lower is better.

We see a marked improvement across the board compared to least connections! It's far more pronounced at the higher percentiles. However, PEWMA starts out performing better on dropped requests, but over time performs worse than least connections. This makes sense — PEWMA is opportunistic in that it tries to get the best latency, and this means it may sometimes leave a server less than fully loaded.

This is one of the downsides of PEWMA vs least connections: extra complexity.

## Conclusion

I spent a long time on this post. It was difficult to balance realism against ease of understanding, but I feel good about where I landed. I'm hopeful that being able to see how these complex systems behave in practice, in ideal and less-than-ideal scenarios, helps you grow an intuitive understanding of when they would best apply to your workloads.

**Obligatory disclaimer**: You must always benchmark your own workloads over taking advice from the Internet as gospel. My simulations here ignore some real life constraints (server slow start, network latency), and are set up to display specific properties of each algorithm. They aren't realistic benchmarks to be taken at face value.
