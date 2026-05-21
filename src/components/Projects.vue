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
    description: 'AI 驱动的沉浸式文件系统外壳，将路径式存储转为意图式检索。',
    url: 'https://github.com/aimerfeng/NeuralFS',
    techStack: ['Python', 'LangChain', 'Vector DB', 'AI'],
    highlights: [
      '支持自然语言语义搜索',
      '智能标签自动分类与组织',
      '通过逻辑链条发现文件间关联',
      '支持多种文件格式的内容理解',
    ],
    category: 'AI & 智能应用',
  },
  {
    name: 'Hermes Agent Claw',
    description: '基于 Tauri + React + TypeScript 的 AI Agent 桌面客户端，提供三面板协作界面。',
    url: 'https://github.com/aimerfeng/Hermes-agent-claw',
    techStack: ['Tauri', 'React', 'TypeScript', 'Framer Motion'],
    highlights: [
      '三面板布局覆盖文件预览、终端监控和聊天窗口',
      '支持聚焦/浏览模式跟踪 Agent 文件操作',
      '适合展示桌面端 AI Agent 的交互形态',
    ],
    category: 'AI & 智能应用',
  },
  {
    name: 'AI Web Coze',
    description: '基于 FastAPI + React + Coze Agent 的智能招聘平台。',
    url: 'https://github.com/aimerfeng/ai_web_coze',
    techStack: ['FastAPI', 'React', 'Coze Agent', 'WebSocket'],
    highlights: [
      '包含 AI 简历解析与智能面试流程',
      '支持 HR 端与求职者端双角色流程',
      '适合展示 AI 业务系统与平台化能力',
    ],
    category: 'AI & 智能应用',
  },
  {
    name: 'AgentLink',
    description: '企业级 AI 变现平台，支持 Google A2A 协议的多智能体编排。',
    url: 'https://github.com/aimerfeng/AgentLink',
    techStack: ['TypeScript', 'Node.js', 'A2A Protocol', 'Blockchain'],
    highlights: [
      '支持 Google A2A 协议多智能体编排',
      '通过 Prompt 加密保护知识产权',
      '引入区块链所有权认证',
      '提供面向企业的 AI 服务变现方案',
    ],
    category: 'AI & 智能应用',
  },
  {
    name: 'HR QA System',
    description: '智能 HR 问答系统，采用语义匹配与 LLM 双通道架构。',
    url: 'https://github.com/aimerfeng/hr-qa-system',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Vue 3'],
    highlights: [
      '采用语义匹配 + LLM 双通道架构',
      '支持多模型对比（GPT / Claude / Gemini）',
      '提供知识库管理与向量检索',
      '前后端分离，支持 Docker 部署',
    ],
    category: 'AI & 智能应用',
  },
  {
    name: 'AI Assistant Agent',
    description: '基于 OpenAI SDK 的智能代理系统，支持天气查询和职业规划。',
    url: 'https://github.com/aimerfeng/hr-weather-qs',
    techStack: ['Python', 'OpenAI SDK', 'FastAPI', 'Streaming'],
    highlights: [
      '集成天气查询与职业规划能力',
      '支持流式输出，增强实时响应',
      '支持多 AI 提供商切换',
      '使用 Function Calling 完成工具调用',
    ],
    category: 'AI & 智能应用',
  },
  // Web3 & 区块链
  {
    name: 'AI Smart Wallet',
    description: '下一代智能合约钱包，结合 AI 意图解析、ZK 隐私策略与社交恢复。',
    url: 'https://github.com/aimerfeng/AI-Smart-Wallet',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'ERC-4337'],
    highlights: [
      '实现 ERC-4337 账户抽象标准',
      '支持 AI 意图解析与自然语言交易',
      '通过 ZK 隐私策略保护交易信息',
      '提供社交恢复机制与守护者恢复',
    ],
    category: 'Web3 & 区块链',
  },
  {
    name: 'Blog Reward',
    description: '为博客场景提供 Web3 打赏能力的 Vue 组件。',
    url: 'https://github.com/aimerfeng/bolg_reward',
    techStack: ['Vue 3', 'TypeScript', 'Web3'],
    highlights: [
      '支持多链打赏场景',
      '可作为博客组件复用',
      '适合展示 Web3 能力与组件设计',
    ],
    category: 'Web3 & 区块链',
  },
  {
    name: 'Vue Web3 Tip',
    description: 'Vue 3 Web3 打赏组件，支持 Ethereum、Polygon 与 Solana 多链。',
    url: 'https://github.com/aimerfeng/vue-web3-tip',
    techStack: ['Vue 3', 'TypeScript', 'Web3.js', 'Ethers.js'],
    highlights: [
      '支持 ETH / MATIC / SOL 多链',
      '集成 MetaMask 与 Phantom 钱包',
      '支持样式自定义和预设金额',
      '已发布为 npm 包，可直接复用',
    ],
    category: 'Web3 & 区块链',
  },
  // 移动端 & 桌面应用
  {
    name: 'Premium Todo',
    description: '数字子弹笔记本 Android 应用，具备真实墨水物理模拟。',
    url: 'https://github.com/aimerfeng/todolist',
    techStack: ['Kotlin', 'OpenGL ES 3.0', 'Android', 'Physics'],
    highlights: [
      '实现真实墨水物理模拟效果',
      '支持智能符号识别（复选框 / 列表）',
      '基于 OpenGL ES 3.0 的高性能渲染',
      '结合手写笔记与数字任务管理',
    ],
    category: '移动端 & 桌面应用',
  },
  {
    name: 'AutoCamera',
    description: '基于 Blazor WebAssembly 的自动拍照应用。',
    url: 'https://github.com/aimerfeng/The-Sixth-Request-for-Assistance-Project',
    techStack: ['C#', 'Blazor', 'WebAssembly', '.NET'],
    highlights: [
      '支持定时自动拍照',
      '提供照片管理与预览',
      '支持前后摄像头切换',
      '可通过 WebAssembly 跨平台运行',
    ],
    category: '移动端 & 桌面应用',
  },
  // 个人网站
  {
    name: 'AimerFeng Blog',
    description: '个人技术博客，采用玻璃质感设计并支持 Web3 打赏。',
    url: 'https://github.com/aimerfeng/AimerFeng_blog',
    techStack: ['Vue 3', 'Vite', 'UnoCSS', 'TypeScript'],
    highlights: [
      '采用玻璃质感 UI 设计',
      '集成 Web3 多链打赏功能',
      '完成 SEO 优化与 OG 图片生成',
      '支持 GitHub OAuth 在线投稿',
    ],
    category: '个人网站',
  },
  {
    name: 'Qinxiaoshuo',
    description: '面向二次元轻小说与漫画的平台项目，强调阅读与共创流程。',
    url: 'https://github.com/aimerfeng/qinxiaoshuoqinzhixiaoshuo',
    techStack: ['Next.js', 'NestJS', 'TypeScript', 'Prisma'],
    highlights: [
      '覆盖前后端完整平台结构',
      '包含阅读、创作与社区相关模块',
      '适合展示复杂产品的信息架构能力',
    ],
    category: '个人网站',
  },
]

// 按类别分组
const categories = [...new Set(projects.map(p => p.category))]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title">
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
            class="project-item"
            tabindex="0"
          >
            <div class="card-surface project-card p-5">
              <div class="mb-2 flex items-start justify-between gap-3">
                <h4 class="font-semibold">{{ project.name }}</h4>
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="icon-btn project-link"
                  title="查看项目"
                >
                  <div class="i-carbon-launch" />
                </a>
              </div>

              <p class="text-sm text-light mb-3">{{ project.description }}</p>

              <ul class="mb-3 space-y-2 text-sm text-[var(--c-text)]/85">
                <li v-for="highlight in project.highlights" :key="highlight">
                  <span class="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-500 align-middle" />
                  {{ highlight }}
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="chip-pill project-chip text-xs text-blue-600 dark:text-blue-300"
                  tabindex="0"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-item {
  outline: none;
  perspective: 900px;
}

.project-card {
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition:
    transform 300ms cubic-bezier(0.2, 0.85, 0.2, 1),
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 14% 16%, rgba(96, 165, 250, 0.16), transparent 34%),
    linear-gradient(135deg, rgba(59, 130, 246, 0.11), transparent 44%);
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}

.project-card::after {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  border: 1px solid rgba(96, 165, 250, 0);
  box-shadow: inset 0 0 0 0 rgba(96, 165, 250, 0);
  transition:
    border-color 240ms ease,
    box-shadow 240ms ease;
  pointer-events: none;
}

.project-item:hover .project-card,
.project-item:focus-visible .project-card,
.project-item:focus-within .project-card {
  transform: perspective(900px) rotateX(1.2deg) rotateY(-1deg) translateY(-5px) translateZ(0);
  border-color: rgba(59, 130, 246, 0.42);
  background-color: rgba(239, 246, 255, 0.86);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.72) inset,
    0 24px 38px rgba(37, 99, 235, 0.14),
    0 8px 16px rgba(15, 23, 42, 0.06);
}

.project-item:hover .project-card::before,
.project-item:focus-visible .project-card::before,
.project-item:focus-within .project-card::before {
  opacity: 1;
}

.project-item:hover .project-card::after,
.project-item:focus-visible .project-card::after,
.project-item:focus-within .project-card::after {
  border-color: rgba(96, 165, 250, 0.2);
  box-shadow: inset 0 0 22px rgba(96, 165, 250, 0.08);
}

.project-link {
  flex: none;
  transform: translateZ(14px);
  transition:
    transform 220ms cubic-bezier(0.2, 0.85, 0.2, 1),
    border-color 220ms ease,
    background-color 220ms ease,
    box-shadow 220ms ease;
}

.project-item:hover .project-link,
.project-item:focus-within .project-link {
  transform: translateY(-1px) translateZ(18px);
  border-color: rgba(59, 130, 246, 0.28);
  background: rgba(239, 246, 255, 0.95);
  box-shadow: 0 10px 22px rgba(59, 130, 246, 0.12);
}

.project-chip {
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  cursor: default;
  transition:
    transform 220ms cubic-bezier(0.2, 0.85, 0.2, 1),
    border-color 220ms ease,
    background-color 220ms ease,
    box-shadow 220ms ease,
    color 220ms ease;
  will-change: transform;
}

.project-chip::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.45) 48%,
    transparent 56%
  );
  transform: translateX(-120%);
  opacity: 0.7;
  transition: transform 520ms cubic-bezier(0.2, 0.85, 0.2, 1);
  pointer-events: none;
}

.project-chip:hover,
.project-chip:focus-visible {
  transform: translateY(-3px) scale(1.03);
  border-color: rgba(59, 130, 246, 0.34);
  background: rgba(239, 246, 255, 0.96);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.7) inset,
    0 10px 22px rgba(59, 130, 246, 0.12);
  color: var(--c-text);
}

.project-chip:hover::before,
.project-chip:focus-visible::before {
  transform: translateX(120%);
}

html.dark .project-chip {
  background: rgba(30, 41, 59, 0.72);
  border-color: rgba(148, 163, 184, 0.14);
}

html.dark .project-card {
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 10px 28px rgba(0, 0, 0, 0.16);
}

html.dark .project-item:hover .project-card,
html.dark .project-item:focus-visible .project-card,
html.dark .project-item:focus-within .project-card {
  background-color: rgba(15, 23, 42, 0.9);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 24px 38px rgba(0, 0, 0, 0.34),
    0 8px 18px rgba(37, 99, 235, 0.12);
}

html.dark .project-item:hover .project-link,
html.dark .project-item:focus-within .project-link {
  background: rgba(30, 41, 59, 0.95);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.24);
}

html.dark .project-chip:hover,
html.dark .project-chip:focus-visible {
  border-color: rgba(96, 165, 250, 0.4);
  background: rgba(30, 41, 59, 0.95);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 10px 22px rgba(0, 0, 0, 0.24);
}

@media (hover: none) and (pointer: coarse) {
  .project-card {
    transform: translateY(-1px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card::before,
  .project-card::after,
  .project-link,
  .project-chip,
  .project-chip::before {
    transition: none !important;
  }
}
</style>
