<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-light">
    <p class="mb-2">
      © {{ currentYear }} AimerFeng. All rights reserved.
    </p>
    <p>
      Built with 
      <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Vue.js</a>
      & 
      <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">UnoCSS</a>
    </p>
  </footer>
</template>
