<template>
  <NuxtLayout>
    <h1>Hello</h1>
    <div>
      <p>
        <a :href="link">登入</a>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig()
const CLIENT_ID = config.public.CLIENT_ID
const REDIRECT_URL = config.public.REDIRECT_URL
const link = `https://bitly.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`
</script>