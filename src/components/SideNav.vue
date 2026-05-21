<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '../data/site'

const activeSection = ref('header')
const isExpanded = ref(false)

function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = id
  }
}

function handleScroll() {
  const sections = navItems.map(item => ({
    id: item.id,
    element: document.getElementById(item.id)
  })).filter(s => s.element)

  const scrollPosition = window.scrollY + 150

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.element && section.element.offsetTop <= scrollPosition) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="side-nav no-print"
    :class="{ expanded: isExpanded }"
    @mouseenter="isExpanded = true"
    @mouseleave="isExpanded = false"
  >
    <div class="nav-items">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="nav-item"
        :class="{ active: activeSection === item.id }"
        @click="scrollToSection(item.id)"
        :title="item.label"
      >
        <div :class="item.icon" class="nav-icon" />
        <span class="nav-label">{{ item.label }}</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.side-nav {
  position: fixed;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--c-border);
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(18px);
  transition: width 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
  width: 56px;
  overflow: hidden;
}

.side-nav.expanded {
  width: 144px;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 11px;
  border: none;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--c-text-light);
  text-align: left;
  white-space: nowrap;
}

.nav-item:hover {
  background: rgba(59, 130, 246, 0.08);
  color: var(--c-text);
}

.nav-item.active {
  background: rgba(59, 130, 246, 0.12);
  color: var(--c-primary);
}

.nav-icon {
  font-size: 17px;
  flex-shrink: 0;
}

.nav-label {
  font-size: 12px;
  font-weight: 500;
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.2s ease;
}

.side-nav.expanded .nav-label {
  opacity: 1;
  transform: translateX(0);
}

/* Hide on small screens */
@media (max-width: 1100px) {
  .side-nav {
    display: none;
  }
}

/* Dark mode adjustments */
html.dark .side-nav {
  background: rgba(15, 17, 21, 0.72);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
}
</style>
