<template>
  <NuxtLayout>
    <section class="w-11/12 mx-auto max-w-7xl bg-white mb-10">
      <p v-if="userLoading" class="p-3 text-center"><i class='bx bx-loader bx-spin bx-md' ></i></p>

      <h2 class="p-4  border-b border-stone-200">
        <span class="text-2xl font-bold">{{ user.name }}</span>
        <span class="ml-4 text-stone-600">{{ user.login }}</span>
      </h2>
    </section>
    <section class="w-11/12 mx-auto max-w-7xl bg-white">
      <h2 class="p-4  border-b border-stone-200">
        <span class="text-2xl font-bold">Your Groups</span>
        <span class="ml-4 text-stone-600">{{ groupId }}</span>
      </h2>
      <ul>
        <li v-if="loading" class="p-3 text-center"><i class='bx bx-loader bx-spin bx-md' ></i></li>
        <li class="p-3" v-for="link in links" :key="link.id">
          <h3 class=" text-2xl text-secondary">
            <NuxtLink :to="`/link/` + link.id">{{ link.id }}</NuxtLink>
          </h3>
          <p class=" text-sm">{{ link.title }}</p>
          <p>{{ getTime(link.created_at) }}</p>
        </li>
      </ul>
    </section>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

const getTime = (time) => {
  return useDateFormat(time, 'M/D HH:mm')
}

const {
  loading,
  groupId,
  links
} = useGroup()

const {
  loading: userLoading,
  user
} = useUser()
</script>