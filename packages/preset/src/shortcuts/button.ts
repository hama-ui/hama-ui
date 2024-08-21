import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { Button } from '@hama-ui/recipes'

export const button: UserShortcuts<Theme> = [
  {
    'btn': Button.Root.variants(),
    'btn-base': [
      ...Button.Root.base,
      Button.Root.size.md,
    ].join(' '),
    // size
    'btn-lg': Button.Root.size.lg,
    'btn-md': Button.Root.size.md,
    'btn-sm': Button.Root.size.sm,
    // variant
    /* eslint-disable perfectionist/sort-objects */
    'btn-surface': Button.Root.variant.surface.join(' '),
    'btn-primary': Button.Root.variant.primary.join(' '),
    'btn-secondary': Button.Root.variant.secondary.join(' '),
    'btn-outlined': Button.Root.variant.outlined.join(' '),
  },
]
