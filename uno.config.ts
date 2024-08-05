import { presetHama } from '@hama-ui/preset'
import { defineConfig } from '@unocss/vite'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.ts',
      ],
    },
  },
  presets: [presetHama()],
})
