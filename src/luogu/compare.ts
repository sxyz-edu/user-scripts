/**
 * Compare solved problems between you and other users.
 *
 * - Passed: green
 * - Tried: orange
 * - Other: red
 */

/**
 * ProblemList for caching
 */
interface IProblemList {
  passedlist: string[];
  triedlist: string[];
  updateAt: number;
}

/**
 * Get list of problems user passed or tried
 * @param {String} uid user id
 * @return {Promise<ProblemList>} problem list
 */
const getProblemList = (uid: string): Promise<IProblemList> => {
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

    fetch(`/user/${uid}#problem`)
      .then((res) => res.text())
      .then((res) => {
        const s = (/decodeURIComponent\("(.*\..*)"\)/).exec(res);
        if (!s) {
          return;
        }
        const data = JSON.parse(decodeURIComponent(s[1]));
        const passedlist = data.currentData.passedProblems;
        const triedlist = data.currentData.submittedProblems;
        const save = {
          passedlist,
          triedlist,
          updateAt: Number(new Date())
        };
        localStorage.setItem(uid, JSON.stringify(save));
        resolve(save);
      })
      .catch(reject);
  });
};

/**
 * Generator problem set
 * @param {Array<string>} list the input
 * @return {Set} the output
 */
const gen = (list: Array<any>): Set<string> => {
  const res = new Set<string>();
  list.forEach((pro) => {
    res.add(pro.pid);
  });

  return res;
}

export default () => {
  const waitForAvatarLoaded = (): void => {
    const el = document.querySelector('img.avatar');
    if (!el) {
      setTimeout(waitForAvatarLoaded, 100);
    } else {
      const avatar = document.querySelector('img.avatar') as HTMLElement;
      const src = avatar.getAttribute('src') as string;
      const uidMatch = (/usericon\/(\d+)/i).exec(src);
      if (!uidMatch) {
        // it's impossible
        return;
      }
      const uid = uidMatch[1];
      if (uid === '1') {
        // the current user must be logged in
        return;
      }
      let num = 0;
      const watchDog = (): void => {
        if (!window.location.pathname.includes('user')) {
          // in order to avoid MLE
          return;
        }
        if (!window.location.href.includes('#problem')) {
          // if not in problem page
          num = 0;
          setTimeout(watchDog, 1500);
        } else if (!num) {
          // only run one time
          ++num;
          const anotherMatch = (/(\d+)#problem/).exec(window.location.href);
          if (!anotherMatch) {
            // it's impossible
            return;
          }
          const another = anotherMatch[1];
          if (another === uid) {
            // compared with the current user logged in
            setTimeout(watchDog, 1500);
          } else {
            getProblemList(uid).then((data) => {
              const passedlist = gen(Array.from(data.passedlist));
              const triedlist = gen(Array.from(data.triedlist));
              const waitForLoaded = (): void => {
                const e = document.querySelector('div.row');
                if (e) {
                  const list = Array.from(document.querySelectorAll('span.problem-id'));
                  list.forEach((a) => {
                    const el = a.firstElementChild;
                    if (el) {
                      const ele = el as HTMLElement;
                      const pid = ele.innerHTML;
                      if (passedlist.has(pid)) {
                        ele.classList.add('solved');
                      } else if (triedlist.has(pid)) {
                        ele.classList.add('tried');
                      } else {
                        ele.classList.add('unsolved');
                      }
                    }
                  });
                } else {
                  setTimeout(waitForLoaded, 500);
                }
              }
              waitForLoaded();
            });
          }
        }
        setTimeout(watchDog, 1500);
      }
      watchDog();
    }
  }
  waitForAvatarLoaded();
};
