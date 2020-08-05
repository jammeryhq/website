---
title: Example Public Repository
---

## Usage

```js:title=gridsome.config.js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@noxify/gridsome-source-git',
      options: {
        name: 'public-github',
        remote: 'https://github.com/noxify/gridsome-source-git-public-test.git',
        target: 'git-source/github/public/',
        typeName: 'PublicGithub'
      }
    }
  ]
}
```