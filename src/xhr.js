import axios from 'axios';

export async function get(uri) {
  const res = await axios
    .get(uri)
    .then(function(data) {
      return data;
    })
    .catch(console.error);
  return res;
}

export async function post(uri, payload) {
  const res = await axios
    .post(uri, payload)
    .then(function(data) {
      return data;
    })
    .catch(console.error);
  return res;
}
