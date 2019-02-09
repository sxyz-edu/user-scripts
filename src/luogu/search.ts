/**
 * Extended search tool
 */

declare function show_alert(title: string, content: string): void;

/**
 * Do search event
 * @param {String} parameter search a string
 * @returns {void} nothing
 */
const search = (parameter: string): void => {
  const txt = parameter.trim();
  if (!txt) {
    return show_alert("提示", "请输入内容");
  }

  if ((/^u:/i).test(txt)) {
    // search user
    let uid = txt.slice(2);
    uid = uid.trim();
    if (!uid) {
      // no input
      return show_alert("提示", "请输入用户名或uid");
    }
    if ((/^\d+$/g).test(uid)) {
      // direct jump
      window.location.href = `/space/show?uid=${uid}`;
    } else {
      // is a user name
      fetch(`https://www.luogu.org/space/ajax_getuid?username=${uid}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.code !== 200) {
            show_alert("好像哪里有点问题", "找不到该用户");
          } else {
            window.location.href = `/space/show?uid=${res.more.uid}`;
          }
        })
        .catch((err) => {
          console.error(err);

          return show_alert("错误", "网络超时");
        });
    }
  } else if ((/^(?:\d+|P\d+|CF\d+[A-Z]|SP\d+|AT\d+|UVA\d+)$/i).test(txt)) {
    // is a pid
    window.location.href = `/problemnew/show/${txt}`;
  } else {
    // search it
    window.location.href = `/problemnew/lists?name=${txt}`;
  }
};

/**
 * Bind search event when pressing ENTER
 * @param {HTMLInputElement} el target element
 * @returns {void} nothing
 */
const searchEvent = (el: HTMLInputElement): void => {
  el.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      const txt = target && target.value || "";
      search(txt);
    }
  });
};

/**
 * Replace default buttons
 * @returns {void} nothing
 */
const replaceBtn = (): void => {
  const btn = document.querySelector("[name=goto]");
  if (btn) {
    const nbtn = btn.cloneNode(true);
    if (btn.parentNode) {
      btn.parentNode.replaceChild(nbtn, btn);
    }

    nbtn.textContent = "搜索";
    nbtn.addEventListener("click", (e) => {
      // prevent default listener
      e.stopImmediatePropagation();
      const toproblem = document.querySelector("input[name=toproblem]") as HTMLInputElement;
      const txt = toproblem && toproblem.value || "";
      search(txt);
    });
  }

  const h2 = document.querySelector("div.lg-article.lg-index-stat > h2");
  if (h2) {
    h2.innerHTML = "<h2>搜索</h2>";
  }

  const input = document.querySelector("[name=toproblem]");
  if (input) {
    const ninput = input.cloneNode(true) as HTMLInputElement;
    ninput.placeholder = '使用 "u:" 搜索用户';

    if (input.parentNode) {
      input.parentNode.replaceChild(ninput, input);
    }
    searchEvent(ninput);
  }
};

/**
 * Replace search bar element
 * @returns {void} nothing
 */
const replaceSearchBar = (): void => {
  const searchBar = () => {
    const sbt = document.querySelector(".search-wrap input");
    if (sbt) {
      const nsbt = sbt.cloneNode(true) as HTMLInputElement;
      if (sbt.parentNode) {
        sbt.parentNode.replaceChild(nsbt, sbt);
      }

      searchEvent(nsbt);
    } else {
      setTimeout(searchBar, 500);
    }
  };
  setTimeout(searchBar, 500);
};

export default () => {
  if (window.location.pathname === "/") {
    // is home page
    replaceBtn();
  }
  replaceSearchBar();
};
