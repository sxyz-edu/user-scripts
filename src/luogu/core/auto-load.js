/**
 * load comments automatically in discuss pages
 */

const shouldLoad = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const height = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  return scrollTop + 2000 > height && scrollTop + 1800 < height;
}

document.addEventListener('DOMContentLoaded', () => {

  if (!(/^\/discuss\/show\/\d+$/).test(window.location.pathname)) {
    // this is not a discuss page
    return;
  }

  const match = (/page=(\d+)/i).exec(window.location.href);
  const pathname = window.location.pathname;
  let page = 1;
  if (match) {
    page = Number(match[1]);
  }

  // only works on page 1
  if (page === 1) {
    let loading = false;
    const loadcomments = (page) => {
      loading = true;
      fetch(`${pathname}?page=${page}`)
        .then((res) => res.text())
        .then((res) => {
          const regex = /<article[\s\S]*?<\/article>/ig;
          let result = regex.exec(res);
          while (result = regex.exec(res)) {
            loading = false;
            const articles = document.querySelectorAll('article');
            const last = articles[articles.length - 1];
            last.outerHTML += result[0];
          }
        })
        .catch((err) => {
          // some network error...
          loading = false;
          console.error(err);
        });
    }
    window.addEventListener('scroll', () => {
      if (shouldLoad() && !loading) {
        loadcomments(++page);
      }
    });
    const nav = document.querySelector('.pagination-centered');
    if (nav) {
      nav.remove();
    }
  }

});

/* eslint no-cond-assign: 0 */
/* eslint no-plusplus: 0 */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */