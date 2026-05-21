<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="pt-4 text-center text-sm text-light">
    <p class="mb-2">
      © {{ currentYear }} AimerFeng. 保留所有权利。
    </p>
    <p>
      使用
      <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Vue.js</a>
      与
      <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">UnoCSS</a>
      构建。
    </p>
  </footer>
</template>
