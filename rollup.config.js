import run from 'rollup-plugin-run';

const external = [
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
      format: 'cjs',
      interop: false,
    },
    external,
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
