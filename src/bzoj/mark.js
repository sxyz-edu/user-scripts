/**
 * Display a check mark if you accept this problem
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/JudgeOnline/show.php') {
    // is not a problem
    return;
  }

  const uid = document.querySelector('font[color]').innerText;
  if (uid === '捐赠本站') {
    // not logged in yet
    return;
  }

  const pid = location.href.split('=')[1];

  window.getProblemList(uid)
    .then((data) => {
      const passedlist = new Set(data.passedlist);
      if (passedlist.has(pid)) {
        const ele = document.getElementsByTagName('h2')[0];
        ele.innerHTML = ['<i class="icon check"></i>'].join(' ') + ele.innerHTML;
      }
    })

})