export default function (code) {
  const loading = ref(false)
  const groupId = ref('')
  const links = ref([])
  const config = useAppConfig()
  const token = useAccessToken()

  const getGroupId = async () => {
    loading.value = true
    const fetch_response = await fetch(config.API_URL + '/v4/groups', {
      headers: {
        Authorization: `Bearer ` + token.value
      }
    })
    const res = await fetch_response.json()
    groupId.value = res.groups[0].guid
  }

  const getGroupLink = async (GROUP_ID) => {
    const fetch_response = await fetch(config.API_URL + `/v4/groups/${GROUP_ID}/bitlinks`, {
      headers: {
        Authorization: `Bearer ` + token.value
      }
    })
    const res = await fetch_response.json()
    links.value = res.links
    loading.value = false
  }

  onMounted(async () => {
    await getGroupId()
    await getGroupLink(groupId.value)
  })

  return {
    loading,
    groupId,
    links
  }
}