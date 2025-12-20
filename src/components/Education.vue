<script setup lang="ts">
const education = {
  school: '西华师范大学',
  degree: '本科',
  major: '软件工程',
  period: '2020 - 2024',
  location: '四川南充',
}

const achievements = [
  {
    title: 'ACM-ICPC 四川省赛银牌',
    icon: 'i-carbon-trophy',
    description: '算法竞赛省级银牌，展现扎实的算法与数据结构功底',
    year: '2022',
  },
  {
    title: 'Codeforces Rating 1600+',
    icon: 'i-carbon-chart-line',
    description: '持续参与在线算法竞赛，保持算法思维的敏锐',
    year: '2021-2023',
  },
  {
    title: '校级程序设计竞赛一等奖',
    icon: 'i-carbon-star',
    description: '多次获得校内编程竞赛奖项',
    year: '2021',
  },
]
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title flex items-center gap-2">
      <div class="i-carbon-education" />
      教育经历
    </h2>

    <!-- 学校信息 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg mb-6">
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

    <!-- 竞赛成就 -->
    <h3 class="text-sm font-semibold text-light mb-3">竞赛与成就</h3>
    <div class="grid gap-4 md:grid-cols-3">
      <div
        v-for="achievement in achievements"
        :key="achievement.title"
        class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-yellow-500 transition-colors"
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
