/**
 * Display a check mark if you solved this problem
 */

import getProblemList from './getProblemList';

document.addEventListener('DOMContentLoaded', () => {
  const e = document.querySelector('div.right.menu > a');
  if (e === null) {
    // if the current user is not logged in yet
    return;
  }

  const url = e.attributes[0].value;
  // eslint-disable-next-line no-extra-parens
  const uid = ((/\/user\/(\w+)/i).exec(url) as RegExpExecArray)[1];

  const pidMatch = (/\/problem\/(\w+)/i).exec(window.location.href);
  if (!pidMatch) {
    // this is not a problem page
    return;
  }
  const pid = Number(pidMatch[1]);

  getProblemList(uid).then((data) => {
    const passedlist = new Set(data.passedlist);
    const AC = passedlist.has(pid);
    const ele = document.querySelector('.ui.center.aligned.grid') as HTMLElement;
    const span = document.createElement('span');
    span.setAttribute('class', 'ui label');
    span.innerHTML =
      `通过情况：
      <span class="status ${AC ? 'accepted' : 'wrong_answer'}">
      ${AC ? 'Accepted' : 'Unaccepted'}
      </span>`;
    ele.childNodes[7].appendChild(span);
  });
});
