const path = require('path')

module.exports = {
  entry: {
    simple: './lib/js/src/simple/simpleRoot.js'
  },
  output: {
    path: path.join(__dirname, 'bundleOutputs'),
    filename: '[name].js'
  }
}
