/* global document */

export function renderSpinner(targetNode) {
  const domNode = document.createElement('div');
  domNode.setAttribute('class', 'spinner');
  targetNode.innerHTML = '';
  targetNode.appendChild(domNode);
}

export function highlightResultsItem(item) {
  const items = document.querySelectorAll('.js-result-item');
  Array.from(items).forEach((elem) => { elem.style.fontWeight = 'normal'; });
  item.style.fontWeight = 'bold';
}
