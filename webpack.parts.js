const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

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
