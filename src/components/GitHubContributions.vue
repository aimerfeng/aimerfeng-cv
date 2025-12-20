<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
const username = 'aimerfeng'

// 你自部署的 github-readme-stats
const statsBaseUrl = 'https://github-readme-stats-4gttgrkur-aimerfengli-2226s-projects.vercel.app'
</script>

<template>
  <section class="mb-8">
    <h2 class="section-title flex items-center gap-2">
      <span class="i-carbon-logo-github" />
      GitHub 贡献
    </h2>

    <div class="github-contributions">
      <!-- GitHub Contribution Graph (绿墙) -->
      <a
        :href="`https://github.com/${username}`"
        target="_blank"
        rel="noopener noreferrer"
        class="block"
      >
        <img
          :src="`https://ghchart.rshah.org/${isDark ? '4ade80' : '22863a'}/${username}`"
          :alt="`${username}'s GitHub Contribution Graph`"
          class="w-full rounded-lg"
          loading="lazy"
        />
      </a>

      <!-- GitHub Stats (使用自部署版本，包含私有仓库) -->
      <div class="mt-4 flex flex-wrap gap-3 justify-center">
        <a :href="`https://github.com/${username}`" target="_blank" rel="noopener noreferrer">
          <img
            :src="`${statsBaseUrl}/api?username=${username}&show_icons=true&count_private=true&include_all_commits=true&theme=${isDark ? 'dark' : 'default'}&hide_border=true&bg_color=${isDark ? '00000000' : 'ffffff00'}`"
            alt="GitHub Stats"
            class="h-36"
            loading="lazy"
          />
        </a>
        <a :href="`https://github.com/${username}`" target="_blank" rel="noopener noreferrer">
          <img
            :src="`${statsBaseUrl}/api/top-langs/?username=${username}&layout=compact&count_private=true&theme=${isDark ? 'dark' : 'default'}&hide_border=true&bg_color=${isDark ? '00000000' : 'ffffff00'}`"
            alt="Top Languages"
            class="h-36"
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
