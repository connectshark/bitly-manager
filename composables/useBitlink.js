export default function () {
  const loading = ref(false)
  const config = useAppConfig()
  const token = useAccessToken()
  const longLink = ref('')
  const result = ref({})

  const createLink = async () => {
    if (longLink.value === '') return
    loading.value = true
    const fetch_response = await fetch(config.API_URL + '/v4/bitlinks', {
      headers: {
        Authorization: `Bearer ` + token.value,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        long_url: longLink.value
      })
    })
    const res = await fetch_response.json()
    result.value = res
    longLink.value = ''
    loading.value = false
  }

  const deleteLink = async (id) => {
    loading.value = true
    const fetch_response = await fetch(config.API_URL + `/v4/bitlinks/${id}`, {
      headers: {
        Authorization: `Bearer ` + token.value
      },
      method: 'DELETE'
    })
    const res = await fetch_response.json()
    loading.value = false
  }

  return {
    createLink,
    deleteLink,
    loading,
    result,
    longLink
  }
}