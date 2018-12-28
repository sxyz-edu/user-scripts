// ==UserScript==
// @name         Scripts for BZOJ
// @namespace    https://www.lydsy.com/
// @version      0.0.1
// @match        https://www.lydsy.com/JudgeOnline/problem.php?id=*
// @match        https://www.lydsy.com/JudgeOnline/show.php?id=*
// @updateURL    https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/bzoj.user.js
// @downloadURL  https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/bzoj.user.js
// @supportURL   https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

{ // namespace

const pid2url = (pid) => {
  return pid
    .replace(/^Luogu(\d+)$/, 'https://www.luogu.org/problemnew/show/P$1')
    .replace(/^Loj(\d+)$/, 'https://loj.ac/problem/$1')
    .replace(/^Codevs(\d+)$/, 'http://codevs.cn/problem/$1/')
    .replace(/^Cogs(\d+)$/, 'http://cogs.pro:8080/cogs/problem/problem.php?pid=$1')
    .replace(/^Vijos(\d+)$/, 'https://vijos.org/p/$1');
}

const createLink = (url, title) => {
  return `<a href="${url}" title="${title}">${title}</a>`;
}

const main = (data) => {
  // provide access
  if (location.href.indexOf('problem.php') > -1) {
    location.href = location.href.replace('problem.php', 'show.php');
  }
  // add links to other oj
  const pid = location.href.split('=')[1];
  for (const i in data) {
    if (data[i][0] == pid) {
      const res1 = data[i][4];
      const res2 = data[i][6];
      const ele = document.getElementsByTagName('h2');
      ele[0].innerText += [ '\nSee Also:'
        , createLink(pid2url(res1), res1)
        , createLink(pid2url(res2), res2) ].join(' ');
    }
  }
  // add download link
  const elem = [ document.querySelector('title+center'), document.querySelector('div.content+center')];
  elem.forEach((el) => {
    if (el) {
      el.innerHTML += `[<a href="https://lydsy.download/archive/${pid}.zip">Download</a>]`;
    }
  });
}

const result = localStorage.getItem('bzoj_json');

if (!result) {
  // data not found, download
  fetch('https://ruanx.pw/bzojch/result.json')
  .then((res) => res.json())
  .then((result) => {
    localStorage.setItem('bzoj_json', JSON.stringify(result));
    main(result);
  });
} else {
  // using local cache
  main(result);
}

} // end namespace
