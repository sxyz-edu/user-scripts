/**
 * Star problems
 */

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

  return {
    add
    , has
    , remove
  };
}
const saver = createLocalSaver();

// TODO: add a leancloud saver

const regularStar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>';
const solidStar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';

const insertStar = (pid, elem, begin = false) => {

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

  if (begin) {
    elem.insertBefore(div, elem.firstChild);
  } else {
    elem.appendChild(div);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  if (window.location.pathname !== '/JudgeOnline/show.php' &&
      window.location.pathname !== '/JudgeOnline/problem.php') {
    // is not a problem
    return;
  }

  const pid = location.href.split('=')[1];
  insertStar(pid, document.querySelector('h2'), true);

});

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/JudgeOnline/problemset.php') {
    // is not problem set page
    return;
  }

  const list = Array.from(document.querySelectorAll('td[align="left"]'));
  list.forEach((td) => {
    const pid = td.children[0].getAttribute('href').split('=')[1];
    insertStar(pid, td);
  });
});
