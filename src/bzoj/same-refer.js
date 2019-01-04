/**
 * Provide links for the same problem on luogu, vijos, codevs, etc.
 */

const pid2url = (pid) => {
  return pid
    .replace(/^Luogu(\d+)$/, 'https://www.luogu.org/problemnew/show/P$1')
    .replace(/^Loj(\d+)$/, 'https://loj.ac/problem/$1')
    .replace(/^Codevs(\d+)$/, 'http://codevs.cn/problem/$1/')
    .replace(/^Cogs(\d+)$/, '')
    .replace(/^Vijos(\d+)$/, 'https://vijos.org/p/$1');
}

const createLink = (url, title) => {
  if (url) {
    return `<a href="${url}" title="${title}" target="_blank">${title}</a>`;
  }

  return '';
}

const main = (data) => {
  const pid = Number(location.href.split('=')[1]);
  for (const item of data) {
    if (Number(item[0]) == pid) {
      const res1 = item[4];
      const res2 = item[6];
      const ele = document.getElementsByTagName('h2');
      ele[0].innerHTML += [ '<br>See Also:'
        , createLink(pid2url(res1), res1)
        , createLink(pid2url(res2), res2) ].join(' ');
    }
  }
}

const result = localStorage.getItem('bzoj_json');

if (!result) {
  fetch('https://ruanx.pw/bzojch/result.json')
    .then((res) => res.json())
    .then((result) => {
      localStorage.setItem('bzoj_json', JSON.stringify(result));
      main(result);
    });
} else {
  // using local cache
  main(JSON.parse(result));
}
