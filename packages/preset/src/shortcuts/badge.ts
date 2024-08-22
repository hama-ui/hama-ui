import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { Badge } from '@hama-ui/recipes'

export const badge: UserShortcuts<Theme> = [
  {
    'badge': Badge.Root.variants(),
    'badge-base': [
      Badge.Root.base,
      Badge.Root.size.md,
    ].join(' '),
    // size
    'badge-lg': Badge.Root.size.lg,
    'badge-md': Badge.Root.size.md,
    'badge-sm': Badge.Root.size.sm,
    // variant
    // eslint-disable-next-line perfectionist/sort-objects
    'badge-primary': Badge.Root.variant.primary.join(' '),
    'badge-secondary': Badge.Root.variant.secondary.join(' '),
  },
]
