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
    .then(response => {
        return response.json()
    })
    .then(json => new Promise((resolve, reject) => {
      if(json.status === 'error') {
        reject(json.error.message)
      } else {
        resolve(json.data)
      }
    }))
}

function loadUserInfo(id) {
  const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${id}`
  // create request to the url and return a promise
  return fetch(url)
    .then(response => {
        return response.json()
    })
    .then(json => new Promise((resolve, reject) => {
      if(json.status === 'error') {
        reject(json.error.message)
      } else {
        resolve(json)
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
  tpl = `<div class="search-results_item js-account_link" data-id=${account_id}><a href=#>${nickname}</a></div>`
  return tpl
}


function handleShowUserInfo(e) {
  e.preventDefault()
  const accountInfo = document.getElementsByClassName('account-info')[0]
  console.log('get info')
  renderSpinner(accountInfo)
  document.getElementsByClassName('js-account_link')
  const links = document.getElementsByClassName('js-account_link')
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('search-results_item-active')
  }
  this.classList.add('search-results_item-active')
  loadUserInfo(this.dataset.id).then(json => {
    console.log(json)
    const info = json.data[this.dataset.id]
    console.log(info);
    accountInfo.innerHTML = `
    <div>account_id ${info.account_id}</div>
    <div>global_rating ${info.global_rating}</div>
    <div>statistics.trees_cut ${info.statistics.trees_cut}</div>
    <div>max_xp ${info.statistics.all.max_xp}</div>
    <div>xp ${info.statistics.all.xp}</div>
    <div>battles ${info.statistics.all.battles}</div>
    `
  }).catch(errorMessage => {
    accountInfo.innerHTML = errorMessage
  })
  return false
}

function handleSearch() {
  const input = document.getElementById('username');
  const results = document.getElementsByClassName('search-results')[0]
  renderSpinner(results)
  loadUsers(input.value).then(accounts => {
    const html = accounts.map(renderSearchResult).join('')
    results.innerHTML = html

    const links = document.getElementsByClassName('js-account_link')
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', handleShowUserInfo)
    }
  }).catch(errorMessage => {
    results.innerHTML = errorMessage
  })

}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('search')
  button.addEventListener('click', handleSearch)
})
