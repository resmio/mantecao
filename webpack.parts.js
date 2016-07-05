const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// ---------------------------------------------------------------------------
//  devServer task
// ---------------------------------------------------------------------------
exports.devServer = function (options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works.
      historyApiFallback: true,
      hot: true,
      inline: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      // Parse host and port from env to allow customization.
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host || '0.0.0.0',
      port: options.port // Defaults to 8080
    },
    plugins: [
      new BundleTracker({
      //   // mmmh this should be in the config and not here
      //   // but if does not work if I use options.contentBase
        filename: './build/webpack-stats.json'
      }),
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  }
}

// ---------------------------------------------------------------------------
// Clean build task
// ---------------------------------------------------------------------------
exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
    ]
  };
}

// ---------------------------------------------------------------------------
// Styles task
// ---------------------------------------------------------------------------
exports.CSS = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass'],
          include: paths,
          exclude: 'node_modules'
        }
      ]
    }
  }
}

// ---------------------------------------------------------------------------
// Set environment task
// ---------------------------------------------------------------------------
exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
}

// ---------------------------------------------------------------------------
// Extract Bundles task
// ---------------------------------------------------------------------------
exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
}

// ---------------------------------------------------------------------------
// Uglify task
// ---------------------------------------------------------------------------
exports.uglify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
}
