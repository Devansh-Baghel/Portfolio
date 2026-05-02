---
title: "Cloudflare AI Complete Tutorial (Every AI Service)"
source: "https://www.youtube.com/watch?v=pIa9pt0-C9U"
author:
  - "[[Mehul Mohan]]"
published: 2026-04-23
created: 2026-04-26
description: "Thanks to Cloudflare for sponsoring this video! Check out Cloudflare AI here: https://mehulmohan.com/recommends/cloudflareMake sure you leave a like and subscribe to the channel!Follow me on:X ht"
tags:
  - "clippings"
---
![](https://www.youtube.com/watch?v=pIa9pt0-C9U)

Thanks to Cloudflare for sponsoring this video! Check out Cloudflare AI here: https://mehulmohan.com/recommends/cloudflare  
  
Make sure you leave a like and subscribe to the channel!  
  
Follow me on:  
X https://x.com/mehulmpt  
Instagram https://instagram.com/mehulmpt  
LinkedIn https://www.linkedin.com/in/mehulmpt

## Transcript

**0:00** · We're going to discuss about a tech stack that allows you to build any application of any scale. Something that can serve 10 users as well as 10 million. This is a magic stack which allows you to keep your costs low, scale with the usage, and it's also very simple to work with and understand. And the stack I'm talking about is Cloudflare AI. Cloudflare is a service that I'm very sure that all of you would have heard about or at least have used in some capacity.

**0:25** · However, I feel that a lot of you don't really know that Cloudflare is much more than just a simple CDN or a simple object store or a simple way for you to protect your applications through web application firewall. There is a lot more that you can do with Cloudflare especially in this AI world because there are a lot of hidden services of Cloudflare that you might not have explored. So, let's talk about some of these services and how you can use them. So, I built this simple application that I was able to deploy on chat.gptclone.mehulmohan.com.

**0:57** · This is my domain. And if you try to visit this, for example, if I open this in incognito, you're going to see that you get a Cloudflare access page. So, this is a secure deployment. You or anyone just can't access it directly.

**1:09** · So, this is one of the things, one of the features, but there are a lot of small things that I'm going to talk about on how I have created this app.

**1:16** · So, all right, I'm going to go ahead and show you creating a new chat over here.

**1:20** · Once I created a few things are visible, right? This model is Kim E K2.5. I can either attach PDFs or add add images, and I can also send it messages. So, let's start with Hey, how are you doing today? As you can see, it has replied to me, and Kim E K2.5 is a good model, right? And I'm going to talk a little bit more about like how this model is actually working, but let's take an example of image. So, I'm going to drag this image, I'm going to paste it here, and I'm going to ask it, "What do you see in this image?"

**1:48** · And because Kim E K2.5 is also a vision model, you're going to see that it responds correctly.

**1:55** · Now, within this, a lot of things are actually happening. So, I want to take a step back and teach you about everything that we are doing. Now, first and foremost, the most important thing is that this whole application is Cloudflare stack. There is nothing, literally nothing else that I'm using to build this application except for every single Cloudflare service. And the services that I'm about to show you are probably the only services that you would need to build anything AI or not on Cloudflare platform. Now, first thing is the Cloudflare workers itself.

**2:24** · Now, Cloudflare workers is a product which allows you to do two things. It allows you to serve front end, and this front end could be anything. It could be Next.js, it could be Astro, it could be React, simple create React application. It could be any framework of your choice. It is also a back end in a way because what it allows you to do is execute JavaScript on server, but not only this, this JavaScript on server actually has secure access to a lot of services.

**2:55** · In our case, precisely, it has access to AI services which I'm going to talk about. It has access to a database which is Cloudflare D1, which is a SQLite database from Cloudflare. It also has access to something we call as durable objects, right? Which is also something that not a lot of people understand how powerful this is, but I'm going to show you like how durable objects work here. Now, the way this whole thing works, seeing over here, this chat that's going on, this chat is using a durable object.

**3:24** · So, a durable object, think of a durable object as a small computer, right? Which is very cheap to spin up and spin down. And this computer itself gets its own database, and this also gets, obviously, its own compute, right?

**3:41** · So, every single conversation that I will have, like if I create, let's say, 10 different conversations over here, every single one of them is its own durable object, which is a small computer that has this whole history of the chat. So, this chat over here is stored in a SQLite inside this durable object, right? So, we have two storages. First is this storage inside durable object, and second is this D1, which is an independent storage, which is sort of like a global thing, right? All these chats, all the metadata of everything that's going on, that's stored in D1.

**4:12** · So, when you log in into Cloudflare's dashboard, you will be presented with a beautiful view of this workers and pages view, which I'm showing you, that includes a summary of what's going on with the worker. I showed you over here that the JavaScript on the server is connected with a lot of services, and the reason I say this as connected and, you know, not just making an API call or something, is that that this is literally available inside the JavaScript as an environment variable, as a binding, as what Cloudflare says, right? So, you don't have to have API keys or you don't have to do something manual.

**4:43** · It just works out of the box because Cloudflare knows that it is coming out of from a trusted worker environment. So, you see that we have workers AI, we have assets, which is just a way for serving static assets. We have D1 database that we talked about.

**4:58** · We also have this vector ice which I'll show you, and we have R2 bucket, and we have a rate limiter as well, which is again just use just for using rate limits. Now, what you saw over here, if I enter this, and the way it redirects me to this cloudflareaccess.com domain, this is yet another Cloudflare service.

**5:15** · This is a very simple and powerful way to gate your services, to protect your services if you don't want it to be publicly accessible. A lot of companies and a lot of people do it for their internal dashboards as an added layer of security or, you know, for anything which is not public-facing. And then you can have like whitelisted emails which you can do which you can use to show like these are the set of people who can access this service. So, right now I have enabled it with the email address that I have, but you can add multiple people over here.

**5:43** · Now, what is interesting about this application is that you will see that I can show you a lot of AI models over here. And if you look at these models, you're going to see that Kim E is from Moonshot, which is another lab. Gemma is from Google.

**5:57** · Llama is from Meta. Deep Seek is from, you know, Deep Seek again, like a different lab. And Mistral again is different. So, I'm showing you a bunch of models from different labs, but they are all working through Cloudflare.

**6:09** · Cloudflare has a lot of models that they provide the inference for. For example, if I search for this Kim E K2.5 model over here, you're going to see that we are seeing some syntax of env.ai.run, which is again like a binding which is available inside the worker, but the core idea is that you don't have to go to a third-party external service for running this AI, for running this API, for running this model. It all just happens within Cloudflare.

**6:32** · And if you look at this list, you're going to see even models like Opus 4.7, and a lot of open-source models as well including Minimax, including Moonshot models just just like I showed you, and popular ones like Gemma if you want smaller models as well. Similarly, when I'm making an AI call from this, let's say, to Kim E K2.5, I have two I have actually three ways.

**6:55** · First is, you know, using something like a third-party provider, which is again not really necessary because Cloudflare already has hosting for this. But if you still want that, this is possible for models which are, let's say, not available on Cloudflare.

**7:09** · Second is, you know, via Cloudflare itself, which is what we are doing right now. And the third option is, which is even better, is via AI gateway. Now, what this means is that you can use these same models, but instead of just directly calling them, you use another managed service called AI gateway from Cloudflare. AI gateway is a service which is completely free of cost, so you don't pay anything extra if you're using this service.

**7:31** · But what you get is a bunch of optimizations out of the box, for example, caching for responses and automatic fallback on models if, for example, some model is down, some model is not online, or, you know, the third-party model that I'm talking about, it's not available for whatever capacity reasons or something has gone wrong, then this AI gateway can allow you to automatically redirect the request to a different model transparently so that your users' application does not fail.

**7:57** · AI gateway can work with internal Cloudflare models that I just showed you like Kim E and Deep Seek, but you can also bring your own AI API keys. And the dynamic route is what I was talking about that you can route each LLM request. So, this is sort of like an advanced feature, but you can route the request even based on the job or, you know, if you want to do like sort of AB test between two models to see the quality. And of course, like automatically failing over on errors.

**8:24** · This I feel is such a cool service because not only does it actually allow you to have a singular end point for doing basically everything, but this also logs everything so you can just check later what's going on in terms of usage, how much are you spending per model, if there was any request that actually failed, you can introspect it and see like what was going wrong in that. And it of course gives you a nice cost preview as well. If you're somebody, you know, who just wants to bill users based on the cost of their AI on a slight markup, this is like an easy way to do that.

**8:54** · Let me show you another example that is actually useful. So, I'm going to create a new chat and I'm going to add a message. Hey, Kim E, how are you doing today? And I'm not going to, uh, you know, cut this part of the video because I want to show you the real speed of the model. So, I'm going to send this, and you're going to see like it'll take a couple of seconds in order to start responding, right? Which is great because Cloudflare has fast inference.

**9:16** · But imagine that this is a model which is slow, or this is something that, you know, a lot of your people ask the same questions on, like a support bot or something that you are creating.

**9:28** · Because we are using AI gateway that I just showed you, Cloudflare has internally cached the response of this question. So, if I create a new chat over here, and if I send this same message, look at it. If I send this, you're going to see that we get the response instantly, right? I am I would not cut the video so you'll be able to see it in the, like, in a clean continuous shot. But the first time when I sent the message, it actually took that message to the large language model. It actually ran the inference, and it returned me the response, right?

**9:58** · But in the second time, it just instantly gave me back the result. And if you come back here, you're going to see this is the call that we made, right? It just cost us 8 milliseconds and no cost because you because we basically returned a cache hit from this. The other thing that we are using in this project is this D1 SQL database, right? I mentioned about all the chats that we are storing over here. They are stored in the centralized D1 database and all these individual chats are durable objects like small individual computers that can scale up, scale down, they can freeze and they will not cost you any money.

**10:29** · So, those durable objects store their own chats like the whole session that's going on. But the overall metadata of the chat, what model you are using, all of that is stored inside this D1 SQL database and any assets that you're uploading, that go into Cloudflare R2, which is an object storage service that has zero egress charge, which is one of the best out there in terms of price. Obviously, you can't beat $0 egress.

**10:51** · If you look at services like AWS S3 which charges an absurd amount of traffic egress cost, Cloudflare R2 can actually save you thousands, if not tens of thousands of dollars in bill cost if you're using this over any other service like AWS S3.

**11:09** · So, see, building a production workload system on Cloudflare is extremely powerful and simple. The core The core idea is that what I am doing is Cloudflare access at the top in order to restrict this application to just my use case. For example, if I'm doing it for my personal use case or you know, just for as an internal project, then Cloudflare workers serve me the front end with a nice UI which you can wipe code or you know, just ask any AI agent to create for you.

**11:33** · This UI can interact with JavaScript which is written on the server through Cloudflare workers, which is again like a very powerful way of scaling to hundreds, thousands, tens of thousands of requests per second. This can scale up very rapidly, right? I have also done a load balancer sort of video where I showed you like how you can use a Cloudflare worker as not only just as a back end but also a load balancer for your other back end if you have it outside of your Cloudflare.

**12:00** · So, this is a very versatile, very powerful way of working with JavaScripts on server and this JavaScript has instant access to AI, it has access to D1, it has access to durable object, it has access to, you know, the rate limiter that we saw. So, if you want to like sort of implement a security mechanism of rate limiting people on any of the endpoints, right?

**12:21** · To prevent brute forcing and all, all of that you can do easily using bindings.

**12:26** · So, bindings just make it possible to have all these features available as variables inside JavaScript. Now, I can go into code, but I'll be honest, most of this code, 99% of this code has been done by Claude code for building this application because it is super easy to work with Cloudflare base stack with AI.

**12:45** · And let me tell you why. The first reason is that Wrangler, which is Cloudflare CLI, is super powerful in a lot of APIs that Cloudflare provides.

**12:53** · So, you can deploy worker, you can update account settings, configuration, you can even create some of these resources using Wrangler. However, Wrangler does not provide a complete access to Cloudflare over CLI, over API.

**13:06** · That is where this blog post comes into picture, which is a building a CLI for all of Cloudflare, which is a very new initiative done by Cloudflare team. What they have done is that they realized that Wrangler, although it's super good, but has no access to some of the products through CLI. So, they have created the CF package, which is you can install through NPM install GCF, which I have done on my computer and I asked Claude code to go through this blog and any associated documentation resource and try to make sense of the CF CLI to do anything you want, right?

**13:39** · So, for building this application, literally, I did not open Cloudflare dashboard, I did not open any documentation, nothing of that sorts. All I knew about all these services and application that Cloudflare automa already provides and I just instructed my agent that you have to do all these things, right? So, I engineered the solution and the infrastructure was automatically provided thanks to Cloudflare. Now, Cloudflare as a service is growing so fast, they are adding so many features that it's actually harder to just keep up with it.

**14:10** · I actually had to revise this video a couple of times because I figured out that they have now immediately released something which is relevant to this video. For example, look at this Cloudflare email service.

**14:22** · So, in this whole thing of JavaScript on server, one of the other integrations that you can do is add email. So, look at all of these integrations, right?

**14:31** · Now, this email integration, what this means is that you can use Cloudflare workers to not only receive the emails but also send them.

**14:39** · So, if I click on send here, you're going to see as it starts to stream the message, I can just refresh this page, right? So, I just interrupted it in midstream and it did not actually broke the response. So, you see that it's the streaming is still working. I can refresh it again. I'm going to go ahead and get my chat back again. And the reason this happens is because of the the durable object that I told you about, right? So, the durable object that is there, it's its own mini computer that is getting the response from the AI and it's showing me.

**15:04** · Now, imagine that it is doing some deep research sort of thing which is going to take like 10, 15, 20 minutes and I can have like an email service linked with my worker on Cloudflare that can just dispatch me an email once it's done.

**15:19** · Super cool, right? And there is so much more that you can do with Cloudflare.

**15:24** · For example, if you want to have like a sandbox infrastructure, you can run containers, you can run headless browsers, have queues. So, everything that you can possibly imagine for your application to have a use case with AI, with non-AI workloads, with internal tools, that is all possible with Cloudflare and not only just possible, it's actually something that your AI can also do very easily because this whole project and the infrastructure that I showed you is built using AI.

**15:48** · The only thing that you should know about is all of these services and how they orchestrate and work together so that you can engineer your AI for that. Your AI can do rest of the work. So, that's all guys for this video. You will find all the links in the description, all the relevant links for all the things that we have discussed. But the most relevant link would be probably following me and Cloudflare accounts on Twitter or on YouTube, right? So, I just keep on giving you updates on Cloudflare generally as well. So, that's all for this video. I hope you liked it. Do check out Cloudflare.

**16:19** · All the links are in the description. Once again, thanks to Cloudflare for sponsoring this video.

**16:25** · I'm going to see you in the next video very soon. If you're still watching, make sure you leave a comment I watched till the end below to tell me that you were still here and let me know what do you think about the video.

**16:36** · \[music\]