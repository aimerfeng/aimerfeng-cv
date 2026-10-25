<script setup lang="ts">
import { categoryIcons, projects } from '../data/resume'
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
