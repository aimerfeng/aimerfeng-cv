<script setup lang="ts">
import { ref } from 'vue'

interface TechItem {
  name: string
  icon: string
  summary: string
  chips: string[]
}

interface TechGroup {
  category: string
  items: TechItem[]
}

const techStacks: TechGroup[] = [
  {
    category: '语言',
    items: [
      {
        name: 'TypeScript',
        icon: 'i-logos-typescript-icon',
        summary: '类型安全和工程约束，让大型前端与工具链更稳。',
        chips: ['类型约束', 'API 收口', '共享类型'],
      },
      {
        name: 'Python',
        icon: 'i-logos-python',
        summary: 'AI 任务、自动化脚本和数据处理的主力语言。',
        chips: ['自动化', '数据处理', '训练脚本'],
      },
      {
        name: 'Solidity',
        icon: 'i-logos-solidity',
        summary: '合约建模、账户抽象和链上逻辑编排。',
        chips: ['合约开发', '安全约束', '链上交互'],
      },
      {
        name: 'JavaScript',
        icon: 'i-logos-javascript',
        summary: '快速原型、浏览器交互和前端集成的基础能力。',
        chips: ['原型开发', '异步控制', '浏览器集成'],
      },
      {
        name: 'Kotlin',
        icon: 'i-logos-kotlin-icon',
        summary: 'Android 原生界面与性能渲染。',
        chips: ['移动端', '原生体验', 'OpenGL'],
      },
      {
        name: 'C#',
        icon: 'i-logos-c-sharp',
        summary: '.NET 和 Blazor 生态下的跨平台交付。',
        chips: ['.NET', 'WASM', '桌面应用'],
      },
    ],
  },
  {
    category: '前端',
    items: [
      {
        name: 'Vue 3',
        icon: 'i-logos-vue',
        summary: '组件化界面、响应式状态和页面编排的主框架。',
        chips: ['响应式 UI', '组件复用', '页面编排'],
      },
      {
        name: 'React',
        icon: 'i-logos-react',
        summary: '复杂交互和状态组织，适合多面板与桌面端界面。',
        chips: ['Hook', '状态组织', '交互布局'],
      },
      {
        name: 'Vite',
        icon: 'i-logos-vitejs',
        summary: '让开发和构建保持快速，适合高频迭代的前端项目。',
        chips: ['开发提速', '打包优化', '现代工具链'],
      },
      {
        name: 'UnoCSS',
        icon: 'i-logos-unocss',
        summary: '按需原子化样式系统，适合高密度 UI 和设计令牌。',
        chips: ['原子化', '设计令牌', '高密度 UI'],
      },
      {
        name: 'TailwindCSS',
        icon: 'i-logos-tailwindcss-icon',
        summary: '实用优先的样式组织方式，适合快速搭建和统一风格。',
        chips: ['快速搭建', '一致性', '响应式'],
      },
    ],
  },
  {
    category: '后端与运行时',
    items: [
      {
        name: 'Node.js',
        icon: 'i-logos-nodejs-icon',
        summary: '服务编排、API 层和脚本工具的运行环境。',
        chips: ['服务端', '脚本', '实时任务'],
      },
      {
        name: 'FastAPI',
        icon: 'i-logos-fastapi-icon',
        summary: '高性能接口和 AI 后端，适合快速迭代。',
        chips: ['接口开发', '自动文档', '快速迭代'],
      },
      {
        name: 'Express',
        icon: 'i-simple-icons-express',
        summary: '轻量路由和中间层，适合做 BFF 和服务拼接。',
        chips: ['中间件', 'BFF', 'Node 服务'],
      },
      {
        name: 'PostgreSQL',
        icon: 'i-logos-postgresql',
        summary: '结构化数据、事务处理和分析查询的稳定底座。',
        chips: ['关系模型', '事务', '统计查询'],
      },
      {
        name: 'Redis',
        icon: 'i-logos-redis',
        summary: '缓存、队列和实时状态管理的轻量数据层。',
        chips: ['缓存层', '会话', '任务队列'],
      },
    ],
  },
  {
    category: '区块链与 Web3',
    items: [
      {
        name: 'Ethereum',
        icon: 'i-logos-ethereum',
        summary: '链上资产、协议交互和钱包能力的基础网络。',
        chips: ['主网', '钱包', '合约交互'],
      },
      {
        name: 'Hardhat',
        icon: 'i-logos-hardhat-icon',
        summary: '合约开发、测试和部署的工程化脚手架。',
        chips: ['脚本', '测试', '部署'],
      },
      {
        name: 'Ethers.js',
        icon: 'i-logos-ethers',
        summary: '链上读写、签名和钱包交互的核心库。',
        chips: ['合约调用', '签名', 'Provider'],
      },
      {
        name: 'Web3.js',
        icon: 'i-simple-icons-web3dotjs',
        summary: '浏览器链上集成和旧项目兼容支持。',
        chips: ['DApp', '钱包接入', '兼容层'],
      },
      {
        name: 'IPFS',
        icon: 'i-simple-icons-ipfs',
        summary: '去中心化内容存储和资源分发。',
        chips: ['内容地址', '资源分发', '不可变引用'],
      },
    ],
  },
  {
    category: 'AI 与 LLM',
    items: [
      {
        name: 'LangChain',
        icon: 'i-simple-icons-langchain',
        summary: 'Agent、RAG 和工具编排的核心链路。',
        chips: ['链式推理', '检索增强', '工作流'],
      },
      {
        name: 'OpenAI',
        icon: 'i-simple-icons-openai',
        summary: '模型调用、函数调用和应用集成的主入口。',
        chips: ['API 集成', '函数调用', '流式输出'],
      },
      {
        name: 'Gemini',
        icon: 'i-simple-icons-googlegemini',
        summary: '多模态能力和生产力型 AI 应用的试验场。',
        chips: ['多模态', 'Prompt 优化', '实验验证'],
      },
      {
        name: 'Hugging Face',
        icon: 'i-simple-icons-huggingface',
        summary: '开源模型、推理部署和生态工具的实验阵地。',
        chips: ['开源模型', '推理部署', '工具库'],
      },
      {
        name: 'PyTorch',
        icon: 'i-logos-pytorch-icon',
        summary: '训练实验、模型原型和张量计算的基础框架。',
        chips: ['训练脚本', '张量计算', '研究实验'],
      },
    ],
  },
  {
    category: '工具与交付',
    items: [
      {
        name: 'Git',
        icon: 'i-logos-git-icon',
        summary: '版本管理、分支协作和回滚控制。',
        chips: ['分支', '回滚', '协作'],
      },
      {
        name: 'Docker',
        icon: 'i-logos-docker-icon',
        summary: '容器化交付和环境一致性的保障层。',
        chips: ['部署', '镜像', '环境隔离'],
      },
      {
        name: 'VS Code',
        icon: 'i-logos-visual-studio-code',
        summary: '开发效率、调试入口和工作区管理。',
        chips: ['插件生态', '调试', '工作区'],
      },
      {
        name: 'Vercel',
        icon: 'i-logos-vercel-icon',
        summary: '前端托管、预览部署和快速上线。',
        chips: ['静态站点', '预览链接', '边缘部署'],
      },
      {
        name: 'Linux',
        icon: 'i-logos-linux-tux',
        summary: '终端环境、服务操作和远程交付的常用底座。',
        chips: ['Shell', '权限', '服务管理'],
      },
    ],
  },
]

const activeTech = ref('')

function techKey(category: string, name: string) {
  return `${category}::${name}`
}

function setActiveTech(category: string, name: string) {
  activeTech.value = techKey(category, name)
}

function clearActiveTech(category: string, name: string) {
  if (activeTech.value === techKey(category, name))
    activeTech.value = ''
}
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title">
      <div class="i-carbon-code" />
      技术栈
    </h2>

    <div class="tech-stack-space">
      <section
        v-for="group in techStacks"
        :key="group.category"
        class="tech-shelf"
      >
        <div class="tech-shelf-head">
          <h3 class="tech-shelf-title">
            {{ group.category }}
          </h3>
          <span class="tech-shelf-count">{{ group.items.length }} 项</span>
        </div>

        <div class="tech-rail">
          <article
            v-for="tech in group.items"
            :key="tech.name"
            class="tech-pill"
            :class="{ active: activeTech === techKey(group.category, tech.name) }"
            tabindex="0"
            :aria-label="`${tech.name}：${tech.summary}`"
            @pointerenter="setActiveTech(group.category, tech.name)"
            @pointerleave="clearActiveTech(group.category, tech.name)"
            @mouseenter="setActiveTech(group.category, tech.name)"
            @mouseleave="clearActiveTech(group.category, tech.name)"
            @focusin="setActiveTech(group.category, tech.name)"
            @focusout="clearActiveTech(group.category, tech.name)"
          >
            <div class="tech-pill-main">
              <span class="tech-pill-badge" aria-hidden="true">
                <div :class="tech.icon" class="tech-pill-icon" />
              </span>

              <div class="tech-pill-copy">
                <h4 class="tech-pill-name">
                  {{ tech.name }}
                </h4>
                <p class="tech-pill-summary">
                  {{ tech.summary }}
                </p>
              </div>
            </div>

            <div class="tech-pill-detail">
              <span
                v-for="chip in tech.chips"
                :key="chip"
                class="tech-chip"
              >
                {{ chip }}
              </span>
            </div>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.tech-stack-space {
  display: grid;
  gap: 1.65rem;
}

.tech-shelf {
  display: grid;
  gap: 0.8rem;
}

.tech-shelf-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.tech-shelf-title {
  color: var(--c-text-light);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
}

.tech-shelf-count {
  display: inline-flex;
  align-items: center;
  min-height: 1.35rem;
  padding: 0 0.48rem;
  border: 1px solid rgba(59, 130, 246, 0.12);
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.06);
  color: var(--c-text-light);
  font-size: 0.68rem;
  line-height: 1;
}

.tech-rail {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.7rem 1.05rem;
}

.tech-pill {
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 3.75rem;
  min-height: 3.75rem;
  overflow: hidden;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  box-shadow: none;
  outline: none;
  cursor: default;
  transition:
    width 360ms cubic-bezier(0.18, 0.9, 0.2, 1),
    min-height 360ms cubic-bezier(0.18, 0.9, 0.2, 1),
    padding 360ms cubic-bezier(0.18, 0.9, 0.2, 1),
    border-radius 360ms cubic-bezier(0.18, 0.9, 0.2, 1),
    background-color 240ms ease,
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
  will-change: width, transform;
}

html.dark .tech-pill {
  background: transparent;
  box-shadow: none;
}

.tech-pill:hover,
.tech-pill.active,
.tech-pill:focus-visible,
.tech-pill:focus-within {
  z-index: 2;
  width: min(25rem, 100%);
  min-height: 6.15rem;
  padding: 0.42rem;
  border-color: rgba(59, 130, 246, 0.34);
  border-radius: 1.35rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.72)),
    var(--c-bg);
  transform: translateY(-3px);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.72) inset,
    0 18px 30px rgba(37, 99, 235, 0.12);
}

html.dark .tech-pill:hover,
html.dark .tech-pill.active,
html.dark .tech-pill:focus-visible,
html.dark .tech-pill:focus-within {
  background:
    linear-gradient(180deg, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.74)),
    var(--c-bg);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 18px 30px rgba(0, 0, 0, 0.3);
}

.tech-pill-main {
  display: flex;
  align-items: center;
  gap: 0.78rem;
  width: 23.6rem;
  max-width: calc(100vw - 4rem);
  min-height: 3.75rem;
}

.tech-pill-badge {
  flex: 0 0 3.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 3.75rem;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  box-shadow: none;
  transition:
    transform 300ms cubic-bezier(0.2, 0.85, 0.2, 1),
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    filter 220ms ease;
}

html.dark .tech-pill-badge {
  background: transparent;
  box-shadow: none;
}

.tech-pill:hover .tech-pill-badge,
.tech-pill.active .tech-pill-badge,
.tech-pill:focus-visible .tech-pill-badge,
.tech-pill:focus-within .tech-pill-badge {
  transform: translateX(0.04rem) scale(1.02);
  border-color: rgba(59, 130, 246, 0.22);
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.62)),
    rgba(59, 130, 246, 0.1);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.72) inset,
    0 8px 18px rgba(15, 23, 42, 0.06);
  filter: drop-shadow(0 7px 10px rgba(37, 99, 235, 0.16));
}

html.dark .tech-pill:hover .tech-pill-badge,
html.dark .tech-pill.active .tech-pill-badge,
html.dark .tech-pill:focus-visible .tech-pill-badge,
html.dark .tech-pill:focus-within .tech-pill-badge {
  background:
    radial-gradient(circle at 30% 20%, rgba(31, 41, 55, 0.96), rgba(17, 24, 39, 0.78)),
    rgba(59, 130, 246, 0.1);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 8px 18px rgba(0, 0, 0, 0.18);
}

.tech-pill-icon {
  font-size: 1.35rem;
}

.tech-pill-copy {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0.2rem 0.95rem 0.2rem 0;
  opacity: 0;
  transform: translateX(-0.28rem);
  transition:
    opacity 210ms ease 90ms,
    transform 280ms cubic-bezier(0.18, 0.9, 0.2, 1) 60ms;
}

.tech-pill:hover .tech-pill-copy,
.tech-pill.active .tech-pill-copy,
.tech-pill:focus-visible .tech-pill-copy,
.tech-pill:focus-within .tech-pill-copy {
  opacity: 1;
  transform: translateX(0);
}

.tech-pill-name {
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
}

.tech-pill-summary {
  margin-top: 0.18rem;
  color: var(--c-text-light);
  font-size: 0.75rem;
  line-height: 1.38;
}

.tech-pill-detail {
  max-height: 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.42rem;
  margin-left: 4.52rem;
  padding: 0 0.8rem 0 0;
  opacity: 0;
  transform: translateY(-0.18rem);
  transition:
    max-height 280ms cubic-bezier(0.18, 0.9, 0.2, 1),
    opacity 210ms ease 140ms,
    transform 280ms cubic-bezier(0.18, 0.9, 0.2, 1) 100ms;
}

.tech-pill:hover .tech-pill-detail,
.tech-pill.active .tech-pill-detail,
.tech-pill:focus-visible .tech-pill-detail,
.tech-pill:focus-within .tech-pill-detail {
  max-height: 2rem;
  opacity: 1;
  transform: translateY(0);
}

.tech-chip {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  min-height: 1.45rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid rgba(59, 130, 246, 0.14);
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.08);
  color: var(--c-text);
  font-size: 0.68rem;
  line-height: 1;
  white-space: nowrap;
}

@media (max-width: 560px) {
  .tech-pill:hover,
  .tech-pill.active,
  .tech-pill:focus-visible,
  .tech-pill:focus-within {
    width: 100%;
  }

  .tech-pill-main {
    width: 100%;
    max-width: 100%;
  }
}

@media (hover: none) and (pointer: coarse) {
  .tech-pill {
    width: 100%;
    min-height: 6.15rem;
    border-radius: 1.1rem;
  }

  .tech-pill-copy,
  .tech-pill-detail {
    max-height: 2rem;
    opacity: 1;
    transform: none;
  }

  .tech-pill-main {
    width: 100%;
    max-width: 100%;
  }
}

@media print {
  .tech-pill {
    width: 100%;
    min-height: auto;
    background: transparent !important;
    box-shadow: none !important;
  }

  .tech-pill-copy,
  .tech-pill-detail {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tech-pill,
  .tech-pill-badge,
  .tech-pill-copy,
  .tech-pill-detail {
    transition: none !important;
  }
}
</style>
