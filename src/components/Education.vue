<script setup lang="ts">
import { achievements, education } from '../data/resume'
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

<style scoped>
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .card-surface {
    padding: 0.95rem !important;
  }
}
</style>
