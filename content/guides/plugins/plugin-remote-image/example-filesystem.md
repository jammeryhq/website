---
title: Example Filesystem
---

> This example uses [@gridsome/source-filesystem](https://gridsome.org/plugins/@gridsome/source-filesystem)


## Markdown Files

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

## Configuration

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

## GraphQL Query

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

## GraphQL Result

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