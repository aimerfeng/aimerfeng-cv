<script setup lang="ts">
const experiences = [
  {
    company: '杭州流年光影传媒有限公司',
    position: 'AI 全栈开发 · 核心开发者',
    period: '2026.02 - 至今',
    location: '杭州',
    description: '公司 AI 创作产品线的核心开发者：从字字画布桌面版，到全新架构的 OmniBoard 创作平台（omniboard.tv），再到桌面端 AI 视频 Agent OmniCut。',
    highlights: [
      '主导 OmniBoard 全新架构重写并上线：集 AI 漫剧、剧本、分镜、视频于一体的无限画布工作台，贡献约 2/3 的代码提交',
      '设计画布命令总线与按成员 / 画布隔离的撤销历史；节点的类型化端口校验在 UI、API、Agent 三端共用一套规则',
      '搭建画布 Agent 与独立 Omni Agent（规划、流式响应、工具失败恢复），并通过工具清单向外部 Agent 开放 100+ 画布操作',
      '接入 Seedance、Kling、Wan、MiniMax、Qwen 等视频 / 图像 / 语音模型，配合 FFmpeg、TTS、视觉分析等 Serverless 媒体函数',
      '负责交付链路：k3s 滚动发布与数据库迁移 Job、国内 / 海外双版本、微信支付 + Stripe 计费，并为企业客户交付电商内容定制版',
      '独立开发 OmniCut：Electron 桌面端 + Agent Server，75 个剪辑工具、FFmpeg 滤镜图渲染、本地语音识别、7 类题材 Playbook',
      '早期负责字字画布 v1 / 2.0：Electron 桌面版持续迭代发布；2.0 抽离后端契约，支持桌面、嵌入、SaaS 等 6 种后端适配',
    ],
    techStack: ['TypeScript', 'React', 'React Flow', 'Fastify', 'PostgreSQL', 'Electron', 'LangGraph', 'FFmpeg', 'k3s'],
  },
  {
    company: '普特教育',
    position: 'AI 训练师',
    period: '2025.11 - 2026.01',
    location: '杭州',
    description: '负责 AI 训练相关工作，协助任务流与输出质量优化。',
    highlights: [
      '参与 AI 训练相关流程与内容整理',
      '支持任务流拆解、反馈整理和结果优化',
      '协助提升模型输出质量与工作流效率',
    ],
    techStack: ['AI 训练', 'Prompt', '数据整理', 'Workflow'],
  },
  {
    company: '钧誉资产科技有限公司',
    position: '全栈工程师 / 量化开发（实习）',
    period: '2024.06 - 2024.11',
    location: '成都',
    description: '实习期间负责量化投资回测系统的设计、开发与性能优化。',
    highlights: [
      '设计并实现高性能回测引擎，支持多策略并行回测',
      '构建实时行情采集与处理管道，支撑百万级日数据处理',
      '开发策略可视化分析平台，支持收益曲线与风险指标分析',
      '完成核心链路性能优化，将回测速度提升 3 倍',
      '搭建自动化交易执行流程，实现策略信号到订单的闭环',
    ],
    techStack: ['Python', 'Node.js', 'PostgreSQL', 'Redis', 'Vue.js', 'Docker'],
  },
]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title">
      <div class="i-carbon-building" />
      工作经历
    </h2>

    <div class="space-y-6">
      <article
        v-for="exp in experiences"
        :key="exp.company"
        class="experience-item group relative pl-7 sm:pl-8"
        tabindex="0"
      >
        <span class="experience-rail" />
        <span class="experience-node" />

        <div class="card-surface experience-card relative overflow-hidden px-5 py-5">
          <div class="mb-3">
            <h3 class="text-lg font-semibold">{{ exp.company }}</h3>
            <div class="flex flex-wrap items-center gap-2 text-sm text-light">
              <span>{{ exp.position }}</span>
              <span>·</span>
              <span>{{ exp.period }}</span>
              <span>·</span>
              <span class="flex items-center gap-1">
                <div class="i-carbon-location text-xs" />
                {{ exp.location }}
              </span>
            </div>
          </div>

          <p class="mb-4 text-[var(--c-text)]/80">{{ exp.description }}</p>

          <ul class="mb-4 space-y-2 text-sm text-[var(--c-text)]/90">
            <li v-for="highlight in exp.highlights" :key="highlight">
              <span class="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-500 align-middle" />
              {{ highlight }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in exp.techStack"
              :key="tech"
              class="chip-pill text-xs"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience-item {
  outline: none;
}

.experience-rail {
  position: absolute;
  left: 0.72rem;
  top: 0.9rem;
  bottom: 0.9rem;
  width: 1px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(59, 130, 246, 0.34), rgba(59, 130, 246, 0.04));
  opacity: 0.7;
}

.experience-node {
  position: absolute;
  left: 0.43rem;
  top: 1.45rem;
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(59, 130, 246, 0.22);
  background:
    radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.2) 42%, rgba(59, 130, 246, 0.92) 43%, rgba(59, 130, 246, 1) 100%);
  box-shadow:
    0 0 0 4px rgba(59, 130, 246, 0.08),
    0 8px 18px rgba(59, 130, 246, 0.12);
  transition:
    transform 260ms cubic-bezier(0.2, 0.85, 0.2, 1),
    box-shadow 220ms ease,
    opacity 220ms ease;
}

.experience-card {
  transform-style: preserve-3d;
  transition:
    transform 300ms cubic-bezier(0.2, 0.85, 0.2, 1),
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
}

.experience-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 18%, rgba(96, 165, 250, 0.16), transparent 36%),
    linear-gradient(135deg, rgba(59, 130, 246, 0.11), transparent 42%);
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}

.experience-card::after {
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

.experience-item:hover .experience-card,
.experience-item:focus-visible .experience-card {
  transform: perspective(900px) rotateX(1.4deg) rotateY(-1.2deg) translateY(-5px) translateZ(0);
  border-color: rgba(59, 130, 246, 0.42);
  background-color: rgba(239, 246, 255, 0.86);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.72) inset,
    0 24px 38px rgba(37, 99, 235, 0.14),
    0 8px 16px rgba(15, 23, 42, 0.06);
}

.experience-item:hover .experience-card::before,
.experience-item:focus-visible .experience-card::before {
  opacity: 1;
}

.experience-item:hover .experience-card::after,
.experience-item:focus-visible .experience-card::after {
  border-color: rgba(96, 165, 250, 0.2);
  box-shadow: inset 0 0 22px rgba(96, 165, 250, 0.08);
}

.experience-item:hover .experience-node,
.experience-item:focus-visible .experience-node {
  transform: translateY(-5px) scale(1.1);
  box-shadow:
    0 0 0 5px rgba(59, 130, 246, 0.12),
    0 10px 22px rgba(59, 130, 246, 0.18);
}

html.dark .experience-card {
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 10px 28px rgba(0, 0, 0, 0.16);
}

html.dark .experience-item:hover .experience-card,
html.dark .experience-item:focus-visible .experience-card {
  background-color: rgba(15, 23, 42, 0.9);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 24px 38px rgba(0, 0, 0, 0.34),
    0 8px 18px rgba(37, 99, 235, 0.12);
}

@media (hover: none) and (pointer: coarse) {
  .experience-card {
    transform: translateY(-1px);
  }

  .experience-node {
    transform: translateY(-4px) scale(1.08);
  }
}

@media (prefers-reduced-motion: reduce) {
  .experience-node,
  .experience-card {
    transition: none !important;
  }
}
</style>
