/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./web/main.ts')
      .end();
    config.resolve.alias.set('@', path.join(__dirname, './web'));
  }
};
