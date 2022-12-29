<template>
  <NuxtLayout name="index">
    <div class="flex flex-col gap-10 lg:flex-row items-center">
      <div class="text-center lg:text-left">
        <h2 class="font-bold text-5xl mb-5">Bitly最佳連結彙整站</h2>
        <p class="leading-loose mb-5">一站瀏覽所有連結資料，圖表示顯示各項資料，手機版本優先特性，一鍵下載各項資料</p>
        <p>
          <NuxtLink class="p-3 rounded-xl bg-secondary inline-block" to="/login">開始使用</NuxtLink>
        </p>
      </div>
      <figure class=" rounded-2xl overflow-hidden lg:w-1/2">
        <img src="../assets/img/1872.jpg" alt="cover">
      </figure>
    </div>
  </NuxtLayout>
</template>
