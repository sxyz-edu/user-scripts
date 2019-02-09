/**
 * Returns problem url by problem id
 * @param {String} pid problem id
 * @returns {String} url to the problem
 */
const pid2url = (pid: string): string => {
  return pid
    .replace(/^Luogu(\d+)$/, "https://www.luogu.org/problemnew/show/P$1")
    .replace(/^Loj(\d+)$/, "https://loj.ac/problem/$1")
    .replace(/^Codevs(\d+)$/, "http://codevs.cn/problem/$1/")
    .replace(/^Cogs(\d+)$/, "") // cogs GG
    .replace(/^Vijos(\d+)$/, "https://vijos.org/p/$1");
};

/**
 * Create a tag by url
 * @param {String} url link
 * @param {String} title title
 * @returns {String} html a tag or null
 */
const createLink = (url: string, title: string): string => {
  if (url) {
    return `<a href="${url}" title="${title}" target="_blank">${title}</a>`;
  }

  return "";
};

/**
 * Provide links for the same problem other OJs
 * @param {[[String]]} data problem data
 * @returns {void} nothing
 */
const main = (data: string[][]): void => {
  const pid = Number(location.href.split("=")[1]);
  for (const item of data) {
    if (Number(item[0]) === pid) {
      const res1 = item[4];
      const res2 = item[6];
      const url1 = pid2url(res1);
      const url2 = pid2url(res2);
      const ele = document.querySelector("center > span");
      if (!ele) {
        return;
      }
      const e = document.createElement("h3");
      e.style.color = "blue";
      if (url1 || url2) {
        e.innerHTML = [
          "See Also:",
          createLink(url1, res1),
          createLink(url2, res2),
        ].join(" ");
        if (ele.parentElement) {
          ele.parentElement.insertBefore(e, ele);
        }
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {

  const result = localStorage.getItem("bzoj_json");

  if (!result) {
    fetch("https://ruanx.pw/bzojch/result.json")
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("bzoj_json", JSON.stringify(res));
        main(res);
      });
  } else {
    // using local cache
    main(JSON.parse(result));
  }

});
