export default function () {
  const loading = ref(false)

  const getAccessToken = async ({ code }) => {
    loading.value = true
    const fetch_response = await fetch(`/api/auth?code=` + code)
    const res = await fetch_response.json()
    const accessToken = useAccessToken()
    accessToken.value = res.access_token
    loading.value = false
  }

  return {
    loading,
    getAccessToken
  }
}