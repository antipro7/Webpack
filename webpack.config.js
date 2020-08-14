const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  }
}