/**
 * Star problems
 */

/* tslint:disable max-line-length */

/* global AV */

/**
 * Provides data storage
 */
interface ISaver {
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
  let data: string[] = [];
  const saved = localStorage.getItem("stars");
  if (saved) {
    try {
      data = JSON.parse(saved);
    } catch (e) {
      data = [];
    }
  }
  const st = new Set(data);

  const update = (): void => {
    localStorage.setItem("stars", JSON.stringify(Array.from(st)));
  };
  const remove = (pid: string): void => {
    st.delete(pid);
    update();
  };
  const add = (pid: string): void => {
    st.add(pid);
    update();
  };
  const has = (pid: string): boolean => {
    return st.has(pid);
  };

  return { add, has, remove };
};

/**
 * Create a leancloud saver
 * return a local saver if fails anyway
 * @param {String} appKey appkey
 * @param {String} appId appid
 * @param {String} username username
 */
const createLeancloudSaver = (appKey: string, appId: string, username: string): Promise<ISaver> => {
  const reportError = (err: Error): void => {
    // alert(err);
    console.error(err);
  };

  return new Promise((resolve, reject) => {
    AV.init({ appId, appKey });
    const Stars = AV.Object.extend("Stars");
    const str = new AV.Query("Stars");
    str.equalTo("name", username);

    /**
     * create a new object
     */
    const createNewStar = (): Promise<AV.Object> => {
      const star = new Stars();
      star.set("name", username);
      star.set("star", []);

      return star.save();
    };

    /**
     * resolve a saver
     * @param {AV.Object} star av object
     */
    const solve = (star: AV.Queriable): void => {
      if (star instanceof AV.File) {
        throw new Error("File can not be solved");
      }

      const data = new Set(star.get("star"));
      const has = (id: string): boolean => {
        return data.has(id);
      };
      const add = (id: string): void => {
        data.add(id);
        star.add("star", id);
        star.save().catch(reportError);
      };
      const remove = (id: string): void => {
        data.delete(id);
        star.remove("star", id);
        star.save().catch(reportError);
      };
      resolve({ add, has, remove });
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
 */
const getSaver = (): Promise<ISaver> => {
  return new Promise((resolve) => {
    // TODO: localStorage needs to be synced to leancloud

    // return a local saver
    const reject = () => {
      resolve(createLocalSaver());
    };

    const font = document.querySelector("font");
    if (!font) {
      return reject();
    }
    const username = font.innerText;
    if (username === "捐赠本站") {
      return reject();
    }

    /**
     * This is my leancloud app now (@swwind)
     */
    createLeancloudSaver("48WcElR7mXie846wsb85yTgB", "yxzUEAgrLrP0XSQkN4k1vNE6-gzGzoHsz", username)
      .then(resolve)
      .catch((err: Error) => {
        console.error(err);
        console.warn("Leancloud saver disabled, use localStorage instead.");
        reject();
      });
  });
};

const regularStar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>';
const solidStar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';

document.addEventListener("DOMContentLoaded", () => {
  // get a saver
  getSaver().then((saver: ISaver) => {
    // bind elements here

    const insertStar = (pid: string, elem: Element | null): void => {
      if (!elem) {
        return;
      }

      const div = document.createElement("div");
      div.classList.add("star");
      let stared = saver.has(pid);
      if (stared) {
        div.innerHTML = solidStar;
        div.classList.add("stared");
      } else {
        div.innerHTML = regularStar;
      }
      div.addEventListener("click", () => {
        stared = !stared;
        div.classList.toggle("stared");
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

    if (window.location.pathname === "/JudgeOnline/show.php" || window.location.pathname === "/JudgeOnline/problem.php") {
      // is problem page
      const pid = location.href.split("=")[1];
      insertStar(pid, document.querySelector("h2"));
    }

    if (window.location.pathname === "/JudgeOnline/problemset.php") {
      // is problem set page
      const list = Array.from(document.querySelectorAll('td[align="left"]'));
      list.forEach((td) => {
        const pid = (td.children[0].getAttribute("href") || "").split("=")[1];
        insertStar(pid, td);
      });
    }
  });
});
