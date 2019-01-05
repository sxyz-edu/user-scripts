'use strict';

const fs = require('fs');
const { Transform } = require('stream');

const template = (js) => `
;(function () {

${js}

})();
`

module.exports = () => {
  const stream = new Transform({ objectMode: true });

  stream._transform = (file, encoding, callback) => {

    const js = String(file.contents);
    const result = template(js);
    file.contents = Buffer.from(result);

    callback(null, file);
  };

  return stream;
}
