---
title: Provider - JSFiddle
---

## Configuration

| Name             | Type      | Description                                        | Allowed Values                | Default                           |
| ---------------- | --------- | -------------------------------------------------- | ----------------------------- | --------------------------------- |
| width            | `string`  | Sets the maximum width for each fiddle             | valid width value e.g. 500px  | 100%                              |
| height           | `int`     | Sets the height for each fiddle                    | `0-9999`                      | `300`                             |
| iframe           | `boolean` | Use iframe instead of `<script>` to embed a fiddle | `true`, `false`               | `true`                            |
| secureConnection | `boolean` | Use `https` instead of `http`                      | `true`, `false`               | `false`                           |
| tabs             | `array`   | Defines which tabs should be shown                 | `js`, `html`, `css`, `result` | `['js', 'html', 'css', 'result']` |
| theme            | `string`  | Defines the theme for each fiddle                  | `light`, `dark`               | `light`                           |


### Tab Customizing for one fiddle

To overwrite the default tab configuration, you can use the following syntax inside your markdown file:

```
https://<fiddleurl>?tabs=result,html
```