<template>
  <NuxtLayout name="login">
    <NuxtLink class=" bg-white rounded-lg p-3 block mb-10" to="/">
      <i class='bx bx-chevron-left bx-sm inline-block align-middle'></i>
      <span class=" align-middle inline-block">回首頁</span>
    </NuxtLink>
    <div>
      <a class="block text-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition" :href="link">
        <img class="w-8 inline-block" src="/favicon.svg" alt="favicon">
        <span class=" inline-block ml-3">登入</span>
      </a>
    </div>
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig()
const CLIENT_ID = config.public.CLIENT_ID
const REDIRECT_URL = config.public.REDIRECT_URL
const link = `https://bitly.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`
</script>