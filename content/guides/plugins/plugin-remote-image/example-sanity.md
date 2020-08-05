---
title: Example Sanity
---
> This example uses [gridsome-source-sanity](https://gridsome.org/plugins/gridsome-source-sanity)

## Configuration

```js:title=gridsome.config.js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: '<project_id>',
        dataset: 'production',
        graphqlTag: 'default'
      }
    }
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'cache': false,
        'typeName': 'SanityImageAsset',
        'sourceField': 'url',
        'targetField': 'localFile',
        'targetPath': 'src/assets/sanity/remoteImage'
      }
    }
  ]
}
```

## GraphQL Query

```graphql
{
  allSanityImageAsset {
    edges {
      node {
        url
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
    "allSanityImageAsset": {
      "edges": [
        {
          "node": {
            "url": "<sanity-remote-url>",
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