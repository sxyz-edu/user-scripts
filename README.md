# User Scripts

[![](https://travis-ci.com/sxyz-edu/user-scripts.svg?branch=master)](https://travis-ci.com/sxyz-edu/user-scripts)

**English** | [中文](./README-zh.md)

Useful user scripts for OIers.

Written in TypeScript, bundle by Webpack.

**WARNING: This is a dev branch, including new features but unstable.**

## Usage

1. Download [Tampermonkey](https://tampermonkey.net/) for your browser.

2. Just click the "install" link.

## Feature

**bzoj.user.js**

[install][bzoj-user-js]

- Provide links for related problems on luogu, vijos, codevs, etc.
- Provide direct data download link (based on <https://lydsy.download>).
- Provide access to protected problems (read only, cannot submit yet).
- Add a mark before the title if you have solved this problem already.
- Compare solved problems between you and other users.
- Keep your session.

**luogu.user.js**

[install][luogu-user-js]

**Config Entrance is at the left nav bar**

- Provide a more friendly UI.
- Load comments automatically in discuss pages.
- Compare solved problems between you and other users.
- Add your score of the problem before the title.
- Extend the original search function.
  + Default: direct search for the problem (title or pid).
  + Start with "u:" : search for the user (username or uid).

[bzoj-user-js]: https://raw.githubusercontent.com/sxyz-edu/user-scripts/alpha/dist/bzoj.user.js
[luogu-user-js]: https://raw.githubusercontent.com/sxyz-edu/user-scripts/alpha/dist/luogu.user.js
