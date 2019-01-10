/**
 * Extended search tool
 */

/* global show_alert */

const search = (parameter) => {
  const txt = parameter.trim();
  if (!txt) {
    return show_alert('提示', '请输入内容');
  }

  if ((/^u:/i).test(txt)) {
    // search user
    let uid = txt.slice(2);
    uid = uid.trim();
    if (!uid) {
      // no input
      return show_alert('提示', '请输入用户名或uid');
    }
    if ((/^\d+$/g).test(uid)) {
      // direct jump
      window.location.href = `/space/show?uid=${uid}`;
    } else {
      // is a user name
      fetch(`https://www.luogu.org/space/ajax_getuid?username=${uid}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.code !== 200) {
            show_alert('好像哪里有点问题', '找不到该用户');
          } else {
            window.location.href = `/space/show?uid=${res.more.uid}`;
          }
        })
        .catch((err) => {
          console.error(err);

          return show_alert('错误', '网络超时');
        });
    }
  } else if ((/^(?:\d+|P\d+|CF\d+[A-Z]|SP\d+|AT\d+|UVA\d+)$/i).test(txt)) {
    // is a pid
    window.location.href = `/problemnew/show/${txt}`;
  } else {
    // search it
    window.location.href = `/problemnew/lists?name=${txt}`;
  }
}

const replaceBtn = () => {
  const btn = document.querySelector('[name=goto]');
  const nbtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(nbtn, btn);

  nbtn.textContent = '搜索';
  nbtn.addEventListener('click', (e) => {
    // prevent default listener
    e.stopImmediatePropagation();
    const txt = document.querySelector('[name=toproblem]').value;
    search(txt);
  });

  const h2 = document.querySelector('div.lg-article.lg-index-stat > h2');

  h2.innerHTML = '<h2>搜索</h2>';

  const input = document.querySelector('[name=toproblem]');
  const ninput = input.cloneNode(true);
  ninput.placeholder = '使用 "u:" 搜索用户';

  input.parentNode.replaceChild(ninput, input);
  ninput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const txt = e.target.value;
      search(txt);
    }
  });
}

const replaceSearchBar = () => {
  const searchBar = () => {
    const sbt = document.querySelector('.search-wrap input');
    if (sbt) {
      const nsbt = sbt.cloneNode(true);
      sbt.parentNode.replaceChild(nsbt, sbt);

      nsbt.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const txt = e.target.value;
          search(txt);
        }
      });
    } else {
      setTimeout(searchBar, 500);
    }
  }
  setTimeout(searchBar, 500);
}

document.addEventListener('DOMContentLoaded', () => {

  if (window.location.pathname === '/') {
    // is home page
    replaceBtn();
  }
  replaceSearchBar();
});

/* eslint consistent-return: "off" */
