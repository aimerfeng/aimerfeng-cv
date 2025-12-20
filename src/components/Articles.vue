<script setup lang="ts">
// 博客文章
const blogArticles = [
  {
    title: 'Web3 入门指南',
    description: '从零开始了解区块链、智能合约和去中心化应用',
    url: 'https://aimer-feng-blog.vercel.app/posts/web3-intro',
    date: '2025.06',
    tags: ['Web3', 'Blockchain'],
    source: 'Blog',
  },
  {
    title: '智能合约开发实践',
    description: '使用 Solidity 和 Hardhat 开发安全的智能合约',
    url: 'https://aimer-feng-blog.vercel.app/posts/smart-contracts',
    date: '2025.07',
    tags: ['Solidity', 'Smart Contract'],
    source: 'Blog',
  },
  {
    title: 'AI Agents 探索',
    description: '探索 AI Agent 的架构设计与实现',
    url: 'https://aimer-feng-blog.vercel.app/posts/ai-agents',
    date: '2025.08',
    tags: ['AI', 'LLM'],
    source: 'Blog',
  },
  {
    title: 'LLM 开发实践',
    description: '大语言模型应用开发的最佳实践',
    url: 'https://aimer-feng-blog.vercel.app/posts/llm-dev',
    date: '2025.09',
    tags: ['LLM', 'AI'],
    source: 'Blog',
  },
  {
    title: 'Web3 打赏功能实现',
    description: '在博客中集成多链加密货币打赏功能',
    url: 'https://aimer-feng-blog.vercel.app/posts/web3-tip-feature',
    date: '2025.10',
    tags: ['Web3', 'Vue'],
    source: 'Blog',
  },
]

// CSDN 文章
const csdnArticles = [
  {
    title: 'Kiro IDE 深度体验：AI 驱动的下一代开发工具',
    description: '探索 Kiro IDE 的 Spec 驱动开发模式与 AI 协作编程',
    url: 'https://blog.csdn.net/qq_61185581/article/details/156094069',
    date: '2025.12',
    tags: ['AI', 'IDE', 'Kiro'],
    source: 'CSDN',
  },
  {
    title: '从零构建 AI 智能钱包：ERC-4337 账户抽象实战',
    description: '深入理解账户抽象标准，实现社交恢复与 Gas 代付',
    url: 'https://blog.csdn.net/qq_61185581/article/details/156061260',
    date: '2025.12',
    tags: ['Web3', 'ERC-4337', 'Solidity'],
    source: 'CSDN',
  },
  {
    title: 'Vue 3 组件库开发实践：从设计到发布',
    description: '使用 Vite 构建可复用的 Vue 3 组件库',
    url: 'https://blog.csdn.net/qq_61185581/article/details/156009140',
    date: '2025.12',
    tags: ['Vue 3', 'Component', 'npm'],
    source: 'CSDN',
  },
]

const allArticles = [...blogArticles, ...csdnArticles]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title flex items-center gap-2">
      <div class="i-carbon-document" />
      文章
    </h2>

    <div class="space-y-4">
      <a
        v-for="article in allArticles"
        :key="article.url"
        :href="article.url"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors group"
      >
        <div class="flex items-start justify-between mb-1">
          <h3 class="font-medium group-hover:text-blue-500 transition-colors">
            {{ article.title }}
          </h3>
          <div class="flex items-center gap-2">
            <span
              class="px-2 py-0.5 rounded text-xs"
              :class="article.source === 'CSDN' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'"
            >
              {{ article.source }}
            </span>
            <span class="text-xs text-light">{{ article.date }}</span>
          </div>
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
        href="https://aimer-feng-blog.vercel.app/posts"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-blue-500 hover:underline"
      >
        查看更多文章 →
      </a>
    </div>
  </section>
</template>
