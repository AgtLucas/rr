const path = require('path')

module.exports = {
  entry: {
    simple: './src/simple/simpleRoot.js'
  },
  output: {
    path: path.join(__dirname, 'bundleOutputs'),
    filename: '[name].js'
  }
}
