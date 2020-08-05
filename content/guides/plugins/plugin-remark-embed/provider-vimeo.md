---
title: Provider - Vimeo
---

## Configuration

| Name       | Type      | Description                                                    | Allowed Values  | Default |
| ---------- | --------- | -------------------------------------------------------------- | --------------- | ------- |
| width      | `string`  | Sets the maximum width for the iframe                          | `400px`, `100%` | `640px` |
| height     | `string`  | Sets the maximum height for the iframe                         | `400px`, `100%` | `360px` |
| responsive | `boolean` | Use responsive  iframe (if true, width and height are ignored) | `true`, `false` | `false` |
| autoplay   | `boolean` | Start the video automatically                                  | `true`, `false` | `false` |
| loop       | `boolean` | Run the video in a loop                                        | `true`, `false` | `false` |

## External Assets

By default, the plugin does not append or load external assets, you have to add the following resources manually.

This is asset is only required when `responsive` is set to `true`.

```
https://player.vimeo.com/api/player.js
```