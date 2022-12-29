export default function () {
  const loading = ref(false)
  const config = useAppConfig()
  const token = useAccessToken()
  const user = ref({})

  const getUser = async () => {
    loading.value = true
    const fetch_response = await fetch(config.API_URL + '/v4/user', {
      headers: {
        Authorization: `Bearer ` + token.value
      }
    })
    const res = await fetch_response.json()
    user.value = res
    loading.value = false
  }

  onMounted(getUser)

  return {
    loading,
    user
  }
}