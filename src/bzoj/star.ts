/**
 * Star problems
 */

/* global AV */

/**
 * Provides data storage
 */
interface ISaver {

  /**
   * stared problems
   */
  data: Set<string>;

  /**
   * check if pid is stared
   * @param {String} pid problem id
   */
  has(pid: string): boolean;

  /**
   * mark pid as stared
   * @param {String} pid problem id
   */
  add(pid: string): void;

  /**
   * mark pid as unstared
   * @param {String} pid problem id
   */
  remove(pid: string): void;
}

/**
 * Create a local Saver
 * use localStorage to save and load data
 * @returns {Saver} a local saver
 */
const createLocalSaver = (): ISaver => {
  let Data: string[] = [];
  const saved = localStorage.getItem('stars');
  if (saved) {
    try {
      Data = JSON.parse(saved);
    } catch (e) {
      Data = [];
    }
  }
  const data = new Set(Data);

  const update = (): void => {
    localStorage.setItem('stars', JSON.stringify(Array.from(data)));
  };
  const remove = (pid: string): void => {
    data.delete(pid);
    update();
  };
  const add = (pid: string): void => {
    data.add(pid);
    update();
  };
  const has = (pid: string): boolean => {
    return data.has(pid);
  };

  return { add, data, has, remove };
};

/**
 * Create a leancloud saver
 * return a local saver if fails anyway
 * @param {String} appKey appkey
 * @param {String} appId appid
 * @param {String} username username
 * @returns {Promise<ISaver>} the saver
 */
const createLeancloudSaver = (appKey: string, appId: string, username: string): Promise<ISaver> => {
  const reportError = (err: Error): void => {
    // alert(err);
    console.error(err);
  };

  return new Promise((resolve, reject) => {
    AV.init({ appId, appKey });
    const Stars = AV.Object.extend('Stars');
    const str = new AV.Query('Stars');
    str.equalTo('name', username);

    /**
     * create a new object
     * @returns {Promise<AV.Object>} the object
     */
    const createNewStar = (): Promise<AV.Object> => {
      const star = new Stars();
      star.set('name', username);
      star.set('star', []);

      return star.save();
    };

    /**
     * resolve a saver
     * @param {AV.Object} star av object
     * @returns {void} nothing
     */
    const solve = (star: AV.Queriable): void => {
      if (star instanceof AV.File) {
        throw new Error('File can not be solved');
      }

      const data = new Set(star.get('star') as string[]);
      const has = (id: string): boolean => {
        return data.has(id);
      };
      const add = (id: string): void => {
        data.add(id);
        star.add('star', id);
        star.save().catch(reportError);
      };
      const remove = (id: string): void => {
        data.delete(id);
        star.remove('star', id);
        star.save().catch(reportError);
      };
      resolve({ add, data, has, remove });
    };

    str.find().then((res: AV.Queriable[]) => {
      if (res[0]) {
        solve(res[0]);
      } else {
        // initialize
        createNewStar().then(solve, reject);
      }
    }, reject);
  });
};

/**
 * get a saver
 * default to a leancloud saver
 * if fails anyway, return a local saver
 * @returns {Promise<ISaver>} a saver
 */
const getSaver = (): Promise<ISaver> => {
  return new Promise((resolve) => {
    // TODO: localStorage needs to be synced to leancloud

    // return a local saver
    const reject = () => {
      resolve(createLocalSaver());
    };

    const font = document.querySelector('font');
    if (!font) {
      return reject();
    }
    const username = font.innerText;
    if (username === '捐赠本站') {
      return reject();
    }

    /**
     * This is my leancloud app now (@sxyugao)
     */
    createLeancloudSaver('48WcElR7mXie846wsb85yTgB', 'yxzUEAgrLrP0XSQkN4k1vNE6-gzGzoHsz', username)
      .then(resolve)
      .catch((err: Error) => {
        console.error(err);
        console.warn('Leancloud saver disabled, use localStorage instead.');
        reject();
      });
  });
};

const regularStar =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>';
const solidStar =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';

/**
 * convert HTMLElemnet to string
 * @param {HTMLElement} el Element
 * @returns {String} the result
 */
const dom2string = (el: HTMLElement): string => {
  const tmpNode = document.createElement('div');
  tmpNode.appendChild(el);

  return tmpNode.innerHTML;
};

document.addEventListener('DOMContentLoaded', () => {
  // get a saver
  getSaver().then((saver: ISaver) => {
    // bind elements here

    const insertStar = (pid: string, elem: Element | null): void => {
      if (!elem) {
        return;
      }

      const div = document.createElement('div');
      div.classList.add('star');
      let stared = saver.has(pid);
      if (stared) {
        div.innerHTML = solidStar;
        div.classList.add('stared');
      } else {
        div.innerHTML = regularStar;
      }
      div.addEventListener('click', () => {
        stared = !stared;
        div.classList.toggle('stared');
        if (stared) {
          saver.add(pid);
          div.innerHTML = solidStar;
        } else {
          saver.remove(pid);
          div.innerHTML = regularStar;
        }
      });

      elem.appendChild(div);
    };

    if (
      window.location.pathname === '/JudgeOnline/show.php' ||
      window.location.pathname === '/JudgeOnline/problem.php'
    ) {
      // is problem page
      const pid = location.href.split('=')[1];
      insertStar(pid, document.querySelector('h2'));
    }

    if (window.location.pathname === '/JudgeOnline/problemset.php') {
      // is problem set page
      const list = Array.from(document.querySelectorAll('td[align="left"]'));
      list.forEach((td) => {
        const pid = (td.children[0].getAttribute('href') || '').split('=')[1];
        insertStar(pid, td);
      });
      const ele = document.querySelector('thead > tr > td > center') as HTMLElement;
      const a = document.createElement('a') as HTMLElement;
      a.innerText = ' Stared problems';
      a.setAttribute('href', '#');
      a.addEventListener('click', () => {
        let x = 0;
        const contain = document.querySelector('#problemset > tbody') as HTMLElement;
        contain.innerHTML = '';
        saver.data.forEach((e) => {
          const url = `problem.php?id=${e}`;
          fetch(url)
            .then((res) => res.text())
            .then((txt) => {
              // TODO: 这里太不优美了，试试 pug?
              x++;
              // eslint-disable-next-line init-declarations
              let s: string, str: string;
              s = `<tr class="${x & 1 ? 'evenrow' : 'oddrow'}">`;
              const html = document.createElement('html');
              html.innerHTML = txt;
              s += '<td><span></span></td>'; // TODO: mark accepted problmes
              s += `<td align="center">${e}</td>`;
              let el = html.querySelector('h2') as HTMLElement | null;
              str = '';
              if (el !== null) {
                str = el.innerHTML;
                str = str.slice(str.indexOf(':') + 2, str.length);
              }
              s += `<td align="left"><a href="${url}">${str}</a></td>`;
              el = html.querySelector('p > a');
              str = el !== null ? el.innerText : '';
              s += `<td align="center">${str}</td>`;
              const node = html.querySelector('span') as HTMLElement;
              str = dom2string(node.childNodes[9] as HTMLElement);
              s += `<td align="center"><a href="status.php?problem_id=${e}&amp;jresult=4">${str}</a></td>`;
              str = dom2string(node.childNodes[7] as HTMLElement);
              str = str.slice(0, str.length - 12);
              s += `<td align="center"><a href="status.php?problem_id=${e}">${str}</a></td>`;
              s += '</tr>';
              contain.innerHTML += s;
            });
        });

        return false;
      });
      ele.appendChild(a);
    }
  });
});
