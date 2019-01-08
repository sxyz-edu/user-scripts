/**
 * Compare solved problems between you and other users.
 *
 * - Passed: green
 * - Tried: orange
 * - Other: red
 */

const dataRegex = /<div class="lg-article am-hide-sm">([\s\S]*?)<\/div>/gi;
const spanRegex = /<span[\s\S]*?<\/span>/gi;
const aRegex = /<a[^>]*?>([\s\S]*?)<\/a>/gi;

const parseProblems = (str) => {
  return str.match(aRegex).map((res) => res.replace(aRegex, '$1'));
}

const getProblemList = (uid) => {
  return new Promise((resolve, reject) => {
    const saved = localStorage.getItem(uid);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (Number(new Date()) - data.updateAt <= 1000 * 60 * 60 * 1) {
          return resolve(data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    const parseResult = (result) => {
      if (!result) {
        reject(new Error('parse error'));
      }

      return result;
    }

    fetch(`/space/show?uid=${uid}`)
      .then((res) => res.text())
      .then((res) => {
        const data = res.match(dataRegex).map((match) => match.replace(spanRegex, ''));
        const passedlist = parseProblems(parseResult(data[0]));
        const triedlist = parseProblems(parseResult(data[2]));
        const save = {
          passedlist
          , triedlist
          , 'updateAt': Number(new Date())
        }
        localStorage.setItem(uid, JSON.stringify(save));
        resolve(save);
      })
      .catch(reject);
  });
}

const displayNumber = (num) => {
  const cssSelector = 'body > #app-body-new > div > div.am-u-md-4.lg-right >div.lg-article.am-hide-sm >h2';
  document.querySelector(cssSelector).style.fontSize = '18px';
  document.querySelector(cssSelector).textContent = `通过题目（其中你有 ${num} 道题尚未 AC）`;
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/space/show') {
    const anotherMatch = (/uid=(\d+)/).exec(window.location.href);
    if (!anotherMatch) {
      // if this is not a profile page
      return;
    }
    const another = anotherMatch[1];

    const uidMatch = (/_uid=(\d+)/i).exec(document.cookie);
    if (!uidMatch) {
      // if the current user is not logged in yet
      return;
    }
    const uid = uidMatch[1];

    if (another === uid) {
      // compared with the current user logged in
      return;
    }

    getProblemList(uid)
      .then((data) => {
        let num = 0;
        const passedlist = new Set(data.passedlist);
        const triedlist = new Set(data.triedlist);
        const list = Array.from(document.querySelectorAll('div.lg-article > a[data-pjax]'));
        list.forEach((a) => {
          const pid = a.innerHTML;
          if (passedlist.has(pid)) {
            a.classList.add('solved');
          } else {
            ++num;
            if (triedlist.has(pid)) {
              a.classList.add('tried');
            } else {
              a.classList.add('unsolved');
            }
          }
        });
        displayNumber(num);
      });
  }
});
