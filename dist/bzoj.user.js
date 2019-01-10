// ==UserScript==
// @name           Scripts for BZOJ
// @namespace      https://www.lydsy.com/
// @version        0.2.6
// @match          https://lydsy.com/JudgeOnline/*
// @match          https://www.lydsy.com/JudgeOnline/*
// @run-at         document-start
// @updateURL      https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
// @downloadURL    https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

"use strict";!function(){var a=/p\((\d+)\);/gi;window.getProblemList=function(r){return new Promise(function(n,e){var t=localStorage.getItem(r);if(t)try{var o=JSON.parse(t);Number(new Date)-o.updateAt<=6e4&&n(o)}catch(e){console.error(e)}fetch("/JudgeOnline/userinfo.php?user=".concat(r)).then(function(e){return e.text()}).then(function(e){var t={passedlist:function(e){for(var t=[],n=a.exec(e);n;n=a.exec(e))t.push(n[1]);return t}(e),updateAt:Number(new Date)};localStorage.setItem(r,JSON.stringify(t)),n(t)}).catch(e)})}}(),"Please contact lydsy2012@163.com!"===document.title&&-1<location.href.indexOf("problem.php")&&(location.href=location.href.replace("problem.php","show.php")),document.addEventListener("DOMContentLoaded",function(){-1<location.href.indexOf("show.php")&&(document.getElementsByTagName("h2")[0].innerHTML+='<span style="color:red;">[权限题]</span>')}),setInterval(function(){fetch("/JudgeOnline/",{credentials:"same-origin"})},6e5),function(){var e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode("i.icon.check{background:0 0;width:8px;height:16px;display:inline-block;border-right:5px solid green;border-bottom:5px solid green;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-right:10px}a.solved{color:#1fc51f}a.unsolved{color:#f66}"));var t=document.getElementsByTagName("head");0<t.length?t[0].appendChild(e):document.documentElement.appendChild(e)}(),document.addEventListener("DOMContentLoaded",function(){if("/JudgeOnline/userinfo.php"===window.location.pathname){var e=document.querySelector("font[color]").innerText;"捐赠本站"!==e&&/user=(\S+)/.exec(window.location.href)[1]!==e&&window.getProblemList(e).then(function(e){var n=new Set(e.passedlist);Array.from(document.querySelectorAll('a[href^="problem.php"]')).forEach(function(e){var t=e.innerText.trim();n.has(t)?e.classList.add("solved"):e.classList.add("unsolved")})})}}),document.addEventListener("DOMContentLoaded",function(){if("/JudgeOnline/show.php"===window.location.pathname){var e=[document.querySelector("title+center"),document.querySelector("div.content+center")],t=Number(location.href.split("=")[1]);5e3<=t||e.forEach(function(e){e&&(e.innerHTML+='[<a href="https://lydsy.download/archive/'.concat(t,'.zip">Download</a>]'))})}}),document.addEventListener("DOMContentLoaded",function(){if("/JudgeOnline/show.php"===window.location.pathname){var e=document.querySelector("font[color]").innerText;if("捐赠本站"!==e){var n=location.href.split("=")[1];window.getProblemList(e).then(function(e){if(new Set(e.passedlist).has(n)){var t=document.getElementsByTagName("h2")[0];t.innerHTML=['<i class="icon check"></i>'].join(" ")+t.innerHTML}})}}}),function(){var p=function(e){return e.replace(/^Luogu(\d+)$/,"https://www.luogu.org/problemnew/show/P$1").replace(/^Loj(\d+)$/,"https://loj.ac/problem/$1").replace(/^Codevs(\d+)$/,"http://codevs.cn/problem/$1/").replace(/^Cogs(\d+)$/,"").replace(/^Vijos(\d+)$/,"https://vijos.org/p/$1")},f=function(e,t){return e?'<a href="'.concat(e,'" title="').concat(t,'" target="_blank">').concat(t,"</a>"):""},t=function(e){var t=Number(location.href.split("=")[1]),n=!0,o=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var i=a.value;if(Number(i[0])==t){var l=i[4],d=i[6],s=p(l),u=p(d),h=document.getElementsByTagName("h2")[0];(s||u)&&(h.innerHTML+=["<br>See Also:",f(s,l),f(u,d)].join(" "))}}}catch(e){o=!0,r=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw r}}};document.addEventListener("DOMContentLoaded",function(){var e=localStorage.getItem("bzoj_json");e?t(JSON.parse(e)):fetch("https://ruanx.pw/bzojch/result.json").then(function(e){return e.json()}).then(function(e){localStorage.setItem("bzoj_json",JSON.stringify(e)),t(e)})})}();