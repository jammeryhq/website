---
id: remote-image-plugin
---

## Table of contents


## Introduction

This is a simple plugin, which is based on a discord discussion.
It's more a workaround than a permanent solution.

The plugin should work with any data source, but I have tested it only with `source-filesystem`.

## Installation

```shell
npm install -s https://github.com/noxify/gridsome-plugin-remote-image.git

# or

yarn add https://github.com/noxify/gridsome-plugin-remote-image.git
```

## Usage

```js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'typeName' : 'Entry',
        'sourceField': 'remoteImage',
        'targetField': 'imageDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    },
    //multiple image - cache:true - original: false
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'typeName' : 'Entry',
        'sourceField': 'remoteImages',
        'targetField': 'imagesDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    },
    //single image - cache:true - original: true
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'original' : true,
        'typeName' : 'Entry',
        'sourceField': 'remoteImage',
        'targetField': 'imageDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    },
    //single image - cache:false - original: false
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'cache': false,
        'typeName' : 'Entry',
        'sourceField': 'remoteImage',
        'targetField': 'imageDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    }
  ]
  //...
}
```

## Supported field types

### String

```md
---
title: Post title
remoteImage: https://example.com/image.jpg
---
```

### Array

```
---
title: Post title
remoteImages: 
  - https://example.com/image1.jpg
  - https://example.com/image2.jog
---
```

### Object

```
---
title: Post title
key1: 
  key2: https://example.com/image1.jpg
  key3: 
    - https://example.com/image1.jpg
    - https://example.com/image2.jog
---
```

## Limitations

### Target field name

Currently, it's not possible to define a nested field for the `targetField` definition.

### Fetch data from a reference

Currently you have to define the collection where the images are stored.

If you have a `Post` collection which has a reference to `Asset`, you can't use `Post` as `typeName` and `image.url` as `sourceField`.

You have to use `Asset` as `typeName` and `url` as `sourceField`.

### Not supported field type

Currently the plugin doesn't support `array of objects`.

```
---
title: Post title
key1:
- index: 1
  image: https://example.com/image1.jpg
- index: 2
  image: https://example.com/image2.jpg
---
```

## Configuration

| Property    | Type      | Required | Default                   | Description |
|-------------|-----------|----------|---------------------------|-------------|
| typeName    | `String`  | Yes      | `null`                    | Defines the collection where the script should update the nodes |
| sourceField | `String`  | Yes      | `null`                    | Defines the graphql field which contains the remote image url |
| targetField | `String`  | Yes      | `null`                    |Defines the field name which will be generated. <br>The field is from Type `Image` or `[Images]` in case the source field is not a string. |
| targetPath  | `String`  | No       | `src/assets/remoteImages` | Defines the target directory for the downloaded images.<br>If you set `./src/assets/remoteImages`, it will save the images to `<projectroot>/src/assets/remoteImages/` |
| cache       | `Boolean` | No       | `true`                    | Defines whether images will be cached.<br>Setting this to false will force re-download of all images. |
| original    | `Boolean` | No       | `false`                   | Defines whether to use the original image path as the file path.<br>Setting this to true will save images in a folder structure the same as the image URL - `https://example.com/some/image/path.jpg` will be saved as `/<target path>/some/image/path.jpg`. |

> It's currently not possible to use `~` or `@`.

## Example: File System

> This example uses [@gridsome/source-filesystem](https://gridsome.org/plugins/@gridsome/source-filesystem)

### Markdown Files

```md:title=/content/entries/entry1.md
---
title: First Post
remoteImage: https://images.unsplash.com/photo-1580451998921-c1e6e1ababe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80
---

Image Credits: https://unsplash.com/
```

```md:title=/content/entries/entry1.md
---
title: Second Post
excerpt: Second Post
date: 2020-01-14T21:53:14.578Z
remoteImages: 
  - https://images.unsplash.com/photo-1525013066836-c6090f0ad9d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
  - https://images.unsplash.com/photo-1546489545-697049cfdc1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2872&q=80
---

Image Credits: https://unsplash.com/
```

### Configuration

```js:title=gridsome.config.js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'FsMarkdownEntry',
        path: './content/md/**/*.md',
      }
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'original' : true,
        'typeName': 'FsMarkdownEntry',
        'sourceField': 'remoteImage',
        'targetField': 'imageDownloaded',
        'targetPath': 'src/assets/fs/remoteImage'
      }
    }, {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'cache' : false,
        'typeName': 'FsMarkdownEntry',
        'sourceField': 'remoteImages',
        'targetField': 'imagesDownloaded'
      }
    }
  ]
}
```

### GraphQL Query

```graphql
{
  allFsMarkdownEntry {
    edges {
      node {
        title
        imageDownloaded
        imagesDownloaded {
          image
        }
      }
    }
  }
}

```

### GraphQL Result

```json
{
  "data": {
    "allFsMarkdownEntry": {
      "edges": [
        {
          "node": {
            "title": "Second Post",
            "imageDownloaded": {
              "type": "image",
              "mimeType": "image/jpeg",
              //... and all other image properties
            },
            "imagesDownloaded": null
          }
        },
        {
          "node": {
            "title": "First Post",
            "imageDownloaded": null,
            "imagesDownloaded": [
              {
                "image": {
                  "type": "image",
                  "mimeType": "image/jpeg",
                  //... and all other image properties
                }
              },
              {
                "image": {
                  "type": "image",
                  "mimeType": "image/jpeg",
                  //... and all other image properties
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

## Example: Contentful

> This example uses [@gridsome/source-contentful](https://gridsome.org/plugins/@gridsome/source-contentful)

### Configuration

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

### GraphQL Query

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

### GraphQL Result

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

## Example: Sanity

> This example uses [gridsome-source-sanity](https://gridsome.org/plugins/gridsome-source-sanity)

### Configuration

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

### GraphQL Query

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

### GraphQL Result

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

## Example: Shopify

> This example uses [gridsome-source-shopify](https://gridsome.org/plugins/gridsome-source-shopify)

### Configuration

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

### GraphQL Query

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

### GraphQL Result

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