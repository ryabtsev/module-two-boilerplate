export function templateResultItem({accountId, nickname}) {
  let tmpl = `
  <div class="profile_data js-result-item" data-id=${accountId}>
    ${nickname}
  </div>
  `
  return tmpl
}

export function templateUserDetails(userData) {
  const createdAt = userData.created_at // jshint ignore:line
  const tmpl = `
  <div class="foo">
    nickname: ${userData.nickname}
      <br />
    created_at: ${createdAt}
  </div>
  `
  return tmpl
}
