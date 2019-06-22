import { get, post } from './xhr';

run();

async function run() {
  await post('/connect', { login: 'test', passwd: 'pass' });

  const tasks = await get('/api/tasks');
  console.log(tasks);
}
