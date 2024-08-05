import starlight from '@astrojs/starlight'
import unoCSS from '@unocss/astro'
import { defineConfig } from 'astro/config'
// @ts-expect-error missing types
import liveCode from 'astro-live-code'

import unoConfig from '../uno.config'

// https://astro.build/config
export default defineConfig({
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
        {
          autogenerate: { directory: 'reference' },
          label: 'Reference',
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
})
