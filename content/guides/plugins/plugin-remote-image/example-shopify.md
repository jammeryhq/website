---
title: Example Shopify
---

> This example uses [gridsome-source-shopify](https://gridsome.org/plugins/gridsome-source-shopify)

## Configuration

```js:title=gridsome.config.js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-shopify',
      options: {
        storeName: '<my-store>',
        typeName: 'Shopify',
        types: [ 'Product', 'Collection' ],
        perPage: 100
      }
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        typeName: 'ShopifyImage',
        sourceField: 'originalSrc',
        targetField: 'downloadedSrc',
        targetPath: './src/assets/remoteImages'
      }
    }
  ]
}
```

## GraphQL Query

```graphql
{
  allShopifyImage {
    edges {
      node {
        originalSrc
        downloadedSrc
      }
    }
  }
}

```

## GraphQL Result

```json
{
  "data": {
    "allSanityImageAsset": {
      "edges": [
        {
          "node": {
            "originalSrc": "<shopify-remote-url>",
            "downloadedSrc": {
              "type": "file",
              "mimeType": "image/jpeg",
              //... and all other image properties
            }
          }
        }
        //...
      ]
    }
  }
}
```