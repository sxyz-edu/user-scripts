/**
 * Get list of solved problems
 */

const aRegex = /<a[^>]*?>(\d+)<\/a>/gi;

/**
 * Parse problem ids from html data
 * @param {string} str html data
 * @returns {number} problem ids
 */
const parseProblems = (str: string): number[] => {
  return (str.match(aRegex) || []).map((res) => Number(res.replace(aRegex, '$1')));
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
        if (Number(new Date()) - data.updateAt <= 1000 * 60 * 60 * 1) {
          return resolve(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetch(`/user/${uid}`)
      .then((res) => res.text())
      .then((res) => {
        const save = {
          passedlist: parseProblems(res),
          updateAt: Number(new Date())
        };
        localStorage.setItem(uid, JSON.stringify(save));
        resolve(save);
      })
      .catch(reject);
  });
};

export default getProblemList;
