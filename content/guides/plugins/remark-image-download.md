---
id: remark-image-download-plugin
---
## Install

```
npm install -s https://github.com/noxify/gridsome-plugin-remark-image-download.git

```

## Setup

```js
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

## Documentation

You can find the complete documentation here: https://webstone.info/documentation/gridsome-plugin-remark-image-download
