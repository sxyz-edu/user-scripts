/**
 * Provide direct data download link
 */

const elem = [ document.querySelector('title+center')
  , document.querySelector('div.content+center')];
const pid = Number(location.href.split('=')[1]);

elem.forEach((el) => {
  if (el) {
    el.innerHTML += `[<a href="https://lydsy.download/archive/${pid}.zip">Download</a>]`;
  }
});
