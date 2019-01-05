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
  while (true) {
    const result = aRegex.exec(str);
    if (!result) break;
    resultArray.push(result[1]);
  }
  return resultArray;
}

const getProblemList = (uid) => {
  return new Promise((resolve, reject) => {
    const saved = localStorage.getItem(uid);
    if (saved) {
      const data = JSON.parse(saved);
      if (Number(new Date()) - data.updateAt <= 1000 * 60 * 60 * 1) {
        return resolve(data);
      }
    }

    const parseResult = (result) => {
      if (!result) {
        reject('parse error');
      }
      return result[1];
    }

    fetch('/space/show?uid=' + uid)
      .then((res) => res.text())
      .then((res) => {
        const escaped = parseResult(dataRegex.exec(res)).replace(spanRegex, '');
        const statistics = parseResult(dataRegex.exec(res));
        const tried = parseResult(dataRegex.exec(res));
        const passedlist = parseProblems(escaped);
        const triedlist = parseProblems(tried);
        const save = {
          updateAt: Number(new Date()),
          passedlist, triedlist
        }
        localStorage.setItem(uid, JSON.stringify(save));
        resolve(save);
      })
      .catch(reject);
  });
}

const loadProblems = () => {
  if (window.location.pathname === '/space/show') {
    const anotherMatch = /uid=(\d+)/.exec(window.location.href);
    if (!anotherMatch) {
      // if this is not a profile page
      return;
    }
    const another = anotherMatch[1];

    const uidMatch = /_uid=(\d+)/i.exec(document.cookie);
    if (!uidMatch) {
      // if the current user is not logged in yet
      return;
    }
    const uid = uidMatch[1];

    if (another === uid) {
      // I fuck myself
      return;
    }

    getProblemList(uid).then((data) => {
      const passedlist = new Set(data.passedlist);
      const triedlist = new Set(data.triedlist);
      const fuckyou = Array.from(document.querySelectorAll('div.lg-article > a[data-pjax]'));
      fuckyou.forEach((a) => {
        const pid = a.innerHTML;
        if (passedlist.has(pid)) {
          a.style.color = '#1fc51f';
        } else if (triedlist.has(pid)) {
          a.style.color = '#ff9900';
        } else {
          a.style.color = '#ff6666';
        }
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', loadProblems);
