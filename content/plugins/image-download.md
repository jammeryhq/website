---
title: Image Download
slug: image-download
date: 2020-05-20
type: remark
excerpt: Simple plugin for remark to enable the download of remote images.
thumb: ./images/remark-image-download.jpg
image: ./images/remark-image-download-large.jpg
demo: https://remark-image-download.jammeryhq.com
repo: gridsome-plugin-remark-image-download
availability: 1
searchTerms: plugin, remark-image-download, performance
published: true
featured: false
guide: remark-image-download-plugin
version: 1.2.0
---
## Install

```
npm install -s https://github.com/noxify/gridsome-plugin-remark-image-download.git

```

## Setup

```js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    //...
  ],
  templates: {
    //...
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      plugins: [
        ['@noxify/gridsome-plugin-remark-image-download', {
          targetPath: './src/assets/contentImages'
        }]
      ]
    }
  }
}

```

## Documentation

You can find the complete documentation here: https://webstone.info/documentation/gridsome-plugin-remark-image-download
