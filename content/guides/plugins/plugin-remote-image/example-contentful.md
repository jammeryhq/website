---
title: Example Contentful 
---

> This example uses [@gridsome/source-contentful](https://gridsome.org/plugins/@gridsome/source-contentful)

## Configuration

```js:title=gridsome.config.js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '<space_id>', // required
        accessToken: '<content_delivery_api_key>', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'cache': false,
        'typeName': 'ContentfulAsset',
        'sourceField': 'file.url',
        'targetField': 'localFile',
        'targetPath': 'src/assets/cf/remoteImage'
      }
    }
  ]
}
```

## GraphQL Query

```graphql
{
  allContentfulAsset {
    edges {
      node {
        file {
          url
        }
        localFile
      }
    }
  }
}
```

## GraphQL Result

```json
{
  "data": {
    "allContentfulAsset": {
      "edges": [
        {
          "node": {
            "file": {
              "url": "<contentful-remote-url>"
            },
            "localFile": {
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