export default function (code) {
  const loading = ref(false)
  const err = ref(false)

  const getAccessToken = async () => {
    loading.value = true
    const fetch_response = await fetch(`/api/auth?code=` + code)
    const res = await fetch_response.json()
    const accessToken = useAccessToken()
    accessToken.value = res.access_token
    loading.value = false
  }

  if (code) {
    getAccessToken()
  } else {
    err.value = true
  }

  return {
    loading,
    err
  }
}