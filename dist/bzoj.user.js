// ==UserScript==
// @name           Scripts for BZOJ
// @namespace      https://www.lydsy.com/
// @version        0.1.2
// @match          https://www.lydsy.com/JudgeOnline/problem.php?id=*
// @match          https://www.lydsy.com/JudgeOnline/show.php?id=*
// @updateURL      https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
// @downloadURL    https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

"use strict";-1<location.href.indexOf("problem.php")&&(location.href=location.href.replace("problem.php","show.php")),function(){var e=[document.querySelector("title+center"),document.querySelector("div.content+center")],t=Number(location.href.split("=")[1]);e.forEach(function(e){e&&(e.innerHTML+='[<a href="https://lydsy.download/archive/'.concat(t,'.zip">Download</a>]'))})}(),function(){var p=function(e){return e.replace(/^Luogu(\d+)$/,"https://www.luogu.org/problemnew/show/P$1").replace(/^Loj(\d+)$/,"https://loj.ac/problem/$1").replace(/^Codevs(\d+)$/,"http://codevs.cn/problem/$1/").replace(/^Cogs(\d+)$/,"").replace(/^Vijos(\d+)$/,"https://vijos.org/p/$1")},h=function(e,t){return e?'<a href="'.concat(e,'" title="').concat(t,'" target="_blank">').concat(t,"</a>"):""},t=function(e){var t=Number(location.href.split("=")[1]),o=!0,r=!1,n=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done);o=!0){var l=c.value;if(Number(l[0])==t){var i=l[4],u=l[6];document.getElementsByTagName("h2")[0].innerHTML+=["<br>See Also:",h(p(i),i),h(p(u),u)].join(" ")}}}catch(e){r=!0,n=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw n}}},e=localStorage.getItem("bzoj_json");e?t(JSON.parse(e)):fetch("https://ruanx.pw/bzojch/result.json").then(function(e){return e.json()}).then(function(e){localStorage.setItem("bzoj_json",JSON.stringify(e)),t(e)})}();