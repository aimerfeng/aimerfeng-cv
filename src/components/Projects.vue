<script setup lang="ts">
const projects = [
  {
    name: 'Gemini Prompt Optimizer',
    description: '基于 Gemini API 的智能提示词优化工具，自动分析和改进 AI 提示词质量',
    url: 'https://github.com/aimerfeng/gemini-',
    techStack: ['Python', 'Gemini API', 'Prompt Engineering', 'AI'],
    highlights: [
      '智能分析提示词结构和语义',
      '自动优化提示词以提高输出质量',
      '支持多种优化策略和模板',
      '提供详细的优化建议和对比',
    ],
  },
  {
    name: 'AI Smart Wallet',
    description: '基于 ERC-4337 账户抽象的 AI 智能钱包，支持社交恢复、多签授权、Gas 代付等功能',
    url: 'https://github.com/aimerfeng/AI-Smart-Wallet',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'TypeScript', 'AI'],
    highlights: [
      '实现 ERC-4337 账户抽象标准',
      '支持社交恢复机制，通过守护者恢复账户',
      '集成 Paymaster 实现 Gas 代付',
      'AI 辅助交易决策与风险评估',
    ],
  },
  {
    name: 'Vue Web3 Tip',
    description: 'Vue 3 多链加密货币打赏组件，支持 Ethereum、Polygon、Solana',
    url: 'https://github.com/aimerfeng/bolg_reward',
    techStack: ['Vue 3', 'TypeScript', 'Web3', 'MetaMask'],
    highlights: [
      '支持多链打赏（ETH/MATIC/SOL）',
      'MetaMask 和 Phantom 钱包集成',
      '可自定义样式和预设金额',
      'TypeScript 类型支持',
    ],
  },
  {
    name: 'AimerFeng Blog',
    description: '个人技术博客，基于 Vue 3 + Vite + UnoCSS 构建，支持 Web3 打赏功能',
    url: 'https://github.com/aimerfeng/aimerfeng-blog',
    techStack: ['Vue 3', 'Vite', 'UnoCSS', 'TypeScript', 'Markdown'],
    highlights: [
      '响应式设计，支持暗色模式',
      '集成 Web3 钱包连接与打赏功能',
      '自动生成 RSS 订阅',
      'SEO 优化与 OG 图片生成',
    ],
  },
]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title flex items-center gap-2">
      <div class="i-carbon-cube" />
      项目
    </h2>
    
    <div class="space-y-6">
      <div
        v-for="project in projects"
        :key="project.name"
        class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors"
      >
        <div class="flex items-start justify-between mb-2">
          <h3 class="font-semibold">{{ project.name }}</h3>
          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-btn"
            title="查看项目"
          >
            <div class="i-carbon-launch" />
          </a>
        </div>
        
        <p class="text-sm text-light mb-3">{{ project.description }}</p>
        
        <ul class="list-disc list-inside space-y-1 text-sm text-light mb-3">
          <li v-for="highlight in project.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
        
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
