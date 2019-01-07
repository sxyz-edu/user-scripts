/**
 * Compare solved problems between you and other users.
 *
 * - Passed: green
 * - Other: red
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/JudgeOnline/userinfo.php') {
    // is not a profile page
    return;
  }

  const uid = document.querySelector('font[color]').innerText;
  if (uid === '捐赠本站') {
    // not logged in yet
    return;
  }

  const another = (/user=(\S+)/).exec(window.location.href)[1];

  if (another === uid) {
    // compared with the current user logged in
    return;
  }

  window.getProblemList(uid)
    .then((data) => {
      const passedlist = new Set(data.passedlist);
      const list = Array.from(document.querySelectorAll('a[href^="problem.php"]'));
      list.forEach((a) => {
        const id = a.innerText.trim();
        if (passedlist.has(id)) {
          a.style.color = '#1fc51f';
        } else {
          a.style.color = '#ff6666';
        }
      })
    })

})
