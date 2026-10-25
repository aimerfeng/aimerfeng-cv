<script setup lang="ts">
import { profile } from '../data/site'
import {
  achievements,
  education,
  experiences,
  pdfProfile,
  projects,
  skillLines,
  strengths,
} from '../data/resume'

const pdfExperiences = experiences.map(exp => ({
  ...exp,
  highlights: exp.highlights.slice(0, exp.pdfHighlights ?? exp.highlights.length),
}))

const pdfProjects = projects
  .filter(p => p.pdfHighlights)
  .map(p => ({ ...p, highlights: p.highlights.slice(0, p.pdfHighlights) }))

const homeUrl = import.meta.env.BASE_URL
const pdfUrl = `${import.meta.env.BASE_URL}AimerFeng-resume.pdf`

function printSheet() {
  window.print()
}
</script>

<template>
  <div class="toolbar no-print">
    <a :href="homeUrl" class="tool-link">← 返回在线简历</a>
    <div class="tool-actions">
      <a :href="pdfUrl" class="tool-btn" download="AimerFeng-AI全栈工程师-简历.pdf">下载 PDF</a>
      <button type="button" class="tool-btn tool-btn--ghost" @click="printSheet">打印</button>
    </div>
  </div>

  <article class="sheet">
    <header class="hd">
      <div class="hd-main">
        <h1 class="hd-name">
          {{ profile.displayName }}<span class="hd-alias">{{ profile.chineseName }}</span>
        </h1>
        <p class="hd-intent">
          <span class="hd-intent-label">求职意向</span>{{ pdfProfile.intent }}
          <span class="hd-city"><span class="dot">·</span>{{ pdfProfile.cities }}</span>
        </p>
      </div>
      <ul class="hd-contact">
        <li><span>邮箱</span>{{ pdfProfile.email }}</li>
        <li><span>微信</span>{{ pdfProfile.wechat }}</li>
        <li><span>GitHub</span>{{ pdfProfile.github }}</li>
        <li><span>在线简历</span>{{ pdfProfile.onlineResume }}</li>
      </ul>
    </header>

    <section class="sec">
      <h2 class="sec-title">个人优势</h2>
      <ul class="bullets">
        <li v-for="item in strengths" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="sec">
      <h2 class="sec-title">专业技能</h2>
      <dl class="skills">
        <template v-for="line in skillLines" :key="line.label">
          <dt>{{ line.label }}</dt>
          <dd>{{ line.text }}</dd>
        </template>
      </dl>
    </section>

    <section class="sec">
      <h2 class="sec-title">工作经历</h2>
      <div v-for="exp in pdfExperiences" :key="exp.company" class="entry">
        <div class="entry-head">
          <h3 class="entry-name">{{ exp.company }}</h3>
          <span class="entry-role">{{ exp.position }}</span>
          <span class="entry-time">{{ exp.period }} · {{ exp.location }}</span>
        </div>
        <ul class="bullets">
          <li v-for="item in exp.highlights" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="sec">
      <h2 class="sec-title">项目经历</h2>
      <div v-for="project in pdfProjects" :key="project.name" class="entry">
        <div class="entry-head">
          <h3 class="entry-name">{{ project.name }}</h3>
          <span class="entry-role">{{ project.status }}</span>
          <span v-if="project.url" class="entry-time">{{ project.url.replace('https://', '') }}</span>
        </div>
        <p class="entry-desc">{{ project.description }}</p>
        <ul class="bullets">
          <li v-for="item in project.highlights" :key="item">{{ item }}</li>
        </ul>
        <p class="entry-tech">{{ project.techStack.join(' / ') }}</p>
      </div>
    </section>

    <section class="sec">
      <h2 class="sec-title">教育背景</h2>
      <div class="entry">
        <div class="entry-head">
          <h3 class="entry-name">{{ education.school }}</h3>
          <span class="entry-role">{{ education.major }} · {{ education.degree }}</span>
          <span class="entry-time">{{ education.period }}</span>
        </div>
        <p class="honors">
          <span v-for="item in achievements" :key="item.title">{{ item.title }}（{{ item.year }}）</span>
        </p>
      </div>
    </section>
  </article>
</template>
