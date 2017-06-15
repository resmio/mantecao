const es2015 = require('babel-preset-es2015').buildPreset

const ENV = process.env.BABEL_ENV

// We need to disable the modules option when compiling for ES6
// This comes included in the es-2015 babel-preset
// That's why we need to disable it explicitly
module.exports = {
  presets: [
    [ es2015, {
      modules: ENV === 'es' ? false : 'commonjs'
    } ],
  ],
}
