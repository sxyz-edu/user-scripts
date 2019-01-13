/**
 * Star problems
 */

/* global AV */

const createLocalSaver = () => {
  let data = [];
  const saved = localStorage.getItem('stars');
  if (saved) {
    try {
      data = JSON.parse(saved);
    } catch (e) {
      data = [];
    }
  }
  const st = new Set(data);

  const update = () => {
    localStorage.setItem('stars', JSON.stringify(Array.from(st)));
  }
  const remove = (pid) => {
    st.delete(pid);
    update();
  }
  const add = (pid) => {
    st.add(pid);
    update();
  }
  const has = (pid) => {
    return st.has(pid);
  }

  return { add, has, remove };
}

const createLeancloudSaver = (key, id) => {
  const reportError = (err) => {
    // alert(err);
    console.error(err);
  }

  return new Promise((resolve, reject) => {
    if (typeof AV === 'undefined') {
      reject(new Error('AV object required'));

      return;
    }
    AV.init(key, id);
    const Stars = AV.Object.extend('Stars');
    const str = new AV.Query('Stars');

    const createNewStar = () => {
      const star = new Stars();
      star.set('star', []);

      return star.save();
    }
    const solve = (star) => {
      const data = new Set(star.get('star'));
      const has = (id) => data.has(id);
      const add = (id) => {
        data.add(id);
        star.add('star', id);
        star.save().catch(reportError);
      }
      const remove = (id) => {
        data.delete(id);
        star.remove('star', id);
        star.save().catch(reportError);
      }
      resolve({ add, has, remove });
    }

    str.find().then((res) => {
      if (res[0]) {
        solve(res[0]);
      } else {
        // initialize
        createNewStar().then(solve, reject);
      }
    })
      .catch((error) => {
        if (error.message === 'Class or object doesn\'t exists.') {
        // prefix: initialize
          createNewStar().then(solve, reject);
        } else {
          reject(error);
        }
      });
  });
}

const getSaver = () => {
  return new Promise((resolve) => {

    // TODO: split each user's stars
    // stars are the same for any user so far because we did not implement it yet.
    // FIXME first.

    // TODO: use specified leancloud app but not this default app
    // in case that, we need to support a more convenient config page
    // this can also replace luogu-custom.user.js

    // TODO: localStorage needs to be synced to leancloud

    createLeancloudSaver('Xg0skcXL3ifVW7K0SFKTFCzE-gzGzoHsz', 'Hd5RR4oB6dkRi9n8mrKcQMXB').then(resolve, (err) => {
      console.error(err);
      console.warn('Leancloud saver disabled, use localStorage instead.');
      resolve(createLocalSaver());
    });
  });
}

const regularStar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>';
const solidStar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';

document.addEventListener('DOMContentLoaded', () => {
  getSaver().then((saver) => {

    const insertStar = (pid, elem) => {

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
    }

    if (window.location.pathname === '/JudgeOnline/show.php' ||
      window.location.pathname === '/JudgeOnline/problem.php') {
      // is a problem
      const pid = location.href.split('=')[1];
      insertStar(pid, document.querySelector('h2'));
    }

    if (window.location.pathname === '/JudgeOnline/problemset.php') {
      // is problem set page
      const list = Array.from(document.querySelectorAll('td[align="left"]'));
      list.forEach((td) => {
        const pid = td.children[0].getAttribute('href').split('=')[1];
        insertStar(pid, td);
      });
    }

  });

});
