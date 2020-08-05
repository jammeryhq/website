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
        '@noxify/gridsome-remark-table-align'
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
            '@noxify/gridsome-remark-table-align'
          ]
        }
      }
    }
  ]
}
```