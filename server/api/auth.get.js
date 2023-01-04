export default defineEventHandler(async (event) => {
  const { code } = getQuery(event)
  const runtimeConfig = useRuntimeConfig()
  
  const form = new URLSearchParams({
    client_id: runtimeConfig.public.CLIENT_ID,
    code: code,
    redirect_uri: runtimeConfig.public.REDIRECT_URL,
    grant_type: 'authorization_code',
    client_secret: runtimeConfig.CLIENT_SECRET
  })
  const fetch_response = await fetch(runtimeConfig.BASE_URL + '/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    },
    body: form
  })
  const res = await fetch_response.json()
  return sendRedirect(event, '/callback?token=' + res.access_token)
})