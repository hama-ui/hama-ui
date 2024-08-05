import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
// @ts-expect-error missing types
import liveCode from 'astro-live-code'

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
  ],
})
