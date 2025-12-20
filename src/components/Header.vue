<script setup lang="ts">
const socialLinks = [
  { icon: 'i-carbon-logo-github', url: 'https://github.com/aimerfeng', title: 'GitHub' },
  { icon: 'i-carbon-logo-x', url: 'https://x.com/aimer71976', title: 'X (Twitter)' },
  { icon: 'i-carbon-email', url: 'mailto:2002lihaoran@gmail.com', title: 'Email' },
  { icon: 'i-carbon-chat', url: '#', title: '微信: aimerfengllilu', isWeChat: true },
]
</script>

<template>
  <header class="mb-12">
    <!-- Name and Location -->
    <div class="flex items-center gap-4 mb-4">
      <h1 class="text-3xl font-bold">AimerFeng</h1>
      <span class="text-light">/ 李浩然</span>
    </div>
    
    <div class="flex items-center gap-2 text-light mb-4">
      <div class="i-carbon-location" />
      <span>成都, 中国</span>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">前端工程师</span>
      <span class="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">Node.js</span>
      <span class="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm">区块链工程师</span>
      <span class="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm">深度学习</span>
    </div>

    <!-- Bio -->
    <p class="text-light mb-6 italic">
      "从每一次的Spec都是我和代码的美好邂逅"
    </p>

    <!-- Social Links -->
    <div class="flex items-center gap-4">
      <template v-for="link in socialLinks" :key="link.url">
        <a
          v-if="!link.isWeChat"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-btn"
          :title="link.title"
        >
          <div :class="link.icon" class="text-xl" />
        </a>
        <div
          v-else
          class="icon-btn relative group"
          :title="link.title"
        >
          <div :class="link.icon" class="text-xl" />
          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            微信: aimerfengllilu
          </div>
        </div>
      </template>
    </div>
  </header>
</template>
