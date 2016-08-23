import { loadUsers, loadUserInfo } from './api';
import { renderSpinner, renderSearchResult, renderUserInfo } from './views';


export function handleShowUserInfo(e) {
    e.preventDefault();
    const accountInfo = document.getElementsByClassName('account-info')[0];
    renderSpinner(accountInfo);
    document.getElementsByClassName('js-account_link');
    const links = document.getElementsByClassName('js-account_link');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('search-results_item-active');
    }
    this.classList.add('search-results_item-active');
    loadUserInfo(this.dataset.id).then(data => {
        const info = data[this.dataset.id];
        accountInfo.innerHTML = renderUserInfo(info);
    }).catch(errorMessage => {
        accountInfo.innerHTML = errorMessage;
    });
    return false;
}

export function handleSearch() {
    const input = document.getElementById('username');
    const results = document.getElementsByClassName('search-results')[0];
    renderSpinner(results);
    loadUsers(input.value).then(accounts => {
        const html = accounts.map(renderSearchResult).join('');
        results.innerHTML = html;
        const links = document.getElementsByClassName('js-account_link');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', handleShowUserInfo);
        }
    }).catch(errorMessage => {
        results.innerHTML = errorMessage;
    });
}
