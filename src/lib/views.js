export function renderSpinner(parent) {
    const domNode = document.createElement('div');
    domNode.setAttribute('class', 'spinner');
    parent.innerHTML = '';
    parent.appendChild(domNode);
}


export function renderSearchResult({ account_id, nickname }) {
    const tpl = `
        <li class="search-results_item js-account_link" data-id=${account_id}>
          <a href=#>${nickname}</a>
        </li>
    `;
    return tpl;
}


export function renderUserInfo(info) {
    const tpl = `
        <div class="col-xs-6 col-sm-3 placeholder">
            <h4>${info.nickname}</h4>
            <span class="text-muted">global_rating ${info.global_rating}</span>
            <div>statistics.trees_cut ${info.statistics.trees_cut}</div>
            <div>max_xp ${info.statistics.all.max_xp}</div>
            <div>xp ${info.statistics.all.xp}</div>
            <div>battles ${info.statistics.all.battles}</div>
        </div>
    `;
    return tpl;
}
