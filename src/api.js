import { get_tasks } from './api/tasks';

export function apiRouter(server) {
  server.get('/tasks', get_tasks);
}
