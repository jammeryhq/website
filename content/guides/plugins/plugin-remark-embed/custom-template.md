---
title: Custom Template
---

You can overwrite the default provider template.
Just add the `template` property with the path to the `.hbs` template inside your provider config.

```js:title=gridsome.config.js
remark: {
  plugins: [
    [ '@noxify/gridsome-plugin-remark-embed', {
        'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
        'Youtube' : {
            template: './src/providerTemplates/Youtube.hbs',
        },
        
    }]
  ]
}
```

> Behind the scenes, we're using `path.resolve()` to get the absolute path 
> the example path is based on your project route
> like the baseDir from the `@gridsome/source-filesystem`