/**
 * Compare solved problems between you and other users.
 *
 * - Passed: green
 * - Other: red
 */

import getProblemList from "./getProblemList";

/**
 * Display a number on a h2 element
 * @param {Number} num number need to be show
 * @returns {void} nothing
 */
const displayNumber = (num: number): void => {
  const h4 = document.querySelectorAll("h4.ui.top.attached.block.header");
  h4.forEach((el) => {
    if (el.textContent === "通过的题目") {
      el.textContent = `通过的题目（其中你有 ${num} 道题尚未 AC）`;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.indexOf("user") < 0) {
    // is not a profile page
    return;
  }

  const e = document.querySelector("div.right.menu > a");
  if (e === null) {
    // if the current user is not logged in yet
    return;
  }

  const url = e.attributes[0].value;
  const uid = (/\/user\/(\w+)/i.exec(url) as RegExpExecArray)[1];

  const anotherRes = /\/user\/(\S+)/.exec(window.location.pathname);
  const another = (anotherRes && anotherRes[1]) || "";

  if (another === uid || !another) {
    // compared with the current user logged in
    return;
  }

  getProblemList(uid).then((data) => {
    let num = 0;
    const passedlist = new Set(data.passedlist);
    const list = Array.from(document.querySelectorAll('a[href^="/problem/"]'));
    list.forEach((a) => {
      const id = Number(a.textContent);
      if (passedlist.has(id)) {
        a.classList.add("solved");
      } else {
        num++;
        a.classList.add("unsolved");
      }
    });
    displayNumber(num);
  });
});
