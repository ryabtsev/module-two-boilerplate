/* global document */

export function renderUser(html) {
  const userInfoHolder = document.querySelector('.item-details');
  userInfoHolder.innerHTML = html;
}

export function renderSearchResult(html) {
  const resultHolder = document.querySelector('.search-results');
  resultHolder.innerHTML = html;
}
