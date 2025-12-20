<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
const username = 'aimerfeng'

// 如果你自部署了 github-readme-stats，可以替换这个 URL
// 并添加 ?count_private=true 参数
// const statsBaseUrl = 'https://your-vercel-deployment.vercel.app'
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

      <!-- 提示信息 -->
      <p class="text-xs text-center mt-2 opacity-60">
        点击查看完整 GitHub 主页
      </p>
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
