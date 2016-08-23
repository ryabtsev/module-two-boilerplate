import {loadUsers} from './modules/loader'
import {renderSpinner} from './modules/renderHelpers'
import {templateResultItem} from './modules/templater'
import {renderSearchResult} from './modules/renderer'

require('./main.css')

// -- module: main
function handleError(e) {
  console.log(e)
}

document.addEventListener('DOMContentLoaded', () => {
  let username = document.getElementById('username').value
  let searchButton = document.getElementById('search')
  let searchResults = document.getElementsByClassName('search-results')[0]

  searchButton.addEventListener('click', () => {
    renderSpinner(searchResults);
    loadUsers(username)
      .then(users => renderSearchResult(users.map(templateResultItem).join('')))
      .catch(e => handleError(e))
  })
})
