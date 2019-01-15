/**
 * Display a check mark if you solved this problem
 * or your highest score ever got.
 */

const queryForScore = (uid, pid) => {
  return new Promise((resolve, reject) => {
    fetch(`/recordnew/lists?uid=${uid}&pid=${pid}`)
      .then((res) => res.text())
      .then((res) => {
        const dom = new DOMParser().parseFromString(res, 'text/html');
        const elems = Array.from(dom.querySelectorAll('strong[class^="lg-fg-"]'));
        // special judge for remote judge
        if (!elems.length) {
          if (dom.querySelectorAll('span.lg-bg-green').length) {
            resolve(100);
          } else if (dom.querySelectorAll('span.lg-bg-red').length) {
            resolve(0);
          } else {
            resolve(-1);
          }
        }
        const score = Math.max(
          -1,
          ...elems.map((elem) => Number(elem.textContent))
            .filter((num) => !isNaN(num))
        );
        // submit history may more than one page
        // may cause bug here...
        resolve(score);
      })
      .catch(reject);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  const pidMatch = (/\/problemnew\/show\/(\w+)/i).exec(window.location.href);
  if (!pidMatch) {
    // this is now a problem page
    return;
  }

  const pid = pidMatch[1];

  const uidMatch = (/_uid=(\d+)/i).exec(document.cookie);
  if (!uidMatch) {
    // if the current user is not logged in yet
    return;
  }
  const uid = uidMatch[1];

  queryForScore(uid, pid)
    .then((score) => {
      let html = '';
      if (score === 100) {
        html = '<strong class="lg-fg-green"><i class="am-icon-check"></i></strong>';
      } else if (score > 80) {
        html = `<strong class="lg-fg-green">${score}</strong>`;
      } else if (score > 50) {
        html = `<strong class="lg-fg-yellow">${score}</strong>`;
      } else if (score > 20) {
        html = `<strong class="lg-fg-orange">${score}</strong>`;
      } else if (score > -1) {
        html = `<strong class="lg-fg-red">${score}</strong>`;
      } else {
        html = '<strong style="color: #515151;"><i class="am-icon-minus"></i></strong>';
      }
      html = `<a href="/recordnew/lists?uid=${uid}&pid=${pid}" target="_blank">${html}</a>`;

      const waitForLoaded = () => {
        const h1 = document.querySelector('header h1');
        if (h1) {
          h1.innerHTML = html + h1.innerHTML;
        } else {
          setTimeout(waitForLoaded, 500);
        }
      }
      waitForLoaded();
    });

});
