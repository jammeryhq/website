---
title: Integrate grouping in gridsome
slug: eintegrate-grouping-in-gridsome
date: 2020-12-25
excerpt: ###tbd###
searchTerms: aggregate, grouping, groupBy, group, graphql, vue, template, computed
published: false
topic: tutorial
---

In this tutorial we will show different ways to integrate a `groupBy` functionality in gridsome.

## Variant overview

* Group nodes with GraphQL
* Group nodes with a `computed` property

## Preparation

Our example is based on the following npm packages:

```js
//package.json

"@gridsome/source-filesystem": "^0.6.2",
"@gridsome/transformer-remark": "^0.6.4",
"gridsome": "^0.7.23",
```

And the following gridsome config:

```js
//gridsome.config.js

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'TestContent',
        path: './content/**/*.md',
      }
    }
  ]
}
```

The content directory contains multiple files. Each file has the following content:

```md
// content/entry1.md

---
title: Entry title 1
category: category1
---

lorem ipsum
```


```md
// content/entry2.md

---
title: Entry title 2
category: category2
---

lorem ipsum
```

## Group nodes with GraphQL

