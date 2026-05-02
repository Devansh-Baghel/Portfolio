---
title: "I've been sleeping on Cloudflare's compute offerings - Free serverless hosting that scales"
source: "https://www.youtube.com/watch?v=DJtOn_Vt1uw"
author:
  - "[[backpine labs]]"
published: 2024-10-15
created: 2026-04-26
description: "The Full-stack on Cloudflare Course: https://learn.backpine.com/Cloudflare’s compute services exceeded my expectations. In this video, I explore their ecosystem of tools that make building full-stac"
tags:
  - "clippings"
---
![](https://www.youtube.com/watch?v=DJtOn_Vt1uw)

The Full-stack on Cloudflare Course: https://learn.backpine.com/  
  
Cloudflare’s compute services exceeded my expectations. In this video, I explore their ecosystem of tools that make building full-stack web applications quick and cost-effective, often free. Join me as I break down the key services @cloudflare offers and how they can help you build and scale your next project efficiently.  
  
Cloudflare Docs:  
  
Workers - https://developers.cloudflare.com/workers/  
Worker Pages - https://developers.cloudflare.com/pages  
D1 SQL Database - https://developers.cloudflare.com/d1  
R2 Object Storage - https://developers.cloudflare.com/r2  
KV - https://developers.cloudflare.com/kv  
AI Gateway - https://developers.cloudflare.com/ai-gateway  
Vector Database - https://developers.cloudflare.com/vectorize/  
Queues - https://developers.cloudflare.com/queues  
Analytics - https://developers.cloudflare.com/analytics/analytics-engine/get-started/  
Hyperdrive - https://developers.cloudflare.com/hyperdrive  
  
Discord: https://discord.gg/jCf3DBmh9s  
  
  
#cloudflare #nextjs #vercel #openai #aws

## Transcript

### Intro

**0:00** · most fullstack developers are missing out on one of the best compute platforms available over the past 5 years I've used several hosting providers Heroku back when it had a free tier vulture and digital ocean for deploying go services on bps's too many AWS products while working in big Tech and versel for free nextjs hosting each of these providers

**0:18** · have their own pros and cons and there's always a challenge of finding a compute Solution that's affordable to start offers a good developer experience and can scale as your project grows Cloud flare wasn't even on my radar until recently I didn't even realize they offered compute Solutions but it turns out Cloud flare has a full ecosystem of compute and data services that can handle millions of requests a month for free even without needing to pull out a credit card and to be clear when I say

**0:43** · handle millions of requests I'm not referring to Cloud flares proy or CDN Services I literally mean you can ship actual server side code to Cloud flare and it runs on serverless functions for free so to better understand how you can use cloud Flare's compute offerings let's go through the process of creating a fake nextjs project let's say you're building a next app that allows users to summarize and analyze Zoom calls with generative AI you get started by creating a git repo you run the mpm create Pages command for nextjs you say that you want it deployed and there you go you now have a site that's hosted now

### Creating a nextjs project

**1:14** · you make some changes you push those changes to a branch and you can see a preview deployment is triggered you check this deployment to make sure all the changes are good you merge your changes to master and now your changes are live so now that you have an nextjs project that's hosted you'll want to add your own domain name you add your domain name to cloudflare you link it to your next app running on pages and there you go you now have a next app with a cicd pipeline extremely fast serverless hosting and a domain name with SSL and

**1:41** · you haven't even pulled out a credit card so at this point you might be thinking okay cool but other services offer free tier of serverless compute and free DNS why would I choose cloudfl over something like for sale from the looks of it for sale is actually a bit easier to set up I'd answer that by saying the features we've just walked through are just the icing on the cake to a cloud FL offers so let's keep building this project to learn more you've now started the process of

**2:05** · trying to integrate a database into your project you can use any of the popular database offerings in your cloudflare app or you could simply use cloud flares out of the box D1 SQL database which is a blazingly fast competitor to torso and integrates seamlessly within your cloudflare workers just create a database bind it to your application place it in your favorite orm and now you have a performant scalable database to support all your users CR operations

### Adding object storage

**2:29** · now that you have a database you'll need to pick a good object storage solution to store all call recordings and transcripts Amazon S3 is the big player in this space so you could just integrate with S3 but lucky for you Cloud flare offers an S3 compatible object storage solution called R2 all

**2:45** · you have to do is create a bucket bind it to your application and now your application has object storage with a generous free tier and actually has better pricing than AWS for the pay tiers so now let's get to the meat of your application you want your application to be installed via the zoom Marketplace and zoom requires you to implement ooth in your application as your user base is growing you are constantly having to reach out to zoom's API to get valid client credentials so

### caching

**3:10** · you decide you want to temporarily store the credentials to reduce the number of requests made to zoom you want to implement a cashing solution with a total time to live on each cash entry you typically would reach for redus for this use case but then you realize that cloud FL offers a key Value Store for free you create a namespace buy it to your application and within minutes you have a caching solution tion that supports TTL and you still haven't even

**3:32** · pulled out a credit card so let's talk about your open a integration you build this next app pretty quickly and you now realize that some users are able to spam your service and rack up a pretty hefty open AI bill you decide you are going to build anti-spam logic and build out a better building system but to buy yourself some time you create a cloud flare AI Gateway swap out the open AI URL with your AI Gateway URL turn on

### AI Gateway

**3:54** · rate limiting and you temporarily stop the bleeding on your AI spend after fixing your issue with user spam you decide you're going to keep the AI Gateway as it started to provide awesome insights into your AI usage and performance and has also helped you improve your Proms and now your application is even better your user base grows and you're starting to get more feature requests your users really

**4:14** · want a feature where they can ask a chatbot to search through all their transcripts so you start implementing basic retrieval augmented generation better known as rag for this solution you need to create Vector embeddings of each transcript and store them in some Vector database after doing some research you real realiz that Vector databases are surprisingly expensive you

**4:32** · are considering using pine cone as it is super popular and has a free tier but then you come across Cloud Flare's Vector database solution and realize it has all the features you need has a generous free tier and is cheaper than all the other competitors you researched so you create a vector index bind it to your application and Implement rag so let's just recap really quick you have a nextjs service with fast serverless compute reachable behind your own SSL protected domain name with a database object storage external TTL caching an AI Gateway a vector database and you

### Recap

**5:05** · still haven't even pulled out a credit card so by now I hope you're thinking yeah Cloud flare is pretty cool I'd probably use it for my next project but what if I told you at this point we still haven't even gotten to my favorite features so let's keep building this AI transcript tool so at this point your next app is serving a thousand users you're making pretty good money and you decide that you want to turn your side project into a hardened production app you upgrade from the free tier to the paid tier would a w being $5 a month and

### Improving API routes

**5:31** · now you unlock more services with so many users you realize that some of your API routes need to be improved you have a route called process transcript ID which takes a zoom call ID fetches a zoom recording saves it in R2 object storage passes the saved recording link to assembly AI to be transcribed waits for the transcription saves the transcript passes the transcript to open AI to be summarized and finally returns the summary and the transcript to the user this is way too much logic and

**6:00** · worse yet some users are becoming impatient and closing the tap during this process as a result your serverless functions cancel the request right after you submit the transcript to assembly AI this causes you to pay for transcriptions that you are not able to save now that you are on the $5 worker tier you are able to create cues so you decide to spin up a new worker to act as a que processing service you create a queue and bind it to your new worker and your next application your process transcript ID

### Faster backend features

**6:27** · route now simply submits a call ID to a q and tells the client to pull the next API for updates in the background your queue processing service is working away as it collects and saves call recordings submits transcription requests to assembly AI uses open AI to summarize

**6:43** · and save transcripts and updates your database when each of these tasks complete now that you have implemented Clare cues you realize that you able to build new backend features faster as there's clear separation from the data processing layer of your service and your next app you also realize that you are able to more easily scale your service with your growing user base so

### Realtime AI usage

**7:02** · let's say your service now has 100,000 active users and you want to build an even more robust solution where users are able to monitor their AI usage in real time so whenever your Q worker finishes processing an open AI request it sends the token usage stats back to your queue the token data then gets processed and stored in Cloud Flare's analytic solution which allows for blazingly fast time series based queries you are now able to provide users with near realtime visualization of their personal usage metrics after a few more

### Hyperdrive

**7:33** · years your service grows to a million active users and you decide you need a database Solution that's more sophisticated than cloudflare's D1 database but historically speaking serverless applications can run into a cold start problem when a new serverless function container is spun up for the first time which makes client requests

**7:49** · take longer than expected the cold start problem is compounded when your serverless function container has to create and maintain a connection pool with your database cloudflare solved this issue with a product called hyperdrive hyperdrive creates lasting connection pools with your database across their entire Global server Network this way all your worker has to do is proxy request through hyperdrive and bypasses the need to spend time creating and maintaining connection pools with your database at this point

### Why Cloudflare

**8:15** · you're probably thinking man this guy's really Shilling for cloud flare there must be reasons to not choose Cloud flare as my compute provider and I'll admit there are very valid downsides to useing Cloud Flare's compute offerings which I'll talk about but the reason why I'm so excited about Cloud flare as a compute platform is because I have finally found a hosting platform that allows Indie hackers to build and deploy services for free while at the same time the compute ecosystem can support truly Production Services cloudflare feels like a happy middle ground between services like forell or netfi and AWS

**8:44** · and Azure you get the ease of development and deployment comparable to forell but you aren't reaching for several different managed services for your database object storage cach and message system while at the same time you have all the compute offerings you need to build an advanced system but you aren't overwhelmed in the same way as AWS where each compute solution has several competing Solutions and you have a hard time figuring out how to even get started these are the reasons why I'm excited by Cloud flare but now let's

### Vendor lockin

**9:13** · talk about the glaring downsides the first core downside to using cloudflare is vendor lockin all of cloudflare's products work really well together largely due to how you are able to bind Solutions together since the bindings are accessible in the context of the service request this heavily influences the structure of your code now it is possible to design your service around vendor lockin making it easy to change

**9:34** · providers in the future but when working in an ecosystem that allows you to build so quickly you will likely lean into the design patterns that work well with cloudflare and this will make moving to another provider in the future very challenging that being said cloudflare's compute pricing is very transparent and is almost always cheaper than other Cloud providers this makes the vendor lock and risk worthwhile for me the other core downside is language support cloudflare has engineered their own worker runtime that runs on VA isolates

### Language support

**10:00** · and is utilized across their Edge Network this allows cloudflare to manage requests with virtually no cold starts the downside of the VA engine is that it really is only a runtime for JavaScript and web assembly based projects so if you're committed to using JavaScript or typescript VA isolates will only benefit your service but if you're Building Solutions in languages like go or C++ you'll have to compile your code to web assembly for it to work on cloudflare workers this process can be very painful

**10:25** · and using cloudflare service bindings goes from a delightful developer experience to Pure frustration very quickly for these reasons if you're set on building a service in a language other than typescript or JavaScript Clare would not be a good choice for you now cloudfare workers do offer support for rust and python but I've not gone through the process of shipping a rust or python project to cloudflare workers so I wouldn't recommend that solution just yet that being said if you're a fullstack engineer trying to get your idea off the ground a freelancer

**10:51** · building solutions for clients or even a midsize company that wants to ship features fast I strongly recommend the cloud flare stack now this video is one of the first I want to create around the topic of cloudflare I plan on creating a series of howto videos talking about building and deploying to cloudflare so if there are any Frameworks or project ideas you want to see build and deployed please let me know in the comments