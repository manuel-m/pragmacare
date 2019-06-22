import { readFileSync } from 'fs';

const index_html = readFileSync('index.html').toString();
const app_js = readFileSync('build/app.js').toString();

export function staticRouter(server) {
  server.get('/', function(req, res) {
    res.send(index_html);
  });

  server.get('/app.js', function(req, res) {
    res.contentType('application/javascript');
    res.send(app_js);
  });

  server.get('/app.css', function(req, res) {
    res.contentType('text/css');
    res.send('');
  });
}
