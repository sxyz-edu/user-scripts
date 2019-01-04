// ==UserScript==
// @name           Scripts for BZOJ
// @namespace      https://www.lydsy.com/
// @version        0.1.1
// @match          https://www.lydsy.com/JudgeOnline/problem.php?id=*
// @match          https://www.lydsy.com/JudgeOnline/show.php?id=*
// @updateURL      https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
// @downloadURL    https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

"use strict";-1<location.href.indexOf("problem.php")&&(location.href=location.href.replace("problem.php","show.php"));var elem=[document.querySelector("title+center"),document.querySelector("div.content+center")],pid=Number(location.href.split("=")[1]);elem.forEach(function(e){e&&(e.innerHTML+='[<a href="https://lydsy.download/archive/'.concat(pid,'.zip">Download</a>]'))});var pid2url=function(e){return e.replace(/^Luogu(\d+)$/,"https://www.luogu.org/problemnew/show/P$1").replace(/^Loj(\d+)$/,"https://loj.ac/problem/$1").replace(/^Codevs(\d+)$/,"http://codevs.cn/problem/$1/").replace(/^Cogs(\d+)$/,"").replace(/^Vijos(\d+)$/,"https://vijos.org/p/$1")},createLink=function(e,t){return e?'<a href="'.concat(e,'" title="').concat(t,'" target="_blank">').concat(t,"</a>"):""},main=function(e){var t=Number(location.href.split("=")[1]),r=!0,o=!1,n=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var c=a.value;if(Number(c[0])==t){var i=c[4],p=c[6];document.getElementsByTagName("h2")[0].innerHTML+=["<br>See Also:",createLink(pid2url(i),i),createLink(pid2url(p),p)].join(" ")}}}catch(e){o=!0,n=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw n}}},result=localStorage.getItem("bzoj_json");result?main(JSON.parse(result)):fetch("https://ruanx.pw/bzojch/result.json").then(function(e){return e.json()}).then(function(e){localStorage.setItem("bzoj_json",JSON.stringify(e)),main(e)});