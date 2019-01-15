/**
 * Get list of solved problems
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

export default getProblemList;
