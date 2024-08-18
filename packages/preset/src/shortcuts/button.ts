import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { button as Button } from '@hama-ui/components'

export const button: UserShortcuts<Theme> = [
  {
    'btn': Button.variants(),
    'btn-base': [
      ...Button.base,
      Button.size.md,
    ].join(' '),
    // size
    'btn-lg': Button.size.lg,
    'btn-md': Button.size.md,
    'btn-sm': Button.size.sm,
    // variant
    /* eslint-disable perfectionist/sort-objects */
    'btn-neutral': Button.variant.neutral.join(' '),
    'btn-primary': Button.variant.primary.join(' '),
    'btn-secondary': Button.variant.secondary.join(' '),
    'btn-outlined': Button.variant.outlined.join(' '),
    'btn-ghost': Button.variant.ghost.join(' '),
  },
]
