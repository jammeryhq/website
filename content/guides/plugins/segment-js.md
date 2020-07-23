---
id: segment-js-plugin
---
## Usage

gridsome.config.js

```
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-segment-js',
      options: {
        prodKey: '<segment-prod-key>',
        devKey: '<segment-dev-key>',
        trackPage: true, // Defaults to false - will automatically send page views,
        pageCategory: 'some-category' // Optional category value
      }
    }
  ]
}
```

You can also use _this.$segment_ methods, for example _this.$segment.identify('user-id')_ in a mounted hook.

## Configuration

This plugin can hook into Vue router to automatically track pages - you can enable this by setting the trackPage option to true. Bear in mind that Gridsome does not add any page meta info to the router config, so it will use document.title etc in the track page options.

```
...
  options: {
    trackPage: true
  }
...
```

If you want to manually track pages, you can use methods such as the below to track pages in the mounted hook:

```
mounted () {
  this.$segment.page(this.$page.post.category, this.$page.post.title, {
    title: this.$metaInfo.title
  })
}
```

Note: Due to the way Gridsome navigates, document.title may show the title of the previous page if you just use this.$segment.page(). Therefore it is suggested you either use a data property (i.e. this.$page.post.title), the metaInfo title (if specified: this.$metaInfo.title) or set a timeout to allow the page title time to change (setTimeout(() => this.$segment.page(), 1500)).