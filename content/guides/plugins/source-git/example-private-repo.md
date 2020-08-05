---
title: Example Private Repository
---

## Access to private repositories

1. Create a new personal access token
2. Add `privateRepo` to your source definition and set it to `true`
3. Add `credentials.username` and `credentials.token` to your source definition

### How to generate a personal access token

* Github: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
* Gitlab: https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html
* Bitbucket: https://confluence.atlassian.com/bitbucket/app-passwords-828781300.html

## Usage

```js:title=gridsome.config.js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@noxify/gridsome-source-git',
      options: {
        remote: 'https://github.com/noxify/gridsome-source-git-private-test.git',
        target: 'git-source/github/private/',
        privateRepo: true,
        credentials: {
          username: '<github username>',
          token: '<github personal access token>'
        },
        typeName: 'PrivateGithub'
      }
    }
  ]
}
```