# User Scripts

[![](https://travis-ci.com/sxyz-edu/user-scripts.svg?branch=master)](https://travis-ci.com/sxyz-edu/user-scripts)

**English** | [中文](./README-zh.md)

Useful user scripts for OIers.

Written in TypeScript, bundle by Webpack.

## Usage

1. Download [Tampermonkey](https://tampermonkey.net/) for your browser.

2. Just click the "install" link.

3. If you want to update the scripts, please update them by Tampermonkey.Because the links in this page have cached so you cannot get the latest version.

## Feature

**bzoj.user.js**

[install][bzoj-user-js]

- Provide links for related problems on luogu, vijos, codevs, etc.
- Provide direct data download link (based on <https://darkbzoj.tk>, for personal study only).
- Provide access to protected problems (read only, cannot submit yet).
- Add a mark before the title if you have solved this problem already.
- Compare solved problems between you and other users.
- Star problems you like and sync them by cloud.
- Keep your session.

**luogu.user.js**

[install][luogu-user-js]

- Load comments automatically in discuss pages.
- Compare solved problems between you and other users.

**LibreOJ.user.js**

[install][libreoj-user-js]

- Add a mark before the title if you have solved this problem already.
- Compare solved problems between you and other users.

## Development

```bash
git clone https://github.com/sxyz-edu/user-scripts.git
cd user-scripts
# if you use npm
npm install
# if you use yarn
yarn install
```

Before you commit or pull request, you need to make sure your code passes the test and is built.

Attention, unless you know what are you doing, please do not run the single build task.

```bash
# if you use npm
npm run eslint
npm run stylelint
# if you want to build scripts for luogu
npm run luogu
# if you want to build scripts for bzoj
npm run bzoj
# if you want to build scripts for LibreOJ
npm run LibreOJ
# if you want to build all scripts
npm run build

# if you use yarn
yarn eslint
yarn stylelint
# if you want to build scripts for luogu
yarn luogu
# if you want to build scripts for bzoj
yarn bzoj
# if you want to build scripts for LibreOJ
yarn LibreOJ
# if you want to build all scripts
yarn build
```

Thanks for your contribution.

[bzoj-user-js]: https://cdn.jsdelivr.net/gh/sxyz-edu/user-scripts/dist/bzoj.user.js
[luogu-user-js]: https://cdn.jsdelivr.net/gh/sxyz-edu/user-scripts/dist/luogu.user.js
[libreoj-user-js]: https://cdn.jsdelivr.net/gh/sxyz-edu/user-scripts/dist/LibreOJ.user.js
