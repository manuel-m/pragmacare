export function connect(req, res) {
  const { login, passwd } = req.body;
  const connected = true; // [!] always true (dev mode)

  if (connected === true) {
    req.session.connected = login;
  }

  res.send({
    login,
    connected,
  });
}

export function verify(req, res, next) {
  if (req.session.connected === undefined) {
    res.status(401).send('');
  } else {
    next();
  }
}
