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
  const resultArray = [];
  for (let result = aRegex.exec(str); result; result = aRegex.exec(str)) {
    resultArray.push(result[1]);
  }

  return resultArray;
}

const getProblemList = (uid) => {
  return new Promise((resolve, reject) => {
    const saved = localStorage.getItem(uid);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (Number(new Date()) - data.updateAt <= 1000 * 60 * 60 * 1) {
          resolve(data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    const parseResult = (result) => {
      if (!result) {
        reject(new Error('parse error'));
      }

      return result[1];
    }

    fetch(`/space/show?uid=${uid}`)
      .then((res) => res.text())
      .then((res) => {
        const passed = parseResult(dataRegex.exec(res)).replace(spanRegex, '');
        dataRegex.exec(res); // statistics is no using
        const tried = parseResult(dataRegex.exec(res)).replace(spanRegex, '');
        const passedlist = parseProblems(passed);
        const triedlist = parseProblems(tried);
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

const loadProblems = () => {
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

    getProblemList(uid).then((data) => {
      let num = 0;
      const passedlist = new Set(data.passedlist);
      const triedlist = new Set(data.triedlist);
      const list = Array.from(document.querySelectorAll('div.lg-article > a[data-pjax]'));
      list.forEach((a) => {
        const pid = a.innerHTML;
        if (passedlist.has(pid)) {
          a.style.color = '#1fc51f';
        } else {
          ++num;
          if (triedlist.has(pid)) {
            a.style.color = '#ff9900';
          } else {
            a.style.color = '#ff6666';
          }
        }
      })
      displayNumber(num);
    })
  }
}

document.addEventListener('DOMContentLoaded', loadProblems);