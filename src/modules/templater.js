export function templateResultItem({account_id, nickname}) {
  let tmpl = `
  <div class="profile_data js-result-item" data-id=${account_id}>
    ${nickname}
  </div>
  `
  return tmpl
}

export function templateUserDetails(userData) {
  const tmpl = `
  <div class="foo">
    nickname: ${userData['nickname']}
      <br />
    created_at: ${userData['created_at']}
  </div>
  `
  return tmpl
}
