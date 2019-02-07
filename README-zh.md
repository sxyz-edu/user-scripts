# User Scripts

[![](https://travis-ci.com/sxyz-edu/user-scripts.svg?branch=master)](https://travis-ci.com/sxyz-edu/user-scripts)

[English](./README.md) | **中文**

实用的用户脚本 for OIer

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

[内核][luogu-user-js] | [配置项][luogu-config]

- 提供了一个更加舒适的 UI；
- 评论自动翻页功能；
- 比较别人和你的做题记录；
- 在题目页面标题处添加该题的当前得分；
- 扩展原有搜索功能：
  - 默认：直接搜索题目（标题或 pid ）
  - "u:" 开头：搜索用户（用户名或 uid ）

## 使用方法

1. 下载 [Tampermonkey](https://tampermonkey.net/) 浏览器插件.

2. 直接点击上方的超链接即可安装脚本。

[bzoj-user-js]: https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
[luogu-user-js]: https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu.user.js
[luogu-config]: https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu-custom.user.js

---

## 开发

```bash
git clone https://github.com/sxyz-edu/user-scripts.git
npm install
```

修改好本地代码后依次运行以下代码：

```bash
npm run eslint
npm run stylelint
npm run build
```

重复以上步骤直到没有错误后进行 commit 或者 Pull request。
