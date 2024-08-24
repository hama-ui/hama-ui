import type { StaticShortcutMap } from '@unocss/core'

import { Heading } from '@hama-ui/recipes'

export const heading: StaticShortcutMap = {
  h1: Heading.variants({ size: 1 }),
  h2: Heading.variants({ size: 2 }),
  h3: Heading.variants({ size: 3 }),
  h4: Heading.variants({ size: 4 }),
  h5: Heading.variants({ size: 5 }),
  h6: Heading.variants({ size: 6 }),
}
