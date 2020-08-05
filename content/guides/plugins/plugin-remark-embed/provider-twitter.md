---
title: Provider - Twitter
---

## Configuration

| Name             | Type      | Description                                  | Allowed Values                    | Default |
| ---------------- | --------- | -------------------------------------------- | --------------------------------- | ------- |
| hideConversation | `boolean` | Hides a parent thread of a tweet             | `true`, `false`                   | `true`  |
| hideMedia        | `string`  | Hides videos/photos/link previews            | `true`, `false`                   | `true`  |
| align            | `string`  | Sets the alignment for each embed            | `none`, `left`, `center`, `right` | `none`  |
| theme            | `string`  | Sets the theme for the embeds                | `light`, `dark`                   | `null`  |
| linkColor        | `string`  | Adjust the color of Tweet links              | Hex Value e.g. `#FFCC00`          | `null`  |
| widgetType       | `string`  | Sets the embed type                          | `video`                           | `null`  |
| dnt              | `boolean` | Allows/Forbids twitter to task user activity | `true`, `false`                   | `true`  |
| omitScript       | `boolean` | Automatically load/embed required resources  | `true`, `false`                   | `true`  |

## External Assets

By default, the plugin does not append or load external assets, you have to add the following resources manually.

```
https://platform.twitter.com/widgets.js
```