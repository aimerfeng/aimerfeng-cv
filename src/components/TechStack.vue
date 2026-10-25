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
        summary: '主力语言，前后端与 Agent 共享类型。',
        chips: ['monorepo', '共享契约', 'Zod 校验'],
      },
      {
        name: 'Python',
        icon: 'i-logos-python',
        summary: '实时媒体管线与 Agent 工具。',
        chips: ['asyncio', 'PyAV', '测试驱动'],
      },
      {
        name: 'C#',
        icon: 'i-logos-c-sharp',
        summary: 'Unity 游戏系统与无头检查工程。',
        chips: ['Unity', '.NET', '工具链'],
      },
      {
        name: 'Solidity',
        icon: 'i-logos-solidity',
        summary: '合约、DAO 治理与账户抽象。',
        chips: ['DAO', 'ERC-4337', 'Hardhat'],
      },
    ],
  },
  {
    category: '前端与图形',
    items: [
      {
        name: 'React',
        icon: 'i-logos-react',
        summary: '复杂编辑器与多面板界面。',
        chips: ['React 19', 'Zustand', 'TanStack Query'],
      },
      {
        name: 'React Flow',
        icon: 'i-carbon-flow',
        summary: '无限画布与节点工作流编辑器。',
        chips: ['类型化端口', '命令总线', '撤销历史'],
      },
      {
        name: 'Next.js',
        icon: 'i-logos-nextjs-icon',
        summary: '全栈 Web 应用与内容站。',
        chips: ['App Router', 'i18n', 'SSR'],
      },
      {
        name: 'WebGL / GLSL',
        icon: 'i-simple-icons-webgl',
        summary: '自研渲染引擎与 Shader 效果。',
        chips: ['着色器', '后处理', '端侧渲染'],
      },
      {
        name: 'Electron',
        icon: 'i-logos-electron',
        summary: '桌面 AI 工具与游戏打包。',
        chips: ['自动更新', '本地工具宿主', '安装包'],
      },
      {
        name: 'Vue 3',
        icon: 'i-logos-vue',
        summary: '组件化页面与小型工具站。',
        chips: ['组合式 API', '组件库', 'Vite'],
      },
    ],
  },
  {
    category: '后端与数据',
    items: [
      {
        name: 'Node.js / Fastify',
        icon: 'i-logos-fastify-icon',
        summary: 'API、Agent Server 与实时推送。',
        chips: ['SSE', 'WebSocket', '插件化'],
      },
      {
        name: 'PostgreSQL',
        icon: 'i-logos-postgresql',
        summary: '数据底座，兼做队列与事件通知。',
        chips: ['Prisma / Drizzle', 'pg-boss', 'NOTIFY'],
      },
      {
        name: 'Redis',
        icon: 'i-logos-redis',
        summary: '缓存、队列与实时状态。',
        chips: ['BullMQ', '会话', '限流'],
      },
      {
        name: 'FastAPI',
        icon: 'i-logos-fastapi-icon',
        summary: 'Python 侧 AI 服务接口。',
        chips: ['Pydantic', '流式输出', '自动文档'],
      },
      {
        name: '对象存储',
        icon: 'i-carbon-data-base',
        summary: '媒体资产存储与分发。',
        chips: ['S3', '阿里云 OSS', '签名直传'],
      },
    ],
  },
  {
    category: 'AI 与 Agent',
    items: [
      {
        name: 'Agent Harness',
        icon: 'i-carbon-bot',
        summary: '自研工具循环，可恢复、可续跑。',
        chips: ['Function Calling', '可撤销写入', '预算控制'],
      },
      {
        name: 'MCP',
        icon: 'i-carbon-plug',
        summary: '把产品能力开放给外部 Agent。',
        chips: ['MCP Server', '工具清单', 'llms.txt'],
      },
      {
        name: 'LLM 接入',
        icon: 'i-simple-icons-openai',
        summary: '多 Provider 接入、回退与计费。',
        chips: ['DeepSeek', 'Qwen', 'Claude / OpenAI'],
      },
      {
        name: '视频 / 图像模型',
        icon: 'i-carbon-video',
        summary: '生成管线编排，模型可插拔。',
        chips: ['Seedance', 'Kling', 'MiniMax'],
      },
      {
        name: 'FFmpeg',
        icon: 'i-simple-icons-ffmpeg',
        summary: '剪辑渲染、媒体分析与推流。',
        chips: ['滤镜图', 'RTMP', '响度 / 场景检测'],
      },
      {
        name: 'LangGraph',
        icon: 'i-simple-icons-langchain',
        summary: '有状态 Agent 工作流编排。',
        chips: ['图编排', '检查点', '人机协作'],
      },
    ],
  },
  {
    category: '工程与交付',
    items: [
      {
        name: 'Docker',
        icon: 'i-logos-docker-icon',
        summary: '开发与生产环境一致性。',
        chips: ['compose', '镜像', '冒烟测试'],
      },
      {
        name: 'Kubernetes (k3s)',
        icon: 'i-logos-kubernetes',
        summary: '生产集群滚动发布与迁移。',
        chips: ['滚动更新', '迁移 Job', '零停机'],
      },
      {
        name: '测试体系',
        icon: 'i-logos-vitest',
        summary: '单元、契约、E2E 分层覆盖。',
        chips: ['Vitest', 'Playwright', 'pytest'],
      },
      {
        name: 'GitHub Actions',
        icon: 'i-logos-github-actions',
        summary: 'CI 校验与自动部署。',
        chips: ['lint', '测试', 'Pages'],
      },
      {
        name: 'AI 协作开发',
        icon: 'i-carbon-ai-status',
        summary: 'ADR 先行，编码 Agent 协作实现。',
        chips: ['ADR', 'Claude Code', 'Codex'],
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
