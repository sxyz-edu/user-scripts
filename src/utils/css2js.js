/* eslint-disable */

'use strict';

const fs = require('fs');
const { Transform } = require('stream');

const template = (css) => `
const css = '${css.replace(/'/g, '\\\'')}';

const node = document.createElement('style');
node.type = 'text/css';
node.appendChild(document.createTextNode(css));
const heads = document.getElementsByTagName('head');
if (heads.length > 0) {
  heads[0].appendChild(node);
} else {
  document.documentElement.appendChild(node);
}
`

module.exports = () => {
  const stream = new Transform({ objectMode: true });

  stream._transform = (file, encoding, callback) => {

    const css = String(file.contents).replace(/'/g, '\\\'');
    const result = template(css);
    file.contents = Buffer.from(result);

    callback(null, file);
  };

  return stream;
}
