import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      sidebar: [
        {
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
            { label: 'Getting Started', slug: 'guides/getting-started' },
          ],
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
  ],
})
