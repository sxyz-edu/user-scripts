// ==UserScript==
// @name          Scripts for Luogu
// @version       0.1.2
// @namespace     https://www.luogu.org/
// @match         https://www.luogu.org/*
// @match         https://www.luogu.com.cn/*
// @run-at        document-start
// @updateURL     https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu.user.js
// @downloadURL   https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu.user.js
// @supportURL    https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

// require luogu.user.css
const css = '$css$';

const node = document.createElement('style');
node.type = 'text/css';
node.appendChild(document.createTextNode(css));
const heads = document.getElementsByTagName('head');
if (heads.length > 0) {
  heads[0].appendChild(node);
} else {
  document.documentElement.appendChild(node);
}
