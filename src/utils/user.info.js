'use strict';

const fs = require('fs');
const { Transform } = require('stream');

module.exports = (config) => {
  const stream = new Transform({ objectMode: true });

  stream._transform = (file, encoding, callback) => {

    const script = String(file.contents);
    const tasks = [];
    for (const key in config) {
      if (Array.isArray(config[key])) {
        config[key].forEach((value) => {
          tasks.push([key, value]);
        });
      } else {
        tasks.push([key, config[key]]);
      }
    }
    const infos = tasks.map(([key, value]) => `// @${key.padEnd(15)}${value}`).join('\n');
    const result = ['// ==UserScript==', infos, '// ==/UserScript==', '', script].join('\n');
    file.contents = Buffer.from(result);

    callback(null, file);
  };

  return stream;
}
