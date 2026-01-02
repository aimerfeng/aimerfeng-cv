<script setup lang="ts">
interface Project {
  name: string
  description: string
  url: string
  techStack: string[]
  highlights: string[]
  category: string
}

const projects: Project[] = [
  // AI & 智能应用
  {
    name: 'NeuralFS',
    description: 'AI 驱动的沉浸式文件系统外壳，将"基于路径的存储"转变为"基于意图的检索"',
    url: 'https://github.com/aimerfeng/NeuralFS',
    techStack: ['Python', 'LangChain', 'Vector DB', 'AI'],
    highlights: [
      '语义搜索，通过自然语言查找文件',
      '智能标签自动分类和组织',
      '逻辑链条关联，发现文件间隐藏关系',
      '支持多种文件格式的内容理解',
    ],
    category: 'AI & 智能应用',
  },
  {
    name: 'AgentLink',
    description: '企业级 AI 变现 SaaS 平台，支持 Google A2A 协议多智能体编排',
    url: 'https://github.com/aimerfeng/AgentLink',
    techStack: ['TypeScript', 'Node.js', 'A2A Protocol', 'Blockchain'],
    highlights: [
      'Google A2A 协议多智能体编排',
      'Prompt 加密保护知识产权',
      '区块链所有权认证',
      '企业级 AI 服务变现方案',
    ],
    category: 'AI & 智能应用',
  },
  {
    name: 'HR QA System',
    description: '智能 HR 问答系统，语义匹配 + LLM 双通道架构',
    url: 'https://github.com/aimerfeng/hr-qa-system',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Vue 3'],
    highlights: [
      '语义匹配 + LLM 双通道架构',
      '支持多模型对比（GPT/Claude/Gemini）',
      '知识库管理与向量检索',
      '前后端分离，Docker 部署',
    ],
    category: 'AI & 智能应用',
  },
  {
    name: 'AI Assistant Agent',
    description: '基于 OpenAI SDK 的智能代理系统，提供天气查询和职业规划功能',
    url: 'https://github.com/aimerfeng/hr-weather-qs',
    techStack: ['Python', 'OpenAI SDK', 'FastAPI', 'Streaming'],
    highlights: [
      '多功能智能代理（天气/职业规划）',
      '流式输出实时响应',
      '支持多 AI 提供商切换',
      'Function Calling 工具调用',
    ],
    category: 'AI & 智能应用',
  },
  // Web3 & 区块链
  {
    name: 'AI Smart Wallet',
    description: '下一代智能合约钱包，AI 意图解析 + ZK 隐私策略 + 社交恢复',
    url: 'https://github.com/aimerfeng/AI-Smart-Wallet',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'ERC-4337'],
    highlights: [
      'ERC-4337 账户抽象标准实现',
      'AI 意图解析，自然语言交易',
      'ZK 隐私策略保护交易隐私',
      '社交恢复机制，守护者恢复账户',
    ],
    category: 'Web3 & 区块链',
  },
  {
    name: 'Vue Web3 Tip',
    description: 'Vue 3 Web3 打赏组件，支持 Ethereum/Polygon/Solana 多链',
    url: 'https://github.com/aimerfeng/vue-web3-tip',
    techStack: ['Vue 3', 'TypeScript', 'Web3.js', 'Ethers.js'],
    highlights: [
      '多链支持（ETH/MATIC/SOL）',
      'MetaMask 和 Phantom 钱包集成',
      '可自定义样式和预设金额',
      'npm 包发布，开箱即用',
    ],
    category: 'Web3 & 区块链',
  },
  // 移动端 & 桌面应用
  {
    name: 'Premium Todo',
    description: '数字子弹笔记本 Android 应用，真实墨水物理模拟',
    url: 'https://github.com/aimerfeng/todolist',
    techStack: ['Kotlin', 'OpenGL ES 3.0', 'Android', 'Physics'],
    highlights: [
      '真实墨水物理模拟效果',
      '智能符号识别（复选框/列表）',
      'OpenGL ES 3.0 高性能渲染',
      '手写笔记与数字任务结合',
    ],
    category: '移动端 & 桌面应用',
  },
  {
    name: 'AutoCamera',
    description: 'Blazor WebAssembly 自动拍照应用',
    url: 'https://github.com/aimerfeng/The-Sixth-Request-for-Assistance-Project',
    techStack: ['C#', 'Blazor', 'WebAssembly', '.NET'],
    highlights: [
      '定时自动拍照功能',
      '照片管理与预览',
      '前后摄像头切换',
      'WebAssembly 跨平台运行',
    ],
    category: '移动端 & 桌面应用',
  },
  // 个人网站
  {
    name: 'AimerFeng Blog',
    description: '个人技术博客，玻璃质感设计，支持 Web3 打赏',
    url: 'https://github.com/aimerfeng/AimerFeng_blog',
    techStack: ['Vue 3', 'Vite', 'UnoCSS', 'TypeScript'],
    highlights: [
      '玻璃质感 UI 设计',
      'Web3 多链打赏功能',
      'SEO 优化与 OG 图片生成',
      'GitHub OAuth 在线投稿系统',
    ],
    category: '个人网站',
  },
]

// 按类别分组
const categories = [...new Set(projects.map(p => p.category))]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title flex items-center gap-2">
      <div class="i-carbon-cube" />
      项目
    </h2>
    
    <div class="space-y-8">
      <div v-for="category in categories" :key="category">
        <h3 class="text-sm font-medium text-light mb-3 flex items-center gap-2">
          <div 
            :class="category === 'AI & 智能应用' ? 'i-carbon-machine-learning' : 
                   category === 'Web3 & 区块链' ? 'i-carbon-blockchain' :
                   category === '移动端 & 桌面应用' ? 'i-carbon-mobile' : 'i-carbon-globe'"
          />
          {{ category }}
        </h3>
        
        <div class="space-y-4">
          <div
            v-for="project in projects.filter(p => p.category === category)"
            :key="project.name"
            class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors"
          >
            <div class="flex items-start justify-between mb-2">
              <h4 class="font-semibold">{{ project.name }}</h4>
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
      </div>
    </div>
  </section>
</template>
