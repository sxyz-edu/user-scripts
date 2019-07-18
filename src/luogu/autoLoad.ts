/**
 * Load comments automatically in discuss pages
 */

/**
 * Check if scrolltop is need to load comments
 * @returns {Boolean} true if need to be loaded
 */
const shouldLoad = (): boolean => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const height = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  return scrollTop + 2000 > height && scrollTop + 1800 < height;
};

export default () => {
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
  if (page > 1) {
    return;
  }

  let loading = false;
  const loadcomments = (now: number): void => {
    loading = true;
    fetch(`${pathname}?page=${now}`)
      .then((res) => res.text())
      .then((res) => {
        const regex = /<article[\s\S]*?<\/article>/gi;
        (res.match(regex) || []).slice(1).forEach((result) => {
          loading = false;
          const articles = document.querySelectorAll('article');
          const last = articles[articles.length - 1];
          last.outerHTML += result;
        });
      })
      .catch((err) => {
        // some network error...
        loading = false;
        console.error(err);
      });
  };
  window.addEventListener('scroll', () => {
    if (shouldLoad() && !loading) {
      loadcomments(++page);
    }
  });
  const nav = document.querySelector('.pagination-centered');
  if (nav) {
    nav.remove();
  }
};
