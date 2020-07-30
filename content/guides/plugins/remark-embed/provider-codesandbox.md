---
title: Provider - Codesandbox
---

## Configuration

| Name          | Type      | Description                                        | Allowed Values  | Default |
| ------------- | --------- | -------------------------------------------------- | --------------- | ------- |
| codemirror | `integer`  | Use CodeMirror editor instead of Monaco (decreases embed size significantly). | `0`, `1` | `0`  |
| editorsize | `integer` | Size in percentage of editor. | `50`, `100` | `50`  |
| eslint | `integer` | Use eslint (increases embed size significantly). | `0`, `1` | `0`  |
| expanddevtools | `integer` | Start with the devtools (console) open. | `0`, `1` | `0`  |
| fontsize | `integer` | Font size of editor in px | `14`, `20` | `14`  |
| forcerefresh | `integer` | Force a full refresh of frame after every edit. | `0`, `1` | `0`  |
| hidenavigation | `integer` | Hide the navigation bar of the preview. | `0`, `1` | `0`  |
| moduleview | `integer` | Evaluate the file that is open in the editor. | `0`, `1` | `0`  |
| previewwindow | `string` | Which preview window to open by default | `console`, `tests`, `browser` | `browser`  |
| runonclick | `integer` | Only load the preview when the user says so. | `0`, `1` | `0`  |
| verticallayout | `integer` | Whether to show the editor and preview vertically. | `0`, `1` | `0`  |
| view | `string` | Which view to open by default | `split`, `editor`, `preview` | `split`  |

## Additional URL Options

You can overwrite all defined global options per embed.
The following options are only available as query parameter.


| Name          | Type      | Description                                        | Allowed Values  | Default |
| ------------- | --------- | -------------------------------------------------- | --------------- | ------- |
| highlights | `integer`  | Which lines to highlight (only works in CodeMirror) | `0`, `1` | `0`  |
| initialpath | `string` | Which url to initially load in address bar | `/`, `/src` | `/`  |
| module | `string` | Which module to open by default. Multiple paths comma separated are allowed, in that case we show them as tabs | path to module (starting with `/`) | `entry path`  |