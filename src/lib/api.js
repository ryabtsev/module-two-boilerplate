import { API_PROXY_URL, GAME } from "../constants";

function fetchData(url) {
	return fetch(url)
	.then(response => response.json())
	.then(json => new Promise((resolve, reject) => {
	if (json.status === "error") {
	reject(json.error.message);
	} else {
	resolve(json.data);
	}
	}));
}


export function loadUsers(username) {
    const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`;
    return fetchData(url);
}


export function loadUserInfo(id) {
    const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${id}`;
    return fetchData(url);
}
