<template>
  <NuxtLayout name="login">
    <div v-if="err" class=" w-5/6 mx-auto">
      <p class=" text-center text-stone-600 mb-5">有點問題!</p>
      <NuxtLink class="bg-white rounded-lg p-3 block mb-5 shadow-md hover:shadow-xl transition" to="/login">
        <i class='bx bx-chevron-left bx-sm inline-block align-middle'></i>
        <span class=" align-middle inline-block">重新登入</span>
      </NuxtLink>
      <NuxtLink class="bg-white rounded-lg p-3 block shadow-md hover:shadow-xl transition" to="/">
        <i class='bx bx-chevron-left bx-sm inline-block align-middle'></i>
        <span class=" align-middle inline-block">回首頁</span>
      </NuxtLink>
    </div>
    <template v-else>
      <h1 class="text-xl text-center mb-6">登入中<i class='bx bx-loader bx-spin' ></i></h1>
      <p class="text-center text-stone-600">登入完成會自動跳轉</p>
    </template>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const code = route.query.code

const {
  loading,
  err
} = useAuth(code)


const accessToken = useAccessToken()
watch(accessToken, value => {
  if (value !== '' || value !== undefined) {
    setTimeout(() => {
      navigateTo({
        path: '/dashboard',
        replace: true
      })
    }, 1000)
  }
})
</script>