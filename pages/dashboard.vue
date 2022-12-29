<template>
  <NuxtLayout>
    <section class="w-11/12 mx-auto max-w-7xl bg-white">
      <h2 class="p-4 text-2xl font-bold border-b border-stone-200">Your Groups</h2>
      <ul>
        <li v-if="loading" class="p-3 text-center"><i class='bx bx-chevron-left bx-sm'></i></li>
        <li class="p-3" v-for="id in groupId" :key="id">
          <NuxtLink class=" text-secondary" :to="`/group/` + id">{{ id }}</NuxtLink>
        </li>
      </ul>
    </section>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

const {
  loading,
  groupId
} = useGroup()

</script>