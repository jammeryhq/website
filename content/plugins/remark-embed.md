---
title: Embed
slug: remark-embed
date: 2020-05-20
excerpt: Gridsome remark plugin to embed external stuff into your gridsome site.
thumb: ./images/remark-embed.jpg
image: ./images/remark-embed-large.jpg
demo: https://remark-embed.jammeryhq.com
repo: gridsome-plugin-remark-embed
availability: 1
searchTerms: plugin, images, cdn
published: true
featured: false
---
# Installation

```bash
npm install --save @noxify/gridsome-plugin-remark-embed
```

# How to use

```js
//gridsome.config.js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            [ '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
            }]
          ]
        }
      }
    }
  ]
}
```

# Documentation

You can find the complete documentation here: https://webstone.info/documentation/gridsome-plugin-remark-embed
