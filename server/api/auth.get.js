const BASE_URL = import.meta.env.NUXT_API_URL
const REDIRECT_URL = import.meta.env.NUXT_REDIRECT_URL
const CLIENT_ID = import.meta.env.NUXT_CLIENT_ID
const CLIENT_SECRET = import.meta.env.NUXT_CLIENT_SECRET

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event)
  const form = new URLSearchParams({
    client_id: CLIENT_ID,
    code: code,
    redirect_uri: REDIRECT_URL,
    grant_type: 'authorization_code',
    client_secret: CLIENT_SECRET
  })
  const fetch_response = await fetch(BASE_URL + '/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    },
    body: form
  })
  const res = await fetch_response.json()
  return res
})