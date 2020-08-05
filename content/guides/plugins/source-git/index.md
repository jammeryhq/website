---
title: Introduction
---

## Introduction

Source plugin for fetching data from a GIT repository. This source is based on the @gridsome/source-filesystem and includes all functionality which is available in the @gridsome/source-filesystem.

This is a port from Gatsby: [stevetweeddale/gatsby-source-git](https://github.com/stevetweeddale/gatsby-source-git), but extended to enable the clone of private git repositories.

## Installation

```shell
npm install -s @noxify/gridsome-source-git
```

## Usage

```js:title=gridsome.config.js
module.exports = {
  plugins: [
    {
      use: '@noxify/gridsome-source-git',
      options: {
        remote: 'https://github.com/noxify/test.git',
        target: 'git-source/noxify-test/',
        typeName: 'GitPost',
        route: '/gitpost/:id'
      }
    }
  ]
}
```

## Supported provider

We have tested the plugin with:

* Github
* GitLab
* Bitbucket

## Supported Repository types

The source plugin supports `public` and `private` repositories.