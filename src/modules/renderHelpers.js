export function renderSpinner(targetNode) {
  let domNode = document.createElement('div')
  domNode.setAttribute('class', 'spinner')
  targetNode.innerHTML = ''
  targetNode.appendChild(domNode)
}

export function highlightResultsItem(item) {
  let items = document.querySelectorAll('.js-result-item')
  Array.from(items).forEach((elem) => {elem.style.fontWeight = 'normal'})
  item.style.fontWeight = 'bold'
}
