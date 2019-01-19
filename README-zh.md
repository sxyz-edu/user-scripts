# User Scripts

[![](https://travis-ci.com/sxyz-edu/user-scripts.svg?branch=master)](https://travis-ci.com/sxyz-edu/user-scripts)

[English](./README.md) | **中文**

实用的用户脚本 for OIer

使用 TypeScript 编写，由 Webpack 打包。

**警告：这是一个开发分支，会包括一些新功能但可能不稳定。**

## 使用方法

1. 下载 [Tampermonkey](https://tampermonkey.net/) 浏览器插件.

2. 直接点击上方的「安装」链接即可安装脚本（~~我觉得没必要用 greasyfork 啊~~）。

## 特性

**bzoj.user.js**

[安装][bzoj-user-js]

- 提供其他题库相关题目的跳转连接（数据来自第三方）；
- 提供便捷的数据下载链接（基于 <https://lydsy.download>）；
- 提供权限题的访问权限（仍然不能提交）；
- 在做过的题目标题前打勾；
- 比较别人和你的做题记录；
- 保持登录状态。

**luogu.user.js**

[安装][luogu-user-js]

**设置的入口在左侧导航栏中**

- 提供了一个更加舒适的 UI；
- 评论自动翻页功能；
- 比较别人和你的做题记录；
- 在题目页面标题处添加该题的当前得分；
- 扩展原有搜索功能：
  + 默认：直接搜索题目（标题或 pid）
  + "u:" 开头：搜索用户（用户名或 uid）

[bzoj-user-js]: https://raw.githubusercontent.com/sxyz-edu/user-scripts/alpha/dist/bzoj.user.js
[luogu-user-js]: https://raw.githubusercontent.com/sxyz-edu/user-scripts/alpha/dist/luogu.user.js
