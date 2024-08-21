import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { badge as Badge } from '@hama-ui/recipes'

export const badge: UserShortcuts<Theme> = [
  {
    'badge': Badge.variants(),
    'badge-base': [
      ...Badge.base,
      Badge.size.md,
    ].join(' '),
    // size
    'badge-lg': Badge.size.lg,
    'badge-md': Badge.size.md,
    'badge-sm': Badge.size.sm,
    // variant
    // eslint-disable-next-line perfectionist/sort-objects
    'badge-primary': Badge.variant.primary.join(' '),
    'badge-secondary': Badge.variant.secondary.join(' '),
  },
]
