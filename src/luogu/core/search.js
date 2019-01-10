/**
 * Extended search tool
 */

/* global show_alert */

const search = (txt) => {

  if (!txt) {
    show_alert('F**k you', 'Don\'t touch me if you even didn\'t know how to use the keyboard!');
  } else if ((/^u:/i).test(txt)) {
    // search user
    const uid = txt.slice(2);
    if (!uid) {
      // no input
      show_alert('F**k you', 'What have you typed???<br>Are you idiot???');

      return;
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
            show_alert('F**k you', 'Is this user REALLY EXIST???<br>Are you noob???');
          } else {
            window.location.href = `/space/show?uid=${res.more.uid}`;
          }
        })
        .catch((err) => {
          console.error(err);

          return show_alert('F**k you', 'Did you connect to the Internet???<br>Play your f**king dinosaur!!!');
        });
    }
  } else if ((/^(?:\d+|P\d+|CF\d+[A-Z]|SP\d+|AT\d+|UVA\d+)$/i).test(txt)) {
    // is a pid
    window.location.href = `/problemnew/show/${txt}`;
  } else {
    // search it
    window.location.href = `/problemnew/lists?name=${txt}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {

  if (window.location.pathname === '/') {
    // is home page
    // replace the element
    const btn = document.querySelector('[name=goto]');
    const nbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(nbtn, btn);

    nbtn.textContent = '搜索';
    nbtn.addEventListener('click', (e) => {
      // prevent default listener
      e.stopImmediatePropagation();
      const txt = document.querySelector('[name=toproblem]').value;
      search(txt);
    });

    const input = document.querySelector('[name=toproblem]');
    const ninput = input.cloneNode(true);
    input.parentNode.replaceChild(ninput, input);
    ninput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const txt = e.target.value;
        search(txt);
      }
    });
  }

  const bindSearchBar = () => {
    const sbt = document.querySelector('.search-wrap input');
    if (sbt) {
      const nsbt = sbt.cloneNode(true);
      sbt.parentNode.replaceChild(nsbt, sbt);

      nsbt.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const txt = e.target.value;
          search(txt);
        }
      });
    } else {
      setTimeout(bindSearchBar, 500);
    }
  }
  setTimeout(bindSearchBar, 500);

});
