export default function () {
  const loading = ref(false)
  const config = useAppConfig()
  const token = useAccessToken()
  const user = ref({})
  const limit = ref({})

  const getUser = async () => {
    const fetch_response = await fetch(config.API_URL + '/v4/user', {
      headers: {
        Authorization: `Bearer ` + token.value
      }
    })
    const res = await fetch_response.json()
    user.value = res
  }

  const getPlatformLimit = async () => {
    const fetch_response = await fetch(config.API_URL + '/v4/user/platform_limits', {
      headers: {
        Authorization: `Bearer ` + token.value
      }
    })
    const res = await fetch_response.json()
    limit.value = res.platform_limits
  }

  onMounted(async () => {
    loading.value = true
    await getUser()
    await getPlatformLimit()
    loading.value = false
  })

  return {
    loading,
    user,
    limit
  }
}