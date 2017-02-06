var path = require('path')
var glob = require('glob')
var version = require('./package.json').version

const PATHS = {
  modules: path.join(__dirname, 'node_modules'),
  src: path.join(__dirname, 'src'),
  styleguide: path.join(__dirname, 'docs')
}

module.exports = {
  defaultExample: true,
  serverPort: 3002,
  styleguideDir: 'docs', // default for gh-pages on master is /docs - so we use this as the build destination
  sections: [
    {
      name: 'Icons',
      components: function () {
        return glob.sync(path.resolve(__dirname, 'src/icons/**/*.js')).filter(function (module) {
          return /\/[A-Z]\w*\.js$/.test(module)
        })
      }
    },
    {
      name: 'Components',
      components: function () {
        return glob.sync(path.resolve(__dirname, 'src/components/**/*.js')).filter(function (module) {
          return /\/[A-Z]\w*\.js$/.test(module)
        })
      }
    }
  ],
  title: 'v' + version,
  updateWebpackConfig: function (webpackConfig, env) {
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: PATHS.src,
        exclude: PATHS.modules,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: PATHS.styleguide,
        exclude: PATHS.src,
        loader: 'style!css'
      }
    )
    // custom styles for styleguide
    webpackConfig.entry.push(path.join(PATHS.styleguide, 'style.css'))
    return webpackConfig
  }
}
