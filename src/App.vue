<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import Header from './components/Header.vue'
import TechStack from './components/TechStack.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import GitHubContributions from './components/GitHubContributions.vue'
import Articles from './components/Articles.vue'
import Footer from './components/Footer.vue'
import SideNav from './components/SideNav.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
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
      @click="window.print()"
      title="打印简历"
    >
      <div class="i-carbon-printer text-xl" />
    </button>

    <main class="max-w-2xl mx-auto px-6 py-12">
      <section id="header">
        <Header />
      </section>
      <section id="tech-stack">
        <TechStack />
      </section>
      <section id="github">
        <GitHubContributions />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="articles">
        <Articles />
      </section>
      <Footer />
    </main>
  </div>
</template>
