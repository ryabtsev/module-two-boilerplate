const API_PROXY_URL = 'http://188.166.73.133/wg-api';
const GAME = 'wot';

/* global fetch */

export function loadUsers(username) {
  const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`;
  return fetch(url)
    .then(resp => resp.json())
    .then(jsonData => jsonData.data);
}

export function loadSingleUser(id) {
  const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${id}`;
  return fetch(url)
    .then(resp => resp.json())
    .then(jsonData => jsonData.data[id]);
}
