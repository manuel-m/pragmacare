import run from 'rollup-plugin-run';

import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';

const external = [
  'body-parser',
  'dotenv',
  'express',
  'express-session',
  'fs',
  'helmet',
  'memorystore',
];

export default [
  {
    input: 'src/index.app.js',
    output: {
      file: 'build/app.js',
      format: 'iife',
      interop: false,
    },
    external,
    plugins: [
      resolve({ jsnext: true, preferBuiltins: true, browser: true }),
      common(),
    ],
  },
  {
    input: 'src/index.server.js',
    output: {
      file: 'build/server.js',
      format: 'cjs',
      interop: false,
    },
    external,
    plugins: [run()],
  },
];
