---
title: Usage
---

## Global

You can define it globally to enable this transformer for all data sources.

```js:title=gridsome.config.js
module.exports = {

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
      }
    }
  ],

  transformers : {
    remark : {
      plugins : [
        ['@noxify/gridsome-remark-classes', {
          'heading[depth=1]': 'title',
          'heading[depth=2]': 'subtitle',
          'paragraph': 'text-normal font-serif'
        }]
      ]
    }
  }
}
```

## Data Source

You can define it individual for each data source.

```js:title=gridsome.config.js
module.exports = {

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        remark: {
          plugins: [
            ['@noxify/gridsome-remark-classes', {
              'heading[depth=1]': 'title',
              'heading[depth=2]': 'subtitle',
              'paragraph': 'text-normal font-serif'
            }]
          ]
        }
      }
    }
  ]
}
```