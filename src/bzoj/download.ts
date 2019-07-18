/**
 * Provide direct data download link
 */

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname !== "/JudgeOnline/show.php" && window.location.pathname !== "/JudgeOnline/problem.php") {
    // is not a problem
    return;
  }

  const elem = [document.querySelector("title+center"), document.querySelector("div.content+center")];
  const pid = Number(location.href.split("=")[1]);

  if (pid >= 5000) {
    // 404 not found
    return;
  }

  elem.forEach((el) => {
    if (el) {
    if (pid < 3500) {
      el.innerHTML += `[<a href="https://gitlab.com/3088482189/bzojdata/raw/master/${pid}.zip">Download</a>]`;
    } else if (pid < 4500) {
      el.innerHTML += `[<a href="https://gitlab.com/3088482189/bzojdata3500-4999/raw/master/${pid}.zip">Download</a>]`;
    } else {
      el.innerHTML += `[<a href="https://gitlab.com/3088482189/bzojdata4500-/raw/master/${pid}.zip">Download</a>]`;
    }
  }
  });
});
