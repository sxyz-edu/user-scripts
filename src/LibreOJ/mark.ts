/**
 * Display a check mark if you solved this problem
 */

import getProblemList from "./getProblemList";

document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector("div.right.menu > a");
  if (e === null) {
    // if the current user is not logged in yet
    return;
  }

  const url = e.attributes[0].value;
  const uid = (/\/user\/(\w+)/i.exec(url) as RegExpExecArray)[1];

  const pidMatch = /\/problem\/(\w+)/i.exec(window.location.href);
  if (!pidMatch) {
    // this is not a problem page
    return;
  }
  const pid = Number(pidMatch[1]);

  getProblemList(uid).then((data) => {
    const passedlist = new Set(data.passedlist);
    if (passedlist.has(pid)) {
      const ele = document.getElementsByTagName("h1")[0];
      ele.innerHTML = ['<span class="status accepted"><i class="checkmark icon"></i></span>'].join(" ") + ele.innerHTML;
    }
  });
});
