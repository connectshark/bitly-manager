<template>
  <NuxtLayout>
    <h1>CALLBACK</h1>
    <p v-if="result">{{ result }}</p>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const code = route.query.code

const {
  result,
  getAccessToken
} = useAuth()

getAccessToken({ code })

const router = useRouter()
const accessToken = useAccessToken()
watch(accessToken, value => {
  if (value !== '') {
    router.replace('/')
  }
})
</script>