/**
 * Provide direct data download link
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/JudgeOnline/show.php' && window.location.pathname !== '/JudgeOnline/problem.php') {
    // is not a problem
    return;
  }

  const elem = [document.querySelector('title+center'), document.querySelector('div.content+center')];
  const pid = Number(location.href.split('=')[1]);

  if (pid >= 5000) {
    // 404 not found
    return;
  }

  elem.forEach((el) => {
    if (el) {
      el.innerHTML += `[<a href="https://darkbzoj.tk/data/${pid}.zip">Download</a>]`;
    }
  });
});
