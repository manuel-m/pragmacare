import { verify } from './auth';
import { get_tasks } from './api/tasks';

export function apiRouter(server) {
  server.get('/api/tasks', verify, get_tasks);
}
