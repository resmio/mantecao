var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
	   'main':'./src/index.js'
  },
  output: {
    path: __dirname + '/dist/',
	  filename: 'mantecao.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      }],
      plugins: [
	       new webpack.optimize.OccurrenceOrderPlugin(),
	       new webpack.DefinePlugin({
	          'process.env': {
		            'NODE_ENV': JSON.stringify('production')
	          }
	       }),
	       new webpack.optimize.UglifyJsPlugin({
	          compressor: {
		            warnings: false
	          }
	       })
    ]
}
