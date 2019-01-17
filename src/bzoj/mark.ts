/**
 * Display a check mark if you accept this problem
 */

import { getProblemList } from './getProblemList';

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/JudgeOnline/show.php' &&
    window.location.pathname !== '/JudgeOnline/problem.php') {
    // is not a problem
    return;
  }

  const uidElem = document.querySelector('font[color]');
  const uid = uidElem && uidElem.textContent || '';
  if (uid === '捐赠本站') {
    // not logged in yet
    return;
  }

  const pid = Number(location.href.split('=')[1]);

  getProblemList(uid)
    .then((data) => {
      const passedlist = new Set(data.passedlist);
      if (passedlist.has(pid)) {
        const ele = document.getElementsByTagName('h2')[0];
        ele.innerHTML = ['<i class="icon check"></i>'].join(' ') + ele.innerHTML;
      }
    })

})
