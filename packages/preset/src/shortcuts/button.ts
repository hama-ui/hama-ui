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
    // eslint-disable-next-line perfectionist/sort-objects
    'btn-primary': Button.variant.primary.join(' '),
    'btn-secondary': Button.variant.secondary.join(' '),
  },
]
