<script setup lang="ts">
const techStacks = {
  'Languages': [
    { name: 'TypeScript', icon: 'i-logos-typescript-icon' },
    { name: 'Python', icon: 'i-logos-python' },
    { name: 'Solidity', icon: 'i-logos-solidity' },
    { name: 'JavaScript', icon: 'i-logos-javascript' },
    { name: 'Kotlin', icon: 'i-logos-kotlin-icon' },
    { name: 'C#', icon: 'i-logos-c-sharp' },
  ],
  'Frontend': [
    { name: 'Vue.js', icon: 'i-logos-vue' },
    { name: 'React', icon: 'i-logos-react' },
    { name: 'Vite', icon: 'i-logos-vitejs' },
    { name: 'UnoCSS', icon: 'i-logos-unocss' },
    { name: 'TailwindCSS', icon: 'i-logos-tailwindcss-icon' },
  ],
  'Backend & Runtime': [
    { name: 'Node.js', icon: 'i-logos-nodejs-icon' },
    { name: 'FastAPI', icon: 'i-logos-fastapi-icon' },
    { name: 'Express', icon: 'i-simple-icons-express' },
    { name: 'PostgreSQL', icon: 'i-logos-postgresql' },
    { name: 'Redis', icon: 'i-logos-redis' },
  ],
  'Blockchain & Web3': [
    { name: 'Ethereum', icon: 'i-logos-ethereum' },
    { name: 'Hardhat', icon: 'i-logos-hardhat-icon' },
    { name: 'Ethers.js', icon: 'i-logos-ethers' },
    { name: 'Web3.js', icon: 'i-simple-icons-web3dotjs' },
    { name: 'IPFS', icon: 'i-simple-icons-ipfs' },
  ],
  'AI & LLM': [
    { name: 'LangChain', icon: 'i-simple-icons-langchain' },
    { name: 'OpenAI', icon: 'i-simple-icons-openai' },
    { name: 'Gemini', icon: 'i-simple-icons-googlegemini' },
    { name: 'Hugging Face', icon: 'i-simple-icons-huggingface' },
    { name: 'PyTorch', icon: 'i-logos-pytorch-icon' },
  ],
  'Tools & DevOps': [
    { name: 'Git', icon: 'i-logos-git-icon' },
    { name: 'Docker', icon: 'i-logos-docker-icon' },
    { name: 'VS Code', icon: 'i-logos-visual-studio-code' },
    { name: 'Vercel', icon: 'i-logos-vercel-icon' },
    { name: 'Linux', icon: 'i-logos-linux-tux' },
  ],
}
</script>

<template>
  <section class="mb-12">
    <h2 class="section-title flex items-center gap-2">
      <div class="i-carbon-code" />
      Tech Stack
    </h2>
    
    <div class="space-y-6">
      <div v-for="(items, category) in techStacks" :key="category">
        <h3 class="text-sm text-light mb-2">{{ category }}</h3>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="tech in items"
            :key="tech.name"
            class="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :title="tech.name"
          >
            <div :class="tech.icon" class="text-lg" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
