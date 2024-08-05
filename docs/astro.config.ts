import starlight from '@astrojs/starlight'
import unoCSS from '@unocss/astro'
import { defineConfig } from 'astro/config'
// @ts-expect-error missing types
import liveCode from 'astro-live-code'
import restart from 'vite-plugin-restart'

import unoConfig from '../uno.config'

// https://astro.build/config
export default defineConfig({
  // TODO: remove this
  base: '/hama-ui/',
  integrations: [
    starlight({
      favicon: '/hama-ui.png',
      sidebar: [
        {
          autogenerate: { directory: 'guides' },
          label: 'Guides',
        },
        {
          autogenerate: { directory: 'components' },
          label: 'Components',
        },
      ],
      social: {
        github: 'https://github.com/hama-ui/hama-ui',
      },
      title: 'Hama UI',
    }),
    liveCode(),
    unoCSS(unoConfig),
  ],
  vite: { plugins: [
    restart({
      restart: [
        '../packages/preset/src/**/*.{ts,tsx}',
      ],
    }),
  ] },
})
