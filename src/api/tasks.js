const tasks = {
  data: [],
};

export function get_tasks(req, res) {
  res.send(tasks.data);
}
