<script setup lang="ts">
const education = {
  school: '西华师范大学',
  degree: '本科',
  major: '软件工程',
  period: '2021 - 2025',
  location: '四川南充',
}

const achievements = [
  {
    title: 'ACM-ICPC 四川省赛银牌',
    icon: 'i-carbon-trophy',
    description: '算法竞赛省级银牌，体现扎实的数据结构与算法基础',
    year: '2022',
  },
  {
    title: 'Codeforces Rating 1600+',
    icon: 'i-carbon-chart-line',
    description: '持续参与在线算法竞赛，保持稳定的题感和思维训练',
    year: '2021-2023',
  },
  {
    title: '校级程序设计竞赛一等奖',
    icon: 'i-carbon-star',
    description: '多次获得校内编程竞赛奖项，具备较强的工程实现能力',
    year: '2021',
  },
]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title">
      <div class="i-carbon-education" />
      教育经历
    </h2>

    <div class="card-surface mb-6 p-5">
      <div class="flex items-start justify-between mb-2">
        <div>
          <h3 class="font-semibold text-lg">{{ education.school }}</h3>
          <p class="text-light">{{ education.major }} · {{ education.degree }}</p>
        </div>
        <div class="text-right text-sm text-light">
          <div>{{ education.period }}</div>
          <div class="flex items-center gap-1 justify-end">
            <div class="i-carbon-location text-xs" />
            {{ education.location }}
          </div>
        </div>
      </div>
    </div>

    <h3 class="mb-3 text-sm font-semibold text-light">竞赛与荣誉</h3>
    <div class="grid gap-4 md:grid-cols-3">
      <div
        v-for="achievement in achievements"
        :key="achievement.title"
        class="card-surface p-4 hover:-translate-y-0.5 hover:border-yellow-400/50"
      >
        <div class="flex items-center gap-2 mb-2">
          <div :class="achievement.icon" class="text-yellow-500 text-xl" />
          <span class="text-xs text-light">{{ achievement.year }}</span>
        </div>
        <h4 class="font-medium text-sm mb-1">{{ achievement.title }}</h4>
        <p class="text-xs text-light">{{ achievement.description }}</p>
      </div>
    </div>
  </section>
</template>
