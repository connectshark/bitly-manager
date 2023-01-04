<template>
  <li class="p-3 border-b border-stone-200">
    <h3 class="text-2xl text-secondary">{{ props.title || props.link }}</h3>
    <p class=" text-sm"><i class='bx bx-calendar' ></i>{{ format }}</p>
    <div class="flex items-center">
      <p class=" text-xl">{{ props.link }}</p>
      <button class="bg-stone-200 p-1 hover:text-primary/80" @click="copy()" type="button">
        <i v-if="copied" class='bx bxs-copy-alt bx-sm align-middle text-primary'></i>
        <i v-else class='bx bx-copy-alt bx-sm align-middle'></i>
      </button>
    </div>
    <div class="py-2">
      <h4 class="text-xs break-all bg-stone-200 inline-block p-1 rounded">{{ props.long_url }}</h4>
    </div>
    <slot/>
  </li>
</template>

<script setup>
const config = useRuntimeConfig()

const props = defineProps({
  created_at: String,
  link: String,
  long_url: String,
  title: String,
  id: String,
})

const format = useDateFormat(props.created_at, 'YYYY/MM/DD')

const {
  copied,
  copy
} = useClipboard({
  source: props.link,
  copiedDuring: 1000,
  legacy: config.public.IS_DEV
})
</script>