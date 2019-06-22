import { readFileSync } from 'fs';

import dotenv from 'dotenv';

const conf = {};

try {
  Object.assign(
    conf,
    dotenv.config().parsed,
    JSON.parse(readFileSync('conf.json'))
  );
} catch (err) {
  console.error('missing file conf.json');
}

export default conf;
