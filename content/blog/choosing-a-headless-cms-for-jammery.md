---
title: Choosing a headless cms for Jammery
slug: choosing-a-headless-cms-for-jammery
date: 2020-08-20
excerpt: Markdown works great with Gridsome, but we wanted a more refined publishing experience and decided to take a fresh look at the headless cms market. While there are some really great headless cms's available these days, we ended up shortlisting Directus, Prismic and Statamic. 
searchTerms: headless, cms, directus, prismic, statamic, publishing
published: true
topic: news
---
## Our requirements

It's important when evaluating software that you define you specific projects requirements up-front, including any future requirements you can think of.

Our requirements are as follows:

- Conditional fields (showing different fields based on the product type)
- Flexible content (for the guides)
- Integration with Cloudinary


## Directus

Directus is a great Vue.js based cms, which can be self-hosted and extended via plugins. Prismic is a hosted option, but has a generous free tier. We ended up going with Prismic, but more on that in a separate post. Directus is free, but requires that you host it yourself.

## Prismic

Prismic is the only hosted option from the 3 options. The biggest standout feature is their Slice Machine, which lets you create a suite of components that can be used to create stunning landing pages. Think of it as Advanced Custom Fields flexible content field on steroids. You can either define the slice types via the admin, or via your projects code.

## Statamic

Statamic only recently came back onto our radar and of the three is the most promising. What makes Statamic stand out is the ability to define your content models via your projects code, the content is still saved as markdown (making it easy to continue working offline), but can be modified via the cms.