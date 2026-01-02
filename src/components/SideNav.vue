<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'header', icon: 'i-carbon-user', label: '简介' },
  { id: 'tech-stack', icon: 'i-carbon-code', label: '技术栈' },
  { id: 'github', icon: 'i-carbon-logo-github', label: 'GitHub' },
  { id: 'education', icon: 'i-carbon-education', label: '教育' },
  { id: 'experience', icon: 'i-carbon-building', label: '经历' },
  { id: 'projects', icon: 'i-carbon-cube', label: '项目' },
  { id: 'articles', icon: 'i-carbon-document', label: '文章' },
]

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
    
    <!-- Progress indicator -->
    <div class="nav-progress">
      <div 
        class="progress-dot"
        v-for="(item, index) in navItems"
        :key="item.id"
        :class="{ active: activeSection === item.id, passed: navItems.findIndex(n => n.id === activeSection) >= index }"
      />
    </div>
  </nav>
</template>

<style scoped>
.side-nav {
  position: fixed;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 8px;
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  width: 48px;
  overflow: hidden;
}

.side-nav.expanded {
  width: 120px;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: none;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--c-text-light);
  white-space: nowrap;
}

.nav-item:hover {
  background: var(--c-primary);
  background: rgba(59, 130, 246, 0.1);
  color: var(--c-primary);
}

.nav-item.active {
  background: var(--c-primary);
  color: white;
}

.nav-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.nav-label {
  font-size: 12px;
  font-weight: 500;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
}

.side-nav.expanded .nav-label {
  opacity: 1;
  transform: translateX(0);
}

.nav-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid var(--c-border);
  margin-top: 4px;
}

.progress-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-border);
  transition: all 0.2s ease;
}

.progress-dot.passed {
  background: var(--c-primary);
  opacity: 0.4;
}

.progress-dot.active {
  background: var(--c-primary);
  opacity: 1;
  transform: scale(1.3);
}

/* Hide on small screens */
@media (max-width: 1100px) {
  .side-nav {
    display: none;
  }
}

/* Dark mode adjustments */
html.dark .side-nav {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
</style>
