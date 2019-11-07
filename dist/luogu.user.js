// ==UserScript==
// @name           Scripts for Luogu
// @namespace      https://www.luogu.org/
// @version        1.0.1-beta
// @match          https://www.luogu.org/*
// @match          https://www.luogu.com.cn/*
// @exclude        https://www.luogu.org/blog/*
// @exclude        https://www.luogu.com.cn/blog/*
// @run-at         document-end
// @updateURL      https://github.com/sxyz-edu/user-scripts/raw/master/dist/luogu.user.js
// @downloadURL    https://github.com/sxyz-edu/user-scripts/raw/master/dist/luogu.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"a.solved{color:#1fc51f!important}a.unsolved{color:#f66!important}a.tried{color:#f90!important}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),t.push(c))}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],t))}else{for(var c=[];a<r.parts.length;a++)c.push(v(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=m||(m=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e,t);return u(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],s=o[a.id];s&&(s.refs--,r.push(s))}e&&u(c(e,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},function(e,t,n){"use strict";n.r(t);n(0);var r=function(e){var t=new Set;return e.forEach((function(e){t.add(e.pid)})),t},o=function(e){var t=e.trim();if(!t)return show_alert("提示","请输入内容");if(/^u:/i.test(t)){var n=t.slice(2);if(!(n=n.trim()))return show_alert("提示","请输入用户名或uid");/^\d+$/g.test(n)?window.location.href="/space/show?uid="+n:fetch("https://www.luogu.org/space/ajax_getuid?username="+n).then((function(e){return e.json()})).then((function(e){200!==e.code?show_alert("好像哪里有点问题","找不到该用户"):window.location.href="/space/show?uid="+e.more.uid})).catch((function(e){return console.error(e),show_alert("错误","网络超时")}))}else if(/^(?:\d+|P\d+|CF\d+[A-Z]|SP\d+|AT\d+|UVA\d+)$/i.test(t))window.location.href="/problemnew/show/"+t;else{var r=encodeURIComponent(t);window.location.href="/problem/list?keyword="+r+"&page=1"}},i=function(){var e=document.querySelector("[name=goto]");if(e){var t=e.cloneNode(!0);e.parentNode&&e.parentNode.replaceChild(t,e),t.textContent="搜索",t.addEventListener("click",(function(e){e.stopImmediatePropagation();var t=document.querySelector("input[name=toproblem]"),n=t&&t.value||"";o(n)}))}var n=document.querySelector("div.lg-article.lg-index-stat > h2");n&&(n.innerHTML="<h2>搜索</h2>");var r=document.querySelector("[name=toproblem]");if(r){var i=r.cloneNode(!0);i.placeholder='使用 "u:" 搜索用户',r.parentNode&&r.parentNode.replaceChild(i,r),i.addEventListener("keypress",(function(e){if("Enter"===e.key){var t=e.target,n=t&&t.value||"";o(n)}}))}},a=function(e){document.addEventListener("DOMContentLoaded",e)};a((function(){if(/^\/discuss\/show\/\d+$/.test(window.location.pathname)){var e=/page=(\d+)/i.exec(window.location.href),t=window.location.pathname,n=1;if(e&&(n=Number(e[1])),!(n>1)){var r=!1;window.addEventListener("scroll",(function(){var e,o,i;o=document.body.scrollTop||document.documentElement.scrollTop,i=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),o+2e3>i&&o+1800<i&&!r&&(e=++n,r=!0,fetch(t+"?page="+e).then((function(e){return e.text()})).then((function(e){(e.match(/<article[\s\S]*?<\/article>/gi)||[]).slice(1).forEach((function(e){r=!1;var t=document.querySelectorAll("article");t[t.length-1].outerHTML+=e}))})).catch((function(e){r=!1,console.error(e)})))}));var o=document.querySelector(".pagination-centered");o&&o.remove()}}})),a((function(){var e=function(){if(document.querySelector("img.avatar")){var t=document.querySelector("img.avatar").getAttribute("src"),n=/usericon\/(\d+)/i.exec(t);if(!n)return;var o=n[1];if("1"===o)return;var i=0,a=function(){if(window.location.pathname.includes("user")){if(window.location.href.includes("#problem")){if(!i){++i;var e=/(\d+)#problem/.exec(window.location.href);if(!e)return;e[1]===o?setTimeout(a,1500):(t=o,new Promise((function(e,n){var r=localStorage.getItem(t);if(r)try{var o=JSON.parse(r);if(Number(new Date)-o.updateAt<=36e5)return e(o)}catch(e){console.error(e)}fetch("/user/"+t+"#problem").then((function(e){return e.text()})).then((function(n){var r=/decodeURIComponent\("(.*\..*)"\)/.exec(n);if(r){var o=JSON.parse(decodeURIComponent(r[1])),i={passedlist:o.currentData.passedProblems,triedlist:o.currentData.submittedProblems,updateAt:Number(new Date)};localStorage.setItem(t,JSON.stringify(i)),e(i)}})).catch(n)}))).then((function(e){var t=r(Array.from(e.passedlist)),n=r(Array.from(e.triedlist)),o=function(){document.querySelector("div.row")?Array.from(document.querySelectorAll("span.problem-id")).forEach((function(e){var r=e.firstElementChild;if(r){var o=r,i=o.innerHTML;t.has(i)?o.classList.add("solved"):n.has(i)?o.classList.add("tried"):o.classList.add("unsolved")}})):setTimeout(o,500)};o()}))}}else i=0,setTimeout(a,1500);var t;setTimeout(a,1500)}};a()}else setTimeout(e,100)};e()})),a((function(){"/"===window.location.pathname&&i()}))}]);