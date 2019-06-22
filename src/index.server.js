import express from 'express';
import session from 'express-session';
import memorystore from 'memorystore';
import helmet from 'helmet';

import conf from './conf';

const server = express();
const MemoryStore = memorystore(session);

const host = 'localhost';
const port = process.env.PORT || conf.SERVER_PORT;
const day_ms = 60 * 60 * 24 * 1000;

import { apiRouter } from './api';
import { staticRouter } from './static';

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

apiRouter(server);
staticRouter(server);

server.use(function(req, res) {
  res.send('404');
});

server.listen(port, host, () => {
  console.info(`server listen on ${port}`);
});
