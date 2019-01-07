/**
 * Provide direct data download link
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/JudgeOnline/show.php') {
    // is not a problem
    return;
  }

  const elem = [document.querySelector('title+center')
    , document.querySelector('div.content+center')];
  const pid = Number(location.href.split('=')[1]);

  if (pid >= 5000) {
    // 404 not found
    return;
  }

  elem.forEach((el) => {
    if (el) {
      el.innerHTML += `[<a href="https://lydsy.download/archive/${pid}.zip">Download</a>]`;
    }
  });

});
