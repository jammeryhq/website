---
title: Provider - Gist
---

## Configuration

There is no configuration for this provider.

## Examples

### Show only a specific file

To show only one file, you can use the following syntax inside your markdown file:

```
https://gist.github.com/<user>/<gistid>#file1.js
or
https://gist.github.com/<user>/<gistid>?file=file1.js
```

### Code Highlighting

To highlight one or more lines in a gist file, you can use the following syntax inside your markdown file:

```
https://gist.github.com/<user>/<gistid>?file=file1.js&highlights=1,3,5-10,15-20
```

## External Assets

By default, the plugin does not append or load external assets, you have to add the following resources manually.

```
https://github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css
```

### Get your own asset url

1. Create a new [github gist](https://gist.github.com/)
2. Add `.json` to the gist url e.g. `https://gist.github.com/<yourgithubname>/<gistid>.json`
3. Search for `stylesheet`
4. Copy the url