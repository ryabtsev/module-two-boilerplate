//
// const API_PROXY_URL = 'http://188.166.73.133/wg-api'
// const GAME = 'wot'
//
// // -- module: loader
// export default function loadUsers(username) {
//   const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`
//   return fetch(url)
//     .then(resp => resp.json())
//     .then(jsonData => jsonData.data)
// }
//
// function loadSingleUser(id) {
//   const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${id}`
//   return fetch(url)
//     .then(resp => resp.json())
//     .then(jsonData => jsonData.data[id])
// }
//
// // module.exports = loadUsers
