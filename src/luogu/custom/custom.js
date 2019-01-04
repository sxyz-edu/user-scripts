// This is the configs script to luogu.user.js
// You can modify these configs in order to fit your aesthetic.
// We will not update this file unless we published a major update.

// ========== CONFIG START ==========

// Background Image
const background = 'https://gallery.swwind.me/2018-08/12.jpg';
// Card Opacity
const opacity = 0.75;

// =========== CONFIG END ===========

// do not modify codes blow

const css = `
:root {
  --lg-wallpaper: url(${background});
  --lg-opacity: ${opacity};
}
`;

const node = document.createElement('style');
node.type = 'text/css';
node.appendChild(document.createTextNode(css));
const heads = document.getElementsByTagName('head');
if (heads.length > 0) {
  heads[0].appendChild(node);
} else {
  document.documentElement.appendChild(node);
}

/* eslint capitalized-comments: 0 */
