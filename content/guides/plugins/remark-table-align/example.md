---
title: Example
---

## Example table

```md
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is | left-aligned  | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
```

## Configuration

```js:title=gridsome.config.js
transformers : {
  remark : {
    plugins : [
      '@noxify/gridsome-remark-table-align',
      ['@noxify/gridsome-remark-classes', {
        'table' : 'table',
        'tableCell[align=center]' : 'text-center',
        'tableCell[align=right]': 'text-right',
      }]
    ]
  }
},
```

## Rendered table

```html
<table class="table">
  <thead>
    <tr>
      <th>Tables</th>
      <th class="text-center">Are</th>
      <th class="text-right">Cool</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>col 1 is</td>
      <td class="text-center">left-aligned</td>
      <td class="text-right">$1600</td>
    </tr>
    <tr>
      <td>col 2 is</td>
      <td class="text-center">centered</td>
      <td class="text-right">$12</td>
    </tr>
    <tr>
      <td>col 3 is</td>
      <td class="text-center">right-aligned</td>
      <td class="text-right">$1</td>
    </tr>
  </tbody>
</table>
```