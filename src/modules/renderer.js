export function renderUser(html) {
  let userInfoHolder = document.querySelector('.item-details')
  userInfoHolder.innerHTML = html
}

export function renderSearchResult(html) {
  let resultHolder = document.querySelector('.search-results')
  resultHolder.innerHTML = html
}
