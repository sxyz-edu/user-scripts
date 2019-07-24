/**
 * Compare solved problems between you and other users.
 *
 * - Passed: green
 * - Other: red
 */

import getProblemList from './getProblemList';

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/JudgeOnline/userinfo.php') {
    // is not a profile page
    return;
  }

  const uidElem = document.querySelector('font[color]');
  const uid = uidElem && uidElem.textContent || '';
  if (uid === '捐赠本站' || !uid) {
    // not logged in yet
    return;
  }

  const anotherRes = (/user=(\S+)/).exec(window.location.href);
  const another = anotherRes && anotherRes[1] || '';

  if (another === uid || !another) {
    // compared with the current user logged in
    return;
  }

  getProblemList(uid).then((data) => {
    const passedlist = new Set(data.passedlist);
    const list = Array.from(document.querySelectorAll('a[href^="problem.php"]'));
    list.forEach((a) => {
      const id = Number(a.textContent);
      if (passedlist.has(id)) {
        a.classList.add('solved');
      } else {
        a.classList.add('unsolved');
      }
    });
  });
});
