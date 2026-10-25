<script setup lang="ts">
interface Project {
  name: string
  description: string
  /** 公开仓库或线上地址；私有项目留空，不显示外链 */
  url?: string
  status: string
  techStack: string[]
  highlights: string[]
  category: string
}

const categoryIcons: Record<string, string> = {
  'AI 创作平台': 'i-carbon-video',
  'AI Agent 与开源工具': 'i-carbon-machine-learning',
  '全栈产品与图形': 'i-carbon-application',
  '早期项目': 'i-carbon-archive',
}

const projects: Project[] = [
  // AI 创作平台
  {
    name: 'Interlude 幕间',
    description: '互动影视 / Galgame / 全屏小说 / 聊天小说一体的云端创作 SaaS：无限画布编辑器、AI 创作助手、编辑器内试玩，可导出 Web 包与 Steam 桌面包。',
    status: '个人项目 · 私有仓库',
    techStack: ['React 19', 'Fastify', 'Prisma', 'PostgreSQL', 'pg-boss', 'React Flow', 'Electron', 'Playwright'],
    highlights: [
      '「一核三轴」架构：四种作品形态共用同一套 Schema、编译器、确定性剧情 VM 与存档，新增一种形态只需注册三处',
      '所有写入统一走「命令 → 补丁 → ChangeSet」，带租约、基线版本与幂等；Postgres NOTIFY → SSE 实时同步',
      '自研可断点续跑的 tool-use 创作 Agent，可直接改写整部作品，一个 ChangeSet 即一步撤销；12 条 AI 生产管线配积分预扣 / 结算 / 退回',
      '共享游戏运行时：存读档、回退、已读快进、QTE、成就、流程图，中英日三语与手柄支持',
      '约 6000 个测试用例（含 100+ Playwright E2E / 无障碍用例），多分辨率视觉 QA，CI 全链路',
    ],
    category: 'AI 创作平台',
  },
  {
    name: '不夜 Buye',
    description: '24 小时 AI 生成直播：抖音弹幕 → LLM 导演拆镜 → 视频模型 Worker 生成 → RTMP 推流。',
    status: '个人项目 · 私有仓库',
    techStack: ['Python', 'asyncio', 'PyAV', 'FFmpeg / RTMP', 'WebSocket', 'DeepSeek', 'MiniMax'],
    highlights: [
      '模型 Worker 独立进程隔离：控制面 WebSocket JSON，媒体面自包含 MPEG-TS 分块，视频模型可插拔',
      'LLM 双层导演：Planner 产出与模型无关的镜头，PromptAdapter 改写为具体模型 Prompt；支持插队、撤单、观众投票',
      '生成与播出解耦：恒帧率 Pacer 出帧，无内容时按「定格 → 待机画面 → 片库回放」逐级兜底，保证不断流',
      '合规与成本：常驻 AI 生成标识，本地屏蔽词 + LLM 双重审核且 fail-closed，预算上限控制',
    ],
    category: 'AI 创作平台',
  },
  // AI Agent 与开源工具
  {
    name: '然然 Bot',
    description: 'Telegram 群聊 AI 机器人，基于自建 Agent Harness（原生 Function Calling 工具循环）。',
    url: 'https://github.com/aimerfeng/ranran-bot',
    status: '开源',
    techStack: ['Python', 'Agent Harness', 'MCP', 'DeepSeek', 'GitHub Actions'],
    highlights: [
      '自研「Provider → 工具调用 → 结果回灌」循环，带步数预算与兜底，支持 DeepSeek API 与本机 Codex 双 Provider',
      '多轮自动联网搜索、结果累积与来源去重；嵌套 Skill 包按需加载',
      '通过 MCP Server 对外暴露 7 个工具，可被其他 Agent 复用',
      '205 个测试，GitHub Actions 跑 lint 与覆盖率',
    ],
    category: 'AI Agent 与开源工具',
  },
  {
    name: 'Motif 母题',
    description: '开源前端设计素材市场：UI 组件、动效、Shader 与 Agent Skill，可实时调参、导出代码，或让 Agent 通过 MCP 检索下单。',
    url: 'https://github.com/aimerfeng/motif',
    status: '开源 · 规划 NFT 化后上线',
    techStack: ['Next.js 16', 'Vercel AI SDK', 'MCP', 'esbuild', 'Solidity', 'viem'],
    highlights: [
      '整合并重新打磨 145 个组件 / 动效 / 区块条目，参数面板由条目定义自动生成，可导出 zip 或 shadcn registry',
      'Studio Agent 生成组件后走与站点同一套 checker / compiler 校验，出错自修并截图自查',
      'MCP 商店（6 个工具）+ llms.txt，153 个可一键安装的 Agent Skill',
      '链上 DAO 审核社区（Registry、Curation、Governor 等 6 个合约）',
    ],
    category: 'AI Agent 与开源工具',
  },
  {
    name: 'IELTS Study OS',
    description: '本地优先的单用户雅思学习系统：SRS 背词、听读练习、写作 AI 批改、机考模拟与 AI 教练。',
    url: 'https://github.com/aimerfeng/ists',
    status: '开源',
    techStack: ['Next.js 16', 'React 19', 'SQLite', 'Zod', 'OpenAI API', 'Docker'],
    highlights: [
      '支持文本 / PDF / DOCX / 图片 / 音频导入，AI 生成可编辑的练习题',
      'AI Provider 按配置顺序回退，全部失败时降级到确定性本地逻辑，已保存内容不丢',
      'SM-2 变体间隔重复与评分逻辑为纯函数领域层；以 ADR 记录关键架构决策',
    ],
    category: 'AI Agent 与开源工具',
  },
  // 全栈产品与图形
  {
    name: '闪卡 Shanka',
    description: '上传图片或 AI 生图制作随手机倾斜流光的镭射闪卡，含拟真开包、图鉴与分享；一套代码出微信小程序与 iOS App。',
    status: '个人项目 · 私有仓库',
    techStack: ['微信小程序', 'WebGL / GLSL', '微信云开发', 'Capacitor', 'gpt-image'],
    highlights: [
      '自研平台无关的 WebGL 渲染引擎：88 种镭射着色风格、8 档稀有度，卡背全部程序化绘制',
      '纯 JS 实现端侧 GrabCut 抠图，在 Worker 中运行、零依赖',
      'AI 制卡对话每轮输出结构化 JSON，配合盲盒与积分定价模型',
      '发布脚本自动隔离并校验密钥；36 个测试套件',
    ],
    category: '全栈产品与图形',
  },
  {
    name: '亲小说 v2',
    description: '网络小说平台二期重构：读者端、作者工作台与运营后台，已具备生产形态，待部署推广。',
    status: '个人项目 · 私有仓库',
    techStack: ['Next.js 15', 'Drizzle', 'PostgreSQL', 'Tiptap + Yjs', 'Turborepo', 'Docker'],
    highlights: [
      '为书稿实现类 Git 版本控制：分支、提交、三方合并冲突会话、快照 GC，基于 PG 引用 CAS 与 advisory lock',
      'Tiptap + Yjs 协同编辑；AI 写作对话、行内建议与设定一致性检查，Agent 草稿提案 + 人工审批',
      '约 1300 个测试用例；CI 覆盖迁移校验、PG 契约测试、Docker 镜像构建与容器冒烟',
    ],
    category: '全栈产品与图形',
  },
  {
    name: 'LOOM 命运织者',
    description: 'Unity 实时牌组动作 Roguelite 垂直切片，评估投入产出后暂停。',
    status: '技术探索 · 已暂停',
    techStack: ['Unity 6', 'URP', 'C#', 'Python'],
    highlights: [
      '箱庭楼层规划、流场寻路与视线、后台存档与检查点，随机种子可复现',
      '内容表经 Python 管线导出；无头 C# 检查工程 + 260+ 个 pytest 保证内容一致性',
      '手写版画排线风格 Shader',
    ],
    category: '全栈产品与图形',
  },
  // 早期项目
  {
    name: 'AI Smart Wallet',
    description: '智能合约钱包，结合 AI 意图解析、ZK 隐私策略与社交恢复。',
    url: 'https://github.com/aimerfeng/AI-Smart-Wallet',
    status: '开源',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'ERC-4337'],
    highlights: [
      '实现 ERC-4337 账户抽象，支持自然语言意图解析交易',
      '社交恢复与守护者机制，ZK 隐私策略保护交易信息',
    ],
    category: '早期项目',
  },
  {
    name: 'Vue Web3 Tip',
    description: 'Vue 3 多链打赏组件，支持 Ethereum、Polygon 与 Solana。',
    url: 'https://github.com/aimerfeng/vue-web3-tip',
    status: '开源 · npm 包',
    techStack: ['Vue 3', 'TypeScript', 'Ethers.js', 'Web3.js'],
    highlights: [
      '集成 MetaMask 与 Phantom 钱包，支持样式自定义与预设金额',
      '已发布为 npm 包，用于个人博客打赏',
    ],
    category: '早期项目',
  },
  {
    name: 'HR QA System',
    description: '智能 HR 问答系统，语义匹配 + LLM 双通道架构。',
    url: 'https://github.com/aimerfeng/hr-qa-system',
    status: '开源',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Vue 3'],
    highlights: [
      '语义匹配命中优先，未命中再走 LLM，支持 GPT / Claude / Gemini 多模型对比',
      '知识库管理与向量检索，前后端分离、Docker 部署',
    ],
    category: '早期项目',
  },
]

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
          <div :class="categoryIcons[category] ?? 'i-carbon-globe'" />
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
                <div class="flex flex-wrap items-center gap-2">
                  <h4 class="font-semibold">{{ project.name }}</h4>
                  <span class="project-status text-xs">{{ project.status }}</span>
                </div>
                <a
                  v-if="project.url"
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
.project-status {
  border: 1px solid rgb(148 163 184 / 0.35);
  border-radius: 9999px;
  padding: 0.1rem 0.55rem;
  color: rgb(100 116 139);
  white-space: nowrap;
}

:global(.dark) .project-status {
  color: rgb(148 163 184);
}

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

@media (max-width: 640px) {
  .project-item {
    width: 100%;
  }

  .project-card {
    padding: 0.95rem !important;
  }

  .project-card h4 {
    font-size: 0.98rem;
  }

  .project-card ul {
    gap: 0.45rem;
  }

  .project-chip {
    padding: 0.34rem 0.58rem;
    font-size: 0.68rem;
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
