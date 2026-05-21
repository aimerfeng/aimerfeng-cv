import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
    presetWebFonts({
      fonts: {
        sans: 'IBM Plex Sans:400,500,600,700',
        mono: 'Fira Code:400,500',
      },
    }),
  ],
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
  shortcuts: {
    'icon-btn': 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[var(--c-text)] shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white dark:border-gray-700 dark:bg-slate-900/70 dark:hover:border-blue-500',
    'section-title': 'mb-4 flex items-center gap-2 text-lg font-semibold',
    'card-surface': 'rounded-2xl border border-gray-200/80 bg-white/80 shadow-sm backdrop-blur-sm transition duration-200 dark:border-gray-700 dark:bg-slate-900/65',
    'chip-pill': 'inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 px-3 py-1.5 text-sm text-[var(--c-text)] transition-colors dark:border-gray-700 dark:bg-slate-800/70',
  },
})
