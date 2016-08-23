import {renderSpinner, highlightResultsItem} from './renderHelpers'
import {loadSingleUser} from './loader'
import {templateUserDetails} from './templater'

// -- module: renderer

function renderUser(html) {
  let userInfoHolder = document.querySelector('.item-details')
  userInfoHolder.innerHTML = html
}

export function renderSearchResult(html) {
  let resultHolder = document.querySelector('.search-results')
  resultHolder.innerHTML = html
  for (let item of document.getElementsByClassName('js-result-item')) {
      item.addEventListener('click', (event) => {
        highlightResultsItem(event.target)
        renderSpinner(document.querySelector('.item-details'));
        loadSingleUser(event.target.dataset.id)
          .then(user => {
            renderUser(templateUserDetails(user))
          })
      })
  }
}
