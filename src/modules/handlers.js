import {loadUsers, loadSingleUser} from './loader'
import {renderSpinner, highlightResultsItem} from './renderHelpers'
import {templateResultItem, templateUserDetails} from './templater'
import {renderSearchResult, renderUser} from './renderer'


function handleError(e) {
  console.log(e)
}

function initSearchResultClick() {
  for (let item of document.getElementsByClassName('js-result-item')) {
      item.addEventListener('click', (event) => {
        highlightResultsItem(event.target)
        renderSpinner(document.querySelector('.item-details'));
        loadSingleUser(event.target.dataset.id)
          .then(user => {
            renderUser(templateUserDetails(user))
          })
          .catch(e => handleError(e))
      })
  }
}

export function initSearchButtonClick() {
  let username = document.getElementById('username').value
  let searchButton = document.getElementById('search')
  let searchResults = document.getElementsByClassName('search-results')[0]

  searchButton.addEventListener('click', () => {
    renderSpinner(searchResults);
    loadUsers(username)
      .then(users => renderSearchResult(users.map(templateResultItem).join('')))
      .then(initSearchResultClick)
      .catch(e => handleError(e))
  })
}
