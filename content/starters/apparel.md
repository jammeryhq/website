---
title: Apparel
slug: apparel
date: 2020-05-20
excerpt: This is a boilerplate starter, aiming to showcase how Gridsome and Shopify can work together, to create an amazingly fast shopping experience for consumers.
thumb: ./images/shopify-thumb.jpg
image: ./images/shopify-large.jpg
demo: https://gridsome-shopify-starter.netlify.com/
repo: gridsome-starter-shopify
searchTerms: starter, shopify, gridsome
published: true
featured: false
availability: 1
version: 1.0.0
guide: apparel-starter
---
This starter uses a source plugin (gridsome-source-shopify) to pull data from Shopify's Storefront API, and load it into Gridsome's data store - which you can then use to create pages (note that this only runs at build time). It also uses the Vue Apollo plugin client-side, to send queries/mutations (i.e. createCheckout) to the Storefront API when running in the browser.