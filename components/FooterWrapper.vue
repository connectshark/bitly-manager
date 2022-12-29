<template>
  <footer class="text-center border-t border-stone-300">
    <div class="w-11/12 mx-auto max-w-7xl py-8 flex flex-col gap-6 lg:flex-row justify-between">
      <div>
        <p><i class='bx bx-copyright'></i>2022 {{ config.title }} MIT License</p>
      </div>
      <ul>
        <li>
          <NuxtLink class=" text-stone-600 hover:text-stone-900" to="/dashboard">後台</NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/connectshark" target="_blank" rel="noopener noreferrer">
            <i class='bx bxl-github bx-sm'></i>
          </a>
          <a href="javascript:;" rel="noopener noreferrer">
            <i class='bx bxl-facebook bx-sm'></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const config = useAppConfig()

</script>