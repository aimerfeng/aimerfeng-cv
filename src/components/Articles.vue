<script setup lang="ts">
const articles = [
  {
    title: 'Web3 入门指南',
    description: '从零开始了解区块链、智能合约和去中心化应用',
    url: 'https://aimerfeng.com/posts/web3-intro',
    date: '2024',
    tags: ['Web3', 'Blockchain'],
  },
  {
    title: '智能合约开发实践',
    description: '使用 Solidity 和 Hardhat 开发安全的智能合约',
    url: 'https://aimerfeng.com/posts/smart-contracts',
    date: '2024',
    tags: ['Solidity', 'Smart Contract'],
  },
  {
    title: 'AI Agents 探索',
    description: '探索 AI Agent 的架构设计与实现',
    url: 'https://aimerfeng.com/posts/ai-agents',
    date: '2024',
    tags: ['AI', 'LLM'],
  },
  {
    title: 'LLM 开发实践',
    description: '大语言模型应用开发的最佳实践',
    url: 'https://aimerfeng.com/posts/llm-dev',
    date: '2024',
    tags: ['LLM', 'AI'],
  },
  {
    title: '重新构想原子化 CSS',
    description: '探索 UnoCSS 的设计理念与实现',
    url: 'https://aimerfeng.com/posts/reimagine-atomic-css-zh',
    date: '2024',
    tags: ['CSS', 'UnoCSS'],
  },
]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title flex items-center gap-2">
      <div class="i-carbon-document" />
      文章
    </h2>
    
    <div class="space-y-4">
      <a
        v-for="article in articles"
        :key="article.title"
        :href="article.url"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors group"
      >
        <div class="flex items-start justify-between mb-1">
          <h3 class="font-medium group-hover:text-blue-500 transition-colors">
            {{ article.title }}
          </h3>
          <span class="text-xs text-light">{{ article.date }}</span>
        </div>
        
        <p class="text-sm text-light mb-2">{{ article.description }}</p>
        
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs"
          >
            {{ tag }}
          </span>
        </div>
      </a>
    </div>
    
    <div class="mt-4 text-center">
      <a
        href="https://aimerfeng.com/posts"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-blue-500 hover:underline"
      >
        查看更多文章 →
      </a>
    </div>
  </section>
</template>
