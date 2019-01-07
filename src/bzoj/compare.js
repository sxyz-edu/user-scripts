/**
 * Compare solved problems between you and other users.
 *
 * - Passed: green
 * - Other: red
 */

const pRegex = /p\((\d+)\);/gi;

const parseProblems = (str) => {
  const resultArray = [];
  for (let result = pRegex.exec(str); result; result = pRegex.exec(str)) {
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
        if (Number(new Date()) - data.updateAt <= 1000 * 60) {
          resolve(data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetch(`/JudgeOnline/userinfo.php?user=${uid}`)
      .then((res) => res.text())
      .then((res) => {
        const passedlist = parseProblems(res);
        const save = {
          passedlist
          , 'updateAt': Number(new Date())
        }
        localStorage.setItem(uid, JSON.stringify(save));
        resolve(save);
      })
      .catch(reject);
  });
}

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

  getProblemList(uid)
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
