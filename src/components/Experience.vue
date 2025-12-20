<script setup lang="ts">
const experiences = [
  {
    company: '某量化科技公司',
    position: '全栈工程师 / 量化开发',
    period: '2023 - 至今',
    location: '成都',
    description: '负责量化投资回测系统的设计与开发',
    highlights: [
      '设计并实现了高性能的回测引擎，支持多策略并行回测',
      '构建了实时行情数据采集与处理管道，日处理数据量达百万级',
      '开发了策略可视化分析平台，支持收益曲线、风险指标等多维度分析',
      '优化系统性能，将回测速度提升 3 倍',
      '搭建了自动化交易执行系统，实现策略信号到订单的全流程自动化',
    ],
    techStack: ['Python', 'Node.js', 'PostgreSQL', 'Redis', 'Vue.js', 'Docker'],
  },
]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title flex items-center gap-2">
      <div class="i-carbon-building" />
      工作经历
    </h2>
    
    <div class="space-y-8">
      <div v-for="exp in experiences" :key="exp.company" class="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
        <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
        
        <div class="mb-2">
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
        
        <p class="text-light mb-3">{{ exp.description }}</p>
        
        <ul class="list-disc list-inside space-y-1 text-sm mb-4">
          <li v-for="highlight in exp.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
        
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in exp.techStack"
            :key="tech"
            class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
