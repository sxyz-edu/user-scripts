// ==UserScript==
// @name           Scripts for BZOJ
// @namespace      https://www.lydsy.com/
// @version        0.3.0
// @match          https://lydsy.com/JudgeOnline/*
// @match          https://www.lydsy.com/JudgeOnline/*
// @run-at         document-start
// @updateURL      https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
// @downloadURL    https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

"use strict";!function(){var a=/p\((\d+)\);/gi;window.getProblemList=function(r){return new Promise(function(n,e){var t=localStorage.getItem(r);if(t)try{var o=JSON.parse(t);Number(new Date)-o.updateAt<=6e4&&n(o)}catch(e){console.error(e)}fetch("/JudgeOnline/userinfo.php?user=".concat(r)).then(function(e){return e.text()}).then(function(e){var t={passedlist:function(e){for(var t=[],n=a.exec(e);n;n=a.exec(e))t.push(n[1]);return t}(e),updateAt:Number(new Date)};localStorage.setItem(r,JSON.stringify(t)),n(t)}).catch(e)})}}(),"Please contact lydsy2012@163.com!"===document.title&&-1<location.href.indexOf("problem.php")&&(location.href=location.href.replace("problem.php","show.php")),document.addEventListener("DOMContentLoaded",function(){-1<location.href.indexOf("show.php")&&(document.getElementsByTagName("h2")[0].innerHTML+='<span style="color:red;">[权限题]</span>')}),setInterval(function(){fetch("/JudgeOnline/",{credentials:"same-origin"})},6e5),function(){var e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode("i.icon.check{background:0 0;width:8px;height:16px;display:inline-block;border-right:5px solid green;border-bottom:5px solid green;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-right:10px}a.solved{color:#1fc51f}a.unsolved{color:#f66}.star,.star.stared{transition:color .2s}.star{width:20px;height:20px;display:inline-block;margin:0 10px;cursor:pointer;vertical-align:middle;color:#656565}.star.stared{color:#ffcc2f}"));var t=document.getElementsByTagName("head");0<t.length?t[0].appendChild(e):document.documentElement.appendChild(e)}(),document.addEventListener("DOMContentLoaded",function(){if("/JudgeOnline/userinfo.php"===window.location.pathname){var e=document.querySelector("font[color]").innerText;"捐赠本站"!==e&&/user=(\S+)/.exec(window.location.href)[1]!==e&&window.getProblemList(e).then(function(e){var n=new Set(e.passedlist);Array.from(document.querySelectorAll('a[href^="problem.php"]')).forEach(function(e){var t=e.innerText.trim();n.has(t)?e.classList.add("solved"):e.classList.add("unsolved")})})}}),document.addEventListener("DOMContentLoaded",function(){if("/JudgeOnline/show.php"===window.location.pathname||"/JudgeOnline/problem.php"===window.location.pathname){var e=[document.querySelector("title+center"),document.querySelector("div.content+center")],t=Number(location.href.split("=")[1]);5e3<=t||e.forEach(function(e){e&&(e.innerHTML+='[<a href="https://lydsy.download/archive/'.concat(t,'.zip">Download</a>]'))})}}),document.addEventListener("DOMContentLoaded",function(){if("/JudgeOnline/show.php"===window.location.pathname||"/JudgeOnline/problem.php"===window.location.pathname){var e=document.querySelector("font[color]").innerText;if("捐赠本站"!==e){var n=location.href.split("=")[1];window.getProblemList(e).then(function(e){if(new Set(e.passedlist).has(n)){var t=document.getElementsByTagName("h2")[0];t.innerHTML=['<i class="icon check"></i>'].join(" ")+t.innerHTML}})}}}),function(){var f=function(e){return e.replace(/^Luogu(\d+)$/,"https://www.luogu.org/problemnew/show/P$1").replace(/^Loj(\d+)$/,"https://loj.ac/problem/$1").replace(/^Codevs(\d+)$/,"http://codevs.cn/problem/$1/").replace(/^Cogs(\d+)$/,"").replace(/^Vijos(\d+)$/,"https://vijos.org/p/$1")},m=function(e,t){return e?'<a href="'.concat(e,'" title="').concat(t,'" target="_blank">').concat(t,"</a>"):""},t=function(e){var t=Number(location.href.split("=")[1]),n=!0,o=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;if(Number(c[0])==t){var l=c[4],d=c[6],s=f(l),u=f(d),p=document.querySelector("span"),h=document.createElement("h3");h.style.color="blue",(s||u)&&(h.innerHTML=["See Also:",m(s,l),m(u,d)].join(" "),p.insertBefore(h,p.firstChild))}}}catch(e){o=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}};document.addEventListener("DOMContentLoaded",function(){var e=localStorage.getItem("bzoj_json");e?t(JSON.parse(e)):fetch("https://ruanx.pw/bzojch/result.json").then(function(e){return e.json()}).then(function(e){localStorage.setItem("bzoj_json",JSON.stringify(e)),t(e)})})}(),function(){var r=function(){var t=[],e=localStorage.getItem("stars");if(e)try{t=JSON.parse(e)}catch(e){t=[]}var n=new Set(t),o=function(){localStorage.setItem("stars",JSON.stringify(Array.from(n)))};return{add:function(e){n.add(e),o()},has:function(e){return n.has(e)},remove:function(e){n.delete(e),o()}}}(),a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>',i='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',n=function(e,t){var n=document.createElement("div");n.classList.add("star");var o=r.has(e);o?(n.innerHTML=i,n.classList.add("stared")):n.innerHTML=a,n.addEventListener("click",function(){o=!o,n.classList.toggle("stared"),n.innerHTML=o?(r.add(e),i):(r.remove(e),a)}),t.appendChild(n)};document.addEventListener("DOMContentLoaded",function(){if("/JudgeOnline/show.php"===window.location.pathname||"/JudgeOnline/problem.php"===window.location.pathname){var e=location.href.split("=")[1];n(e,document.querySelector("h2"))}}),document.addEventListener("DOMContentLoaded",function(){"/JudgeOnline/problemset.php"===window.location.pathname&&Array.from(document.querySelectorAll('td[align="left"]')).forEach(function(e){var t=e.children[0].getAttribute("href").split("=")[1];n(t,e)})})}();