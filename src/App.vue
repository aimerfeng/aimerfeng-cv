<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import Header from './components/Header.vue'
import TechStack from './components/TechStack.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Articles from './components/Articles.vue'
import Footer from './components/Footer.vue'
import SideNav from './components/SideNav.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

function printResume() {
  window.print()
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Side Navigation -->
    <SideNav />

    <!-- Dark mode toggle -->
    <button
      class="fixed top-4 right-4 z-50 icon-btn no-print"
      @click="toggleDark()"
      :title="isDark ? '切换到亮色模式' : '切换到暗色模式'"
    >
      <div v-if="isDark" class="i-carbon-sun text-xl" />
      <div v-else class="i-carbon-moon text-xl" />
    </button>

    <!-- Print button -->
    <button
      class="fixed top-4 right-14 z-50 icon-btn no-print"
      @click="printResume"
      title="打印简历"
    >
      <div class="i-carbon-printer text-xl" />
    </button>

    <main class="mx-auto max-w-4xl space-y-12 px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
      <section id="header" class="scroll-mt-24">
        <Header />
      </section>
      <section id="tech-stack" class="scroll-mt-24">
        <TechStack />
      </section>
      <section id="experience" class="scroll-mt-24">
        <Experience />
      </section>
      <section id="projects" class="scroll-mt-24">
        <Projects />
      </section>
      <section id="education" class="scroll-mt-24">
        <Education />
      </section>
      <section id="articles" class="scroll-mt-24">
        <Articles />
      </section>
      <Footer />
    </main>
  </div>
</template>
