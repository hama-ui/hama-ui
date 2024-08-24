import type { StaticShortcutMap } from '@unocss/core'

import { Heading } from '@hama-ui/recipes'

export const heading: StaticShortcutMap = {
  'prose-h1': Heading.variants({ size: 1 }),
  'prose-h2': Heading.variants({ size: 2 }),
  'prose-h3': Heading.variants({ size: 3 }),
  'prose-h4': Heading.variants({ size: 4 }),
  'prose-h5': Heading.variants({ size: 5 }),
  'prose-h6': Heading.variants({ size: 6 }),
}
