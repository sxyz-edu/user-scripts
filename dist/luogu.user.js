// ==UserScript==
// @name           Scripts for Luogu
// @namespace      https://www.luogu.org/
// @version        0.6.0-beta.1
// @match          https://www.luogu.org/*
// @match          https://www.luogu.com.cn/*
// @exclude        https://www.luogu.org/blog/*
// @exclude        https://www.luogu.com.cn/blog/*
// @run-at         document-end
// @updateURL      https://github.com/sxyz-edu/user-scripts/raw/master/dist/luogu.user.js
// @downloadURL    https://github.com/sxyz-edu/user-scripts/raw/master/dist/luogu.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"a.solved{color:#1fc51f}a.unsolved{color:#f66}a.tried{color:#f90}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(a).concat([o]).join("\n")}var i,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var c=e[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),t.push(c))}},t}},function(e,t,n){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(m(r.parts[i],t))}else{for(var c=[];i<r.parts.length;i++)c.push(m(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var a=v++;n=h||(h=s(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e,t);return u(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a],s=o[i.id];s&&(s.refs--,r.push(s))}e&&u(c(e,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},function(e,t,n){"use strict";n.r(t);n(0);var r=/<div class="lg-article am-hide-sm">([\s\S]*?)<\/div>/gi,o=/<span[\s\S]*?<\/span>/gi,a=/<a[^>]*?>([\s\S]*?)<\/a>/gi,i=function(e){return(e.match(a)||[]).map(function(e){return e.replace(a,"$1")})},c=function(e){var t=e.trim();if(!t)return show_alert("提示","请输入内容");if(/^u:/i.test(t)){var n=t.slice(2);if(!(n=n.trim()))return show_alert("提示","请输入用户名或uid");/^\d+$/g.test(n)?window.location.href="/space/show?uid="+n:fetch("https://www.luogu.org/space/ajax_getuid?username="+n).then(function(e){return e.json()}).then(function(e){200!==e.code?show_alert("好像哪里有点问题","找不到该用户"):window.location.href="/space/show?uid="+e.more.uid}).catch(function(e){return console.error(e),show_alert("错误","网络超时")})}else if(/^(?:\d+|P\d+|CF\d+[A-Z]|SP\d+|AT\d+|UVA\d+)$/i.test(t))window.location.href="/problemnew/show/"+t;else{var r=encodeURIComponent(t);window.location.href="/problem/list?keyword="+r+"&page=1"}},u=function(){var e=document.querySelector("[name=goto]");if(e){var t=e.cloneNode(!0);e.parentNode&&e.parentNode.replaceChild(t,e),t.textContent="搜索",t.addEventListener("click",function(e){e.stopImmediatePropagation();var t=document.querySelector("input[name=toproblem]"),n=t&&t.value||"";c(n)})}var n=document.querySelector("div.lg-article.lg-index-stat > h2");n&&(n.innerHTML="<h2>搜索</h2>");var r=document.querySelector("[name=toproblem]");if(r){var o=r.cloneNode(!0);o.placeholder='使用 "u:" 搜索用户',r.parentNode&&r.parentNode.replaceChild(o,r),o.addEventListener("keypress",function(e){if("Enter"===e.key){var t=e.target,n=t&&t.value||"";c(n)}})}},s=function(e){document.addEventListener("DOMContentLoaded",e)};s(function(){if(/^\/discuss\/show\/\d+$/.test(window.location.pathname)){var e=/page=(\d+)/i.exec(window.location.href),t=window.location.pathname,n=1;if(e&&(n=Number(e[1])),!(n>1)){var r=!1;window.addEventListener("scroll",function(){var e,o,a;o=document.body.scrollTop||document.documentElement.scrollTop,a=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),o+2e3>a&&o+1800<a&&!r&&(e=++n,r=!0,fetch(t+"?page="+e).then(function(e){return e.text()}).then(function(e){(e.match(/<article[\s\S]*?<\/article>/gi)||[]).slice(1).forEach(function(e){r=!1;var t=document.querySelectorAll("article");t[t.length-1].outerHTML+=e})}).catch(function(e){r=!1,console.error(e)}))});var o=document.querySelector(".pagination-centered");o&&o.remove()}}}),s(function(){if("/space/show"===window.location.pathname){var e=/uid=(\d+)/.exec(window.location.href);if(!e)return;var t=e[1],n=function(){var e=document.querySelectorAll("a[data-v-1f4667be][data-v-19d75f76]");if(e.length){if(e.length<3)return;var a=e[2].getAttribute("href"),c=/uid=(\d+)/i.exec(a);if(c){var u=c[1];if(t===u)return;(function(e){return new Promise(function(t,n){var a=localStorage.getItem(e);if(a)try{var c=JSON.parse(a);if(Number(new Date)-c.updateAt<=36e5)return t(c)}catch(e){console.error(e)}var u=function(e){return e||n(new Error("Parse error")),e};fetch("/space/show?uid="+e).then(function(e){return e.text()}).then(function(n){var a=(n.match(r)||[]).map(function(e){return e.replace(o,"")}),c={passedlist:i(u(a[1])),triedlist:i(u(a[2])),updateAt:Number(new Date)};localStorage.setItem(e,JSON.stringify(c)),t(c)}).catch(n)})})(u).then(function(e){var t=0,n=new Set(e.passedlist),r=new Set(e.triedlist);Array.from(document.querySelectorAll("div.lg-article > a[data-pjax]")).forEach(function(e){var o=e.innerHTML;n.has(o)?e.classList.add("solved"):(++t,r.has(o)?e.classList.add("tried"):e.classList.add("unsolved"))}),function(e){var t=document.querySelector("span.fuck-spider").parentElement;t.style.fontSize="18px",t.textContent="通过题目（其中你有 "+e+" 道题尚未 AC）"}(t)})}else setTimeout(n,100)}else setTimeout(n,100)};n()}}),s(function(){"/"===window.location.pathname&&u()})}]);