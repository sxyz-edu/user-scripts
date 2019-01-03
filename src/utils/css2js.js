/* eslint-disable */

'use strict';

const fs = require('fs');
const { Transform } = require('stream');

module.exports = (headfile) => {
  const stream = new Transform({ objectMode: true });
  const template = fs.readFileSync(headfile, 'utf-8');

  stream._transform = (file, encoding, callback) => {

    const css = String(file.contents).replace(/'/g, '\\\'');
    const result = template.replace('$css$', css);
    file.contents = Buffer.from(result);

    callback(null, file);
  };

  return stream;
}
