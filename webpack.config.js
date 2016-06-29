const webpack = require('webpack')
const path = require('path')
const validate = require('webpack-validator')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const parts = require('./webpack.parts')

const PORTS = {
  devServer: 3000
}

const PATHS = {
  build: path.join(__dirname, 'build'),
  modules: path.join(__dirname, 'node_modules'),
  publicPath: `http://localhost:${PORTS.devServer}/`,
  src: path.join(__dirname, 'src')
}

const ENTRIES = {
  dev: [ PATHS.src ],
  prod: PATHS.src
}

// Common config to all of our webpack builds, we can extend or modify it
// using merge (see below)
const common = {
  output: {
    path: PATHS.build,
    filename: 'mantecao.js',
    publicPath: PATHS.publicPath
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        include: PATHS.src,
        exclude: PATHS.modules,
        loader: 'babel-loader', /* Converts ES6 to JS */
        query: {
          cacheDirectory: true
        }
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: PATHS.src
      }
    ]
  },

  resolve: {
    // Include the node_modules folder in the root path
    root: [
      path.join(__dirname, 'src')
    ],
    modulesDirectories: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mantecao'
    })
  ]
}

var config

// Here is where we modify our config based on which npm process started it
switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        entry: ENTRIES.prod,
        devtool: 'source-map'
      }
    )
    break

  default:
    config = merge(
      common,
      { entry: ENTRIES.dev },
      { devtool: 'eval-source-map' },
      parts.devCSS(PATHS.src),
      parts.devServer({
        host: 'localhost',
        port: PORTS.devServer
      })
    )
}

module.exports = validate(config)
