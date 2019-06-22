import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import memorystore from 'memorystore';
import helmet from 'helmet';
import https from 'https';

import { readFileSync } from 'fs';

import conf from './conf';

const server = express();
const MemoryStore = memorystore(session);

const host = 'localhost';
const port = process.env.PORT || conf.SERVER_PORT;
const day_ms = 60 * 60 * 24 * 1000;

import { apiRouter } from './api';
import { staticRouter } from './static';

import { connect } from './auth';

if (port === undefined) {
  console.error('Missing .env SERVER_PORT');
}

server.use(helmet());
server.use(
  session({
    cookie: {
      maxAge: day_ms,
      name: conf.COOKIE_NAME,
      secure: true,
    },
    resave: false,
    saveUninitialized: false,
    secret: conf.SESSION_SECRET,
    store: new MemoryStore({
      checkPeriod: day_ms,
    }),
  })
);
staticRouter(server);

server.use(bodyParser.json());
apiRouter(server);

server.post('/connect', connect);

server.use(function(req, res) {
  res.send('404');
});

// openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.pem -config req.cnf -sha256
https
  .createServer(
    {
      key: readFileSync('ssl/server.key'),
      cert: readFileSync('ssl/server.cert'),
    },
    server
  )
  .listen(port, host, () => {
    console.info(`server listen on ${port}`);
  });
