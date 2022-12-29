<template>
  <HeaderWrapper/>
  
  <main class="bg-primary py-10">
    <div class="w-11/12 mx-auto max-w-7xl text-white">
      <slot/>
    </div>
  </main>
  <section class="w-11/12 mx-auto max-w-7xl">
    <ul class="grid lg:grid-cols-3 gap-10 py-10">
      <li class="border border-primary/30 rounded-lg p-8 text-stone-600" v-for="point in points">
        <div class=" text-center py-10">
          <i class='bx  bx-md' :class="point.icon"></i>
        </div>
        <h3 class=" text-lg font-bold mb-5">{{ point.title }}</h3>
        <p class="text-stone-600/70">{{ point.content }}</p>
      </li>
    </ul>
  </section>
  <FooterWrapper/>
</template>

<script setup>
const points = [
  {
    icon: 'bxl-graphql',
    title: 'Fast and Furious',
    content: 'Optimized with code-splitting, tree-shaking, optimized cold-start, link prefetching, payload extraction, just to name a few. Fast by default so you can focus on building.'
  },
  {
    icon: 'bxl-wordpress',
    title: 'On-demand Rendering',
    content: 'Decide what rendering strategy at the route level: SSR, SSG, CSR, ISR, ESR, SWR. Build any kind of website or web application with optimized performance in mind.'
  },
  {
    icon: 'bxs-dog',
    title: 'SEO & Web Vitals',
    content: 'By leveraging server-side rendering, ESM format and optimized images, Nuxt websites are indexable by search engines while giving the feeling of an app to the end-users.'
  }
]
</script>