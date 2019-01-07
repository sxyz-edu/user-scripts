'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const { Transform } = require('stream');

module.exports = (filename) => {
  const stream = new Transform({ objectMode: true });

  const config = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));

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
  const result = ['// ==UserScript==', infos, '// ==/UserScript==', ''].join('\n');
  const template = (js) => [result, js].join('\n');

  stream._transform = (file, encoding, callback) => {

    const script = String(file.contents);
    const result = template(script);
    file.contents = Buffer.from(result);

    callback(null, file);
  };

  return stream;
}
