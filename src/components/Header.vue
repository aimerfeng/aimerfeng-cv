<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { ref } from 'vue'
import { profile } from '../data/site'

const isDark = useDark()
const githubUsername = 'aimerfeng'
const githubStatsBaseUrl = 'https://github-readme-stats-omega-black-83.vercel.app'
const snakeSvgDark = 'https://github.com/aimerfeng/aimerfeng/raw/output/github-contribution-grid-snake-dark.svg'
const snakeSvgLight = 'https://github.com/aimerfeng/aimerfeng/raw/output/github-contribution-grid-snake.svg'

const cardRef = ref<HTMLElement | null>(null)
const isFlipped = ref(false)
const leaveTimer = ref<number | null>(null)
const canHover = typeof window !== 'undefined'
  && window.matchMedia('(hover: hover) and (pointer: fine)').matches

function handleEnter() {
  if (!canHover) return

  if (leaveTimer.value !== null) {
    window.clearTimeout(leaveTimer.value)
    leaveTimer.value = null
  }

  isFlipped.value = true
}

function handleLeave() {
  if (!canHover) return

  resetTilt()
  if (leaveTimer.value !== null) {
    window.clearTimeout(leaveTimer.value)
  }

  leaveTimer.value = window.setTimeout(() => {
    isFlipped.value = false
    leaveTimer.value = null
  }, 120)
}

function handleMove(event: PointerEvent) {
  if (!canHover) return

  if (!cardRef.value || !isFlipped.value) return

  const rect = cardRef.value.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5
  cardRef.value.style.setProperty('--tilt-x', `${x * 5}deg`)
  cardRef.value.style.setProperty('--tilt-y', `${-y * 5}deg`)
}

function resetTilt() {
  if (!cardRef.value) return
  cardRef.value.style.setProperty('--tilt-x', '0deg')
  cardRef.value.style.setProperty('--tilt-y', '0deg')
}

function toggleFlip() {
  if (leaveTimer.value !== null) {
    window.clearTimeout(leaveTimer.value)
    leaveTimer.value = null
  }

  resetTilt()
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <header
    ref="cardRef"
    class="hero-3d"
    :class="{ flipped: isFlipped }"
    @pointerenter="handleEnter"
    @pointerleave="handleLeave"
    @pointermove="handleMove"
    @pointercancel="handleLeave"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
  >
    <div class="hero-3d-inner">
      <section class="hero-face hero-front card-surface px-6 py-6 sm:px-7 sm:py-7">
        <div class="flex flex-col gap-5">
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h1 class="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight">
              {{ profile.displayName }}
            </h1>
            <span class="text-lg text-light">/ {{ profile.chineseName }}</span>
          </div>

          <div class="flex flex-wrap items-center gap-3 text-sm text-light">
            <span class="chip-pill">
              <div class="i-carbon-location" />
              {{ profile.location }}
            </span>
            <span class="chip-pill">
              <div class="i-carbon-machine-learning" />
              {{ profile.tags[1] }}
            </span>
          </div>

          <p class="max-w-2xl text-[1.02rem] leading-8 text-[var(--c-text)]/85">
            {{ profile.summary }}
          </p>
        </div>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tag in profile.tags"
            :key="tag"
            class="chip-pill"
          >
            {{ tag }}
          </span>
        </div>

        <p class="mt-6 max-w-2xl border-l-2 border-blue-500/40 pl-4 text-sm italic text-light">
          "用清晰的表达和可落地的实现，把想法变成能交付的产品。"
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <span class="hero-hint text-xs uppercase tracking-[0.18em] text-light">
            hover to flip
          </span>
          <template v-for="link in profile.socialLinks" :key="link.url">
            <a
              v-if="!link.isWeChat"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-btn"
              :title="link.title"
            >
              <div :class="link.icon" class="text-xl" />
            </a>
            <div
              v-else
              class="icon-btn relative group"
              :title="link.title"
            >
              <div :class="link.icon" class="text-xl" />
              <div class="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-2.5 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-white dark:text-slate-900">
                {{ link.popupText }}
              </div>
            </div>
          </template>
        </div>
      </section>

      <section class="hero-face hero-back card-surface px-6 py-6 sm:px-7 sm:py-7">
        <div class="hero-back-grid">
          <div class="hero-back-stats">
            <a :href="`https://github.com/${githubUsername}`" target="_blank" rel="noopener noreferrer" class="block">
              <img
                :src="isDark ? snakeSvgDark : snakeSvgLight"
                alt="GitHub contribution snake"
                class="w-full rounded-2xl"
                loading="lazy"
              />
            </a>
            <div class="hero-back-stats-grid">
              <a :href="`https://github.com/${githubUsername}`" target="_blank" rel="noopener noreferrer" class="hero-back-stat">
                <img
                  :src="`${githubStatsBaseUrl}/api?username=${githubUsername}&show_icons=true&count_private=true&include_all_commits=true&theme=${isDark ? 'dark' : 'default'}&hide_border=true&bg_color=ffffff00`"
                  alt="GitHub stats"
                  class="w-full"
                  loading="lazy"
                />
              </a>
              <a :href="`https://github.com/${githubUsername}`" target="_blank" rel="noopener noreferrer" class="hero-back-stat">
                <img
                  :src="`${githubStatsBaseUrl}/api/top-langs/?username=${githubUsername}&layout=compact&count_private=true&theme=${isDark ? 'dark' : 'default'}&hide_border=true&bg_color=ffffff00`"
                  alt="Top languages"
                  class="w-full"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="hero-mobile-actions no-print">
      <button
        type="button"
        class="hero-flip-btn icon-btn"
        :aria-pressed="isFlipped"
        :aria-label="isFlipped ? '返回简介' : '查看 GitHub 面板'"
        title="翻面"
        @click="toggleFlip"
      >
        <div class="i-carbon-flip-vertical text-xl" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.hero-3d {
  position: relative;
  perspective: 1600px;
  transform-style: preserve-3d;
  border-radius: 1.5rem;
  --tilt-x: 0deg;
  --tilt-y: 0deg;
}

.hero-3d-inner {
  position: relative;
  min-height: 26rem;
  transform-style: preserve-3d;
  transition:
    transform 520ms cubic-bezier(0.2, 0.85, 0.2, 1),
    min-height 520ms cubic-bezier(0.2, 0.85, 0.2, 1),
    box-shadow 520ms cubic-bezier(0.2, 0.85, 0.2, 1),
    filter 520ms cubic-bezier(0.2, 0.85, 0.2, 1);
  transform:
    rotateX(var(--tilt-y))
    rotateY(calc(var(--tilt-x) * -1));
}

.hero-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 640ms cubic-bezier(0.18, 0.88, 0.28, 1);
  pointer-events: none;
}

.hero-front {
  transform: rotateY(0deg) translateZ(0.02px);
  pointer-events: auto;
}

.hero-back {
  transform: rotateY(180deg) translateZ(0.02px);
}

.hero-3d:is(.flipped, :hover) .hero-3d-inner {
  transform:
    rotateX(var(--tilt-y))
    rotateY(calc(180deg + (var(--tilt-x) * -1)));
  box-shadow:
    0 32px 60px rgba(37, 99, 235, 0.14),
    0 8px 22px rgba(15, 23, 42, 0.08);
}

.hero-3d:is(.flipped, :hover) .hero-front {
  pointer-events: none;
}

.hero-3d:is(.flipped, :hover) .hero-back {
  pointer-events: auto;
}

.hero-back-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
  height: 100%;
}

.hero-back-stats {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.hero-back-stats > a:first-child img {
  max-height: 7rem;
  object-fit: contain;
}

.hero-back-stats-grid {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.hero-back-stat {
  overflow: hidden;
  border-radius: 1rem;
}

.hero-back-stat img {
  display: block;
  max-height: 9.5rem;
  object-fit: contain;
}

.hero-hint {
  margin-right: auto;
  padding-top: 0.25rem;
}

@media (max-width: 760px) {
  .hero-3d-inner {
    min-height: 32rem;
  }

  .hero-back-grid {
    grid-template-columns: 1fr;
  }

  .hero-back-stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-back-stats {
    gap: 0.65rem;
  }
}

@media (max-width: 560px) {
  .hero-3d-inner {
    min-height: 30rem;
  }

  .hero-mobile-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75rem;
  }

  .hero-flip-btn {
    width: 2.75rem;
    height: 2.75rem;
  }

  .hero-hint {
    display: none;
  }

  .hero-back-stats-grid {
    grid-template-columns: 1fr;
  }

  .hero-3d.flipped .hero-3d-inner {
    min-height: 43rem;
  }
}

@media (hover: none) and (pointer: coarse) {
  .hero-mobile-actions {
    display: flex;
  }
}

.hero-mobile-actions {
  display: none;
}

@media (max-width: 560px) {
  .hero-mobile-actions {
    display: flex;
    margin-top: 0.25rem;
  }
}
</style>
