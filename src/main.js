const API_PROXY_URL = 'http://188.166.73.133/wg-api'

const GAME = 'wot'

/*
full API description you can find here:
https://ru.wargaming.net/developers/api_reference

you don't have to pass application_id query param.
It will be passed automatically via proxy server
*/

function loadUsers(username) {
  const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`
  // create request to the url and return a promise
  return fetch(url)
    .then(response => response.json())
    .then(json => new Promise((resolve, reject) => {
      if(json.status === 'error') {
        reject(json.error.message)
      } else {
        resolve(json.data)
      }
    }))

}

function renderSpinner(parent) {
  const domNode = document.createElement('div')
  domNode.setAttribute('class', 'spinner')
  parent.innerHTML = ''
  parent.appendChild(domNode)
}

function renderSearchResult({account_id, nickname}) {
  // render result to the node with class name `search-results`
  // Note! it's already exist. See index.html for more info.
  // Each search result item should be rendered
  // inside node with `search-results_item` class name.
  tpl = `<div class="search-results_item" data-id=${account_id}>${nickname}</div>`
  return tpl
}

function handleSearch() {
  const input = document.getElementById('username');
  const results = document.getElementsByClassName('search-results')[0]
  renderSpinner(results)
  loadUsers(input.value).then(accounts => {
    const html = accounts.map(renderSearchResult).join('')
    results.innerHTML = html
  }).catch(errorMessage => {
    results.innerHTML = errorMessage
  })

}


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('search');
  button.addEventListener('click', handleSearch)
  // add search button click handler here
})
