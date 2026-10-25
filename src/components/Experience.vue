<script setup lang="ts">
import { experiences } from '../data/resume'
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
