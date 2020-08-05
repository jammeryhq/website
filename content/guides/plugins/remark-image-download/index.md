---
title: Introduction
---

## Introduction

Simple plugin for `@gridsome/transformer-remark` to enable the download of remote images.

## Installation

```shell
npm install -s https://github.com/noxify/gridsome-plugin-remark-image-download.git
```


## Usage

```js:title=gridsome.config.js
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