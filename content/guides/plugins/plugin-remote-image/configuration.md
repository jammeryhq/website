---
title: Configuration
---

## Configuration

| Property    | Type      | Required | Default                   | Description |
|-------------|-----------|----------|---------------------------|-------------|
| typeName    | `String`  | Yes      | `null`                    | Defines the collection where the script should update the nodes |
| sourceField | `String`  | Yes      | `null`                    | Defines the graphql field which contains the remote image url |
| targetField | `String`  | Yes      | `null`                    |Defines the field name which will be generated. <br>The field is from Type `Image` or `[Images]` in case the source field is not a string. |
| targetPath  | `String`  | No       | `src/assets/remoteImages` | Defines the target directory for the downloaded images.<br>If you set `./src/assets/remoteImages`, it will save the images to `<projectroot>/src/assets/remoteImages/` |
| cache       | `Boolean` | No       | `true`                    | Defines whether images will be cached.<br>Setting this to false will force re-download of all images. |
| original    | `Boolean` | No       | `false`                   | Defines whether to use the original image path as the file path.<br>Setting this to true will save images in a folder structure the same as the image URL - `https://example.com/some/image/path.jpg` will be saved as `/<target path>/some/image/path.jpg`. |

> It's currently not possible to use `~` or `@`.
