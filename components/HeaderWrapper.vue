<template>
  <header class=" bg-primary text-white">
    <div class="w-11/12 mx-auto max-w-7xl flex flex-wrap items-center py-8">
      <h1 class="text-2xl mr-auto">
        <NuxtLink to="/">{{ config.title }}</NuxtLink>
      </h1>
      <nav class="ml-auto text-md">
        <ul>
          <li v-if="token && $route.fullPath === '/dashboard'">
            <button @click="signout" class="text-white hover:underline" type="button">登出</button>
          </li>
          <li v-else>
            <NuxtLink class="text-white hover:underline" to="/dashboard">後台</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const config = useAppConfig()
const token = useAccessToken()

const signout = () => {
  token.value = ''
  navigateTo('/')
}
</script>