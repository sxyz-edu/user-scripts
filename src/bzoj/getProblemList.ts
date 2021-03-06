/**
 * Get list of solved problems
 */

const pRegex = /p\((\d+)\);/gi;

/**
 * Parse problem ids from html data
 * @param {string} str html data
 * @returns {number} problem ids
 */
const parseProblems = (str: string): number[] => {
  return (str.match(pRegex) || []).map((s) => Number(s.slice(2, 6)));
};

interface IPassedList {
  passedlist: number[];
  updateAt: number;
}

const getProblemList = (uid: string): Promise<IPassedList> => {
  return new Promise((resolve, reject) => {
    const saved = localStorage.getItem(uid);
    if (saved) {
      try {
        // try to use cache
        const data = JSON.parse(saved);
        if (Number(new Date()) - data.updateAt <= 1000 * 60) {
          return resolve(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetch(`/JudgeOnline/userinfo.php?user=${uid}`)
      .then((res) => res.text())
      .then((res) => {
        const save = {
          passedlist: parseProblems(res),
          updateAt: Number(new Date()),
        };
        localStorage.setItem(uid, JSON.stringify(save));
        resolve(save);
      })
      .catch(reject);
  });
};

export default getProblemList;
