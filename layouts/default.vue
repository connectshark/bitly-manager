<template>
  <header class="bg-stone-50">
    <div class="w-11/12 mx-auto max-w-xl flex flex-wrap items-center">
      <h1 class="text-2xl leading-loose mr-auto">{{ config.title }}</h1>
      <nav class="ml-auto bg-stone-600 px-40">
        <ul>
          <li>
            <NuxtLink class=" text-primary hover:underline" to="/login">登入</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main class="w-11/12 mx-auto max-w-xl">
    <slot/>
  </main>
  <footer class=" text-center bg-stone-500">
    <p class=" text-2xl leading-loose text-stone-50">Thanks</p>
  </footer>
</template>

<script setup>
const config = useAppConfig()
</script>