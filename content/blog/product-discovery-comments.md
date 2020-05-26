---
title: Rolling our own comments engine
slug: rolling-our-own-comments-engine
date: 2020-05-06
excerpt: While there are a number of ways to add comments to your JAMstack site, we're exploring ideas for a more integrated solution for Gridsome - ideally one with little to no monthly cost.
searchTerms: comments
published: false
topic: feedback
---
Comments have been around for ages and haven't changed much over the years. It's a technology that most people are generally comfortable with. When it comes to adding comments to your JAMstack site, there are a plethora of options available. I might even say an overwhelming amount of options. While the diversity of any technology is a good thing, it can also make a relatively simple task of adding comments to your site, somewhat daunting. 

Before we jump into our initial ideas for how we can improve adding comments to your JAMstack site, let's first take a look at the current options available, with the pros and cons of each.

## Hosted / Embedded Options

Probably the most popular of all the methods, these are services where you signup, add your site and the service gives you a snippet of code to embed on your site. I'd say this is currently the path of least resistance.

Some hosted providers include:

- Disqus
- Commento
- ReplyBox
- Joint Comments
- Comment Box
- Graph Comment

Being that this option is the easiest to setup, we'll count that as our first pro point. With hosted services they take care of all the infrastructure for you, so there is no setup involved. The downside however is that you have less control over an important chunk of your site's content. Many of the above providers have ways to export your content, but the usefulness of said import would largely depend a lot on your ability to import it into another system.

ReplyBox, Joint Comments and Comment Box all have a free tier, meaning you'd only pay once your comments reach a certain threshold. Which leads me to last con, the increasing scale of cost as your site gets more popular. Most of the paid options charge substantially more as you move up their pricing tiers, which is something you would want to consider early on.

In summary, if you're ok with paying a marginal monthly fee, by all means support an independent developer and give Commento a try. One of the other standouts is GraphComment, which provides your comments in the form a GraphQl API. They also have some interesting features which I haven't seen before.

## Self-Hosting

This is the more hands-on approach, which require a bit more technical understanding and patience to figure things out. This option gives you the most control over your comments, but it does mean you'll need to do some initial setup and somewhere to actual host the comments engine, which potentially has a cost too.

Some of the self-hosting options include:

- 

## Git-Based Comments

This approach entails a series of event hooks that fire off each time a comment is submitted. The comment either gets stored in a JSON object that lives in your site's code (comments.json), or as an issue on the repo. Both use Github to process the comments. While this approach works, it's always felt a bit hacky storing comments as issues. Don't get me wrong, of all the approaches I've listed so far, this is the only one that is truly free. If you're ok with the whole comments as issues debate and are on a budget, this is probably the best approach for you.

## Netlify / Vercel Functions

This approach combines the hands-on approach, with one of the two main static hosts out there, namely Netlify and Vercel. Both have the ability to fire off functions as needed. In the case of Netlify, you setup a queue to receive comments and published feed of comments. 

Being serious fanboys of Vercel (even if we'll always miss Zeit), this is the camp we fall in. I'll go into the how in a bit, but for now I'll focus on our reasoning for choosing this approach. 

### 1.) It's our stack of choice

While Netlify has an amazing team and is definitely one of the pioneers in the JAMstack arena, I personally chose to move off them after they starting charging for build time. I completely understand the rational, but as an indie builder who has a slight obsession with small incremental updates and a number of side-projects, I saw this quickly adding up. There is also something badass / less corporate-y about Zeit and I've really grown to admire @evilrabbits work. Obviously he is only one of many and it takes a village and all that, but that was one of the factors that helped nudge me over. This is my own personal viewpoint and Travis has his own reasons.

### 2.) Full control over the output

This applies to the hosted and self-hosted script approaches, but generally if you're using an embeddable comments script, you're not going to have much say over the markup that is generated. While that might not be an issue for some, I personally prefer having full control over the output. Some of the hosted options do have the option to add custom CSS, which would likely work in most cases, but that's generally where the customization ends. Want to add the ability to subscribe to comments? Sure, if the plugin or embed script you're using supports it. Want to add the ability to subscribe to your newsletter - same deal. These are just two examples, but every site is different and aims to achieve different goals and this is where having full control over the markup, being able to hook into lifecycle events and customize workflow comes in handy.

### 3.) No additional monthly cost

Rolling our own commenting engine means we get to choose which backend system - ideally one that 

## The what, how and why

So we've established the current options you have available and gone over some of the wins and fails of each, so now I'll move onto our own comment engine, covering why we built it, the challenge we're aiming to solve and how we see it working. On with the show!

### The why

I've already gone over some of the shortcomings attributed to the above approaches, but ultimately it came down to having full control over the output, controlling our data and predictable costing. Oh and cheap. I mean, comments are great and all, but they are still a small piece to a much bigger puzzle, which can quickly add up.

### The how

Our initial version is using FaunaDB, Vercel functions and a component in our site's code. While this works relatively well, there are some limitations at in FaunaDB, which lead us to the decision to implement Hasura instead. In case you are not familiar with Hasura, here is a short overview:

> Hasura is an open-source engine that connects to your databases & microservices and auto-generates a production-ready GraphQL backend.

So in summary, by using Hasura we get a Postgres SQL database that is connected to a GraphQL layer, giving us a real-time API / microservice. 

At the moment we've implemented the comments as a component in our Gridsome code, along side some functions that fire-off in Vercel, but the long term plan (if we find there is a demand), we'd package it up as a Gridsome plugin.