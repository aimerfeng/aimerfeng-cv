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
        sans: 'Inter:400,500,600,700',
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
    'icon-btn': 'op-70 hover:op-100 transition-opacity cursor-pointer',
    'section-title': 'text-lg font-semibold mb-4',
  },
})
