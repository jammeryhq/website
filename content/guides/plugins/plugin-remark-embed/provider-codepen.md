---
title: Provider - Codepen
---

## Configuration

| Name    | Type             | Description      | Allowed Values                | Default  |
| ------- | ---------------- | ------------------------------------------ | ----------------------------- | -------- |
| iframe  | `boolean`        | Use iframe embed method                        | `true`, `false` | `false`  |
| height  | `string` / `int` | Sets the height for each pen. Value without `px` or `%`   | `0-9999` | `265` |
| theme   | `string`         | Sets the theme for the pens             | `0`, `dark`, `light` | `0` |
| preview | `boolean`        | Defines if the pen is running directly or after the click on "run pen" | `true`, `false` | `true` |
| tabs    | `array`          | Defines which tabs should be shown. | `result`, `html`, `js`, `css` | `result` |

***Info:*** Codepen allows only `result` and one of `html/js/css` and not `result` and `html` and `css`.

## Tab Customizing for one pen

To overwrite the default tab configuration, you can use the following syntax inside your markdown file:

```
https://<codepenurl>?tabs=result,html
```

## External Assets

By default, the plugin does not append or load external assets, you have to add the following resources manually.

```
https://static.codepen.io/assets/embed/ei.js
```
