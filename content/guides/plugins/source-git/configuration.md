---
title: Configuration
---

## Configuration

| Name                 | Type      | Description                                                            | Default     |
|----------------------|-----------|------------------------------------------------------------------------|-------------|
| remote               | `String`  | Url to the repository                                                  | `null`      |
| target               | `String`  | Defines the url to the remote git                                      | `null`      |
| branch               | `String`  | Defines the branch which should be used.                               | `null`      |
| pattern              | `Array`   | Defines which files should be imported. Multiple patterns are allowed. | `['**/*']`  |
| privateRepo          | `Boolean` | Defines the path where the remote files should be saved.               | `null`      |
| credentials          | `Object`  | Defines the credentials to fetch private repository                    | `{}`        |
| credentials.username | `String`  | Username which should be used for the authentication                   | `null`      |
| credentials.token    | `String`  | Access Token which should be used for the authentication               | `null`      |
| typeName             | `String`  | Defines the GraphQL type name                                          | `GitNode`   |
| baseDir              | `String`  | Check [@gridsome/source-filesystem](https://github.com/gridsome/gridsome/tree/master/packages/source-filesystem#baseDir) docs                                 | `null`      |
| route                | `String`  | Check [@gridsome/source-filesystem](https://github.com/gridsome/gridsome/tree/master/packages/source-filesystem#route) docs                                 | `null`      |
| pathPrefix           | `String`  | Check [@gridsome/source-filesystem](https://github.com/gridsome/gridsome/tree/master/packages/source-filesystem#pathPrefix) docs                                 | `null`      |
| index                | `String`  | Check [@gridsome/source-filesystem](https://github.com/gridsome/gridsome/tree/master/packages/source-filesystem#index) docs                                 | `['index']` |
| refs                 | `String`  | Check [@gridsome/source-filesystem](https://github.com/gridsome/gridsome/tree/master/packages/source-filesystem#refs) docs                                 | `{}`        |


### Remote URL format

Please use always the following format for your remote url.

| Provider  | Format                                            |
|-----------|---------------------------------------------------|
| Github    | `https://github.com/<username>/<reponame>.git`    |
| GitLab    | `https://gitlab.com/<username>/<reponame>.git`    |
| BitBucket | `https://bitbucket.org/<username>/<reponame>.git` |

## Routes

Since gridsome 0.7.7 you can define your routes via templates.
Detailed introductions can be found here: (https://gridsome.org/docs/templates/)