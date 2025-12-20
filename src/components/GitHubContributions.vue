<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
const username = 'aimerfeng'
</script>

<template>
  <section class="mb-8">
    <h2 class="section-title">
      <span class="i-carbon-logo-github mr-2" />
      GitHub 贡献
    </h2>
    
    <div class="github-contributions">
      <!-- GitHub Contribution Graph using ghchart.rshah.org -->
      <a :href="`https://github.com/${username}`" target="_blank" rel="noopener noreferrer">
        <img 
          :src="`https://ghchart.rshah.org/${isDark ? '4ade80' : '22863a'}/${username}`"
          :alt="`${username}'s GitHub Contribution Graph`"
          class="w-full rounded-lg"
          loading="lazy"
        />
      </a>
      
      <!-- GitHub Stats -->
      <div class="mt-4 flex flex-wrap gap-3 justify-center">
        <a :href="`https://github.com/${username}`" target="_blank" rel="noopener noreferrer">
          <img 
            :src="`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${isDark ? 'dark' : 'default'}&hide_border=true&bg_color=${isDark ? '00000000' : 'ffffff00'}`"
            alt="GitHub Stats"
            class="h-32"
            loading="lazy"
          />
        </a>
        <a :href="`https://github.com/${username}`" target="_blank" rel="noopener noreferrer">
          <img 
            :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${isDark ? 'dark' : 'default'}&hide_border=true&bg_color=${isDark ? '00000000' : 'ffffff00'}`"
            alt="Top Languages"
            class="h-32"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.github-contributions img {
  transition: transform 0.2s ease;
}

.github-contributions a:hover img {
  transform: scale(1.02);
}

@media print {
  .github-contributions {
    break-inside: avoid;
  }
}
</style>
