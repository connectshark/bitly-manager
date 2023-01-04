<template>
  <NuxtLayout>
    <section class="w-11/12 mx-auto max-w-7xl mb-10 border-b border-stone-200">
      <p v-if="userLoading" class="p-3 text-center"><i class='bx bx-loader bx-spin bx-md'></i></p>
      <h2 class="p-4">
        <span class="text-2xl font-bold">{{ user.name }}</span>
        <span class="ml-4 text-stone-600">{{ user.login }}</span>
      </h2>
    </section>
    <form class="w-11/12 mx-auto max-w-7xl bg-white mb-10" @submit.prevent="createLink()">
      <h2 class="p-4  border-b border-stone-200">
        <span class="text-2xl font-bold">新增連結</span>
      </h2>
      <div class="p-6 mb-6">
        <input required placeholder="長連結"
          class="w-full p-4 outline-none border-2 border-stone-200 focus:border-primary placeholder:text-stone-400"
          type="url" v-model="longLink" minlength="1">
      </div>
      <p class="text-center" v-if="linkLoading">
        <i class='bx bx-loader bx-spin bx-md'></i>
      </p>
      <div class="p-6" v-if="linkResult.id">
        <p class="w-full p-4 border-2 border-stone-200 bg-stone-100 text-stone-700">{{ linkResult.link }}</p>
      </div>
      <p class="p-6 text-right">
        <button class="hover:opacity-70 inline-block p-3 rounded-lg bg-primary text-white" type="submit">轉換</button>
      </p>
    </form>
    <section class="w-11/12 mx-auto max-w-7xl bg-white">
      <h2 class="p-4  border-b border-stone-200">
        <span class="text-2xl font-bold">所有連結</span>
        <span class="ml-4 text-stone-600">{{ groupId }}</span>
      </h2>
      <ul>
        <li v-if="loading" class="p-3 text-center"><i class='bx bx-loader bx-spin bx-md'></i></li>
        <LinkDetail
          v-for="link in links"
          :key="link.id"
          :created_at="link.created_at"
          :link="link.link"
          :long_url="link.long_url"
          :title="link.title"
          :id="link.id"
        >
          <div class="py-2">
            <button class=" bg-stone-200 p-1" @click="deleteLink(link.id)" type="button">刪除</button>
          </div>
        </LinkDetail>
      </ul>
    </section>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

const {
  createLink,
  longLink,
  loading: linkLoading,
  result: linkResult,
  deleteLink
} = useBitlink()

const {
  loading,
  groupId,
  links,
  reload
} = useGroup()

const {
  loading: userLoading,
  user
} = useUser()

watch(linkLoading, value => {
  if (!value) {
    reload()
  }
})
</script>