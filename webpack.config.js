const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'mantecao.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mantecao',
    libraryTarget: 'var'
  },
  externals: [
    '@resmio/rollico',
    'react',
    'react-dom',
    'react-event-listener',
    'glamor',
    'styled-components'
  ],
   module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}
