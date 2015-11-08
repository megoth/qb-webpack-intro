var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/index'),
  output: {
    path: __dirname,
    filename: 'index.js'
  }
};