import babel from 'rollup-plugin-babel'

export default {
  input: 'src/go_api',
  moduleName: 'GoAPI',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [babel({ exclude: 'node_moduels/**' })],
  external: ['axios', 'ramda'],
}
