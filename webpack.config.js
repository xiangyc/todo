const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.join(__dirname,'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'dist')
  },
  module:{
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.css$/,
        loader: "css-loader"
      }
    ]
  },
  mode: 'development', // 设置mode
  plugins: [
    new VueLoaderPlugin()
  ]
}