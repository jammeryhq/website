---
title: Introduction
---

## Introduction

Gridsome Remark plugin to embed external stuff into your gridsome site.

## Installation

```shell
npm install -s @noxify/gridsome-plugin-remark-embed
```

## Usage


### With default settings

```js:title=gridsome.config.js
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

### With provider configuration

```js:title=gridsome.config.js
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
                'Youtube' : {
                    nocookie: false,
                    width: '300px',
                    align: 'left'
                },
                'Twitter' : {
                    align: 'center',
                    hideConversation: true
                }
            }]
          ]
        }
      }
    }
  ]
}
```

## Supported providers

You can find the currently supported providers and their configurations in the sidebar.

## Alternatives

* Twitter
  * https://gridsome.org/plugins/gridsome-plugin-remark-twitter
* Youtube
  * https://gridsome.org/plugins/gridsome-remark-plugin-youtube
  * https://gridsome.org/plugins/gridsome-plugin-remark-youtube