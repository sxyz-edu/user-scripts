/**
 * Create HTML Element By these format:
 * - div.class#id content
 * @param {String} content format string
 * @returns {HTMLElement} HTML Element that you want
 */
const html = (content: string): HTMLElement => {
  const tagname = content.split(' ')[0];
  const match = Array.from(tagname.match(/(^|[.#])[\w-]+/g) || []);
  const res = document.createElement(match[0]);
  match.forEach((item) => {
    if (item.startsWith('.')) {
      res.classList.add(item.slice(1));
    }
    if (item.startsWith('#')) {
      res.id = item.slice(1);
    }
  });
  res.innerText = content.slice(tagname.length + 1);

  return res;
};

export default html;
