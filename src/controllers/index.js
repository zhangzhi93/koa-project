'use strict'

const fs = require('fs');

const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js');

console.log(files);

const controllers = {};

for (const file of files) {
  console.log(file);
  if (file.toLowerCase().endsWith('js')) {
    const controller = require(`./${file}`)
    controllers[`${file.replace(/\.js/, '')}`] = controller
  }
}

module.exports = controllers
