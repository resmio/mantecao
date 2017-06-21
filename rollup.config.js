import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';


var env = process.env.NODE_ENV
var config = {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'Mantecao',
  external: [
    'react',
    'react-dom',
    'react-event-listener',
    '@resmio/rollico/dist'
  ],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-event-listener': 'EventListener'
  },
  plugins: [
    nodeResolve({
      jsnext: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
       'process.env.NODE_ENV': JSON.stringify(env)
     })
   ]
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
