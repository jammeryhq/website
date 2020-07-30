---
title: Provider - Soundcloud
---

## Configuration

| Name          | Type             | Description                                                                               | Allowed Values               | Default   |
| ------------- | ---------------- | ----------------------------------------------------------------------------------------- | ---------------------------- | --------- |
| width         | `string`         | Sets the maximum width for each track                                                     | valid width value e.g. 500px | 100%      |
| height        | `string` / `int` | Sets the height for each pen. Value without `px` or `%`                                   | `0-9999`                     | `81`      |
| color         | `string`         | Color play button and other controls. e.g. “#0066CC”                                      | Valid HEX Value with `#`     | `#ff5500` |
| auto_play     | `boolean`        | Start playing the item automatically                                                      | `true`, `false`              | `false`   |
| hide_related  | `boolean`        | Show/Hide related tracks                                                                  | `true`, `false`              | `false`   |
| show_comments | `boolean`        | Whether the player displays timed comments                                                | `true`, `false`              | `true`    |
| show_user     | `boolean`        | Show/Hide the uploader name                                                               | `true`, `false`              | `true`    |
| show_reposts  | `boolean`        | Show/Hide reposts                                                                         | `true`, `false`              | `false`   |
| show_teaser   | `boolean`        | Show/Hide the teaser of a track                                                           | `true`, `false`              | `true`    |
| visual        | `boolean`        | Show/Hide the image of a track                                                            | `true`, `false`              | `true`    |
| single_active | `boolean`        | If set to false the multiple players on the page won’t toggle each other off when playing | `true`, `false`              | `true`    |

### Set custom height

To change the height for one embed (e.g. you want to show a profile or a playlist), you can use the following syntax inside your markdown file:

```
https://<soundcloudurl>?height=300
```