/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// const loader = require('./modules/loader.js')
	import loadUsers from './modules/loader'

	const API_PROXY_URL = 'http://188.166.73.133/wg-api'
	const GAME = 'wot'

	// -- module: loader
	// function loadUsers(username) {
	//   const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`
	//   return fetch(url)
	//     .then(resp => resp.json())
	//     .then(jsonData => jsonData.data)
	// }

	function loadSingleUser(id) {
	  const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${id}`
	  return fetch(url)
	    .then(resp => resp.json())
	    .then(jsonData => jsonData.data[id])
	}

	// -- module: renderHelpers
	function renderSpinner(targetNode) {
	  const domNode = document.createElement('div')
	  domNode.setAttribute('class', 'spinner')
	  targetNode.innerHTML = ''
	  targetNode.appendChild(domNode)
	}

	function highlightResultsItem(item) {
	  const items = document.querySelectorAll('.js-result-item')
	  Array.from(items).forEach((elem) => {elem.style.fontWeight = 'normal'})
	  item.style.fontWeight = 'bold'
	}

	// -- module: templater
	function templateResultItem({account_id, nickname}) {
	  const tmpl = `
	  <div class="profile_data js-result-item" data-id=${account_id}>
	    ${nickname}
	  </div>
	  `
	  return tmpl
	}

	function templateUserDetails(userData) {
	  const tmpl = `
	  <div class="foo">
	    nickname: ${userData['nickname']}
	      <br />
	    created_at: ${userData['created_at']}
	  </div>
	  `
	  return tmpl
	}

	// -- module: renderer
	function renderSearchResult(html) {
	  const resultHolder = document.querySelector('.search-results')
	  resultHolder.innerHTML = html
	  for (item of document.getElementsByClassName('js-result-item')) {
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

	function renderUser(html) {
	  const userInfoHolder = document.querySelector('.item-details')
	  userInfoHolder.innerHTML = html
	}

	// -- module: main
	function handleError(e) {
	  console.log(e)
	}

	document.addEventListener('DOMContentLoaded', () => {
	  const username = document.getElementById('username').value
	  const searchButton = document.getElementById('search')
	  const searchResults = document.getElementsByClassName('search-results')[0]

	  searchButton.addEventListener('click', () => {
	    renderSpinner(searchResults);
	    loadUsers(username)
	      .then(users => renderSearchResult(users.map(templateResultItem).join('')))
	      .catch(e => handleError(e))
	  })
	})


/***/ }
/******/ ]);