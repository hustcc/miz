import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import size from 'rollup-plugin-size';

module.exports = [{
  input: 'src/index.ts',
  output: {
    file: 'dist/miz.min.js',
    name: 'miz',
    format: 'umd',
    sourcemap: false,
  },
  plugins: [
    resolve(),
    typescript(),
    uglify(),
    size(),
  ],
}];
