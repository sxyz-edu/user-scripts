# User Scripts

[![](https://travis-ci.com/sxyz-edu/user-scripts.svg?branch=master)](https://travis-ci.com/sxyz-edu/user-scripts)

[English](./README.md) | **中文**

实用的用户脚本 for OIer

使用 TypeScript 编写，由 Webpack 打包。

## 使用方法

1. 下载 [Tampermonkey](https://tampermonkey.net/) 浏览器插件.

2. 直接点击上方的「安装」链接即可安装脚本。

3. 若要更新，请在 Tampermonkey 界面里更新，本页面的链接有缓存。

## 特性

**bzoj.user.js**

[安装][bzoj-user-js]

- 提供其他题库相关题目的跳转连接（数据来自第三方）；
- 提供便捷的数据下载链接（基于 <https://darkbzoj.tk>，仅供个人学习使用）；
- 提供权限题的访问权限（仍然不能提交）；
- 在做过的题目标题前打勾；
- 比较别人和你的做题记录；
- 收藏题目，并在云端同步；
- 保持登录状态。

**luogu.user.js**

[安装][luogu-user-js]

- 评论自动翻页功能；
- 比较别人和你的做题记录。

**LibreOJ.user.js**

[安装][libreoj-user-js]

- 在做过的题目标题前打勾；
- 比较别人和你的做题记录。

## 参与开发

```bash
git clone https://github.com/sxyz-edu/user-scripts.git
cd user-scripts
# 如果你用 npm
npm install
# 如果你用 yarn
yarn install
```

在 commit 或者发送 pull request 之前，需要确保代码能够通过测试以及经过构建。

注意，除非你知道自己修改的是什么脚本，否则请构建所有脚本。

```bash
# 如果你用 npm
npm run eslint
npm run stylelint
# 如果你想构建洛谷脚本
npm run luogu
# 如果你想构建 bzoj 脚本
npm run bzoj
# 如果你想构建 LibreOJ 脚本
npm run LibreOJ
# 如果你想构建全部脚本
npm run build

# 如果你用 yarn
yarn eslint
yarn stylelint
# 如果你想构建洛谷脚本
yarn luogu
# 如果你想构建 bzoj 脚本
yarn bzoj
# 如果你想构建 LibreOJ 脚本
yarn LibreOJ
# 如果你想构建全部脚本
yarn build
```

感谢您的贡献！

[bzoj-user-js]: https://cdn.jsdelivr.net/gh/sxyz-edu/user-scripts/dist/bzoj.user.js
[luogu-user-js]: https://cdn.jsdelivr.net/gh/sxyz-edu/user-scripts/dist/luogu.user.js
[libreoj-user-js]: https://cdn.jsdelivr.net/gh/sxyz-edu/user-scripts/dist/LibreOJ.user.js
