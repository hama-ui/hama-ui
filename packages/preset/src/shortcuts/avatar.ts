import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import * as Avatar from '@hama-ui/recipes/components/avatar'

export const avatar: UserShortcuts<Theme> = [
  {
    'avatar': Avatar.variants(),
    'avatar-base': [
      ...Avatar.base,
      Avatar.size.md,
    ].join(' '),
    // size
    'avatar-lg': Avatar.size.lg,
    'avatar-md': Avatar.size.md,
    'avatar-sm': Avatar.size.sm,
    // variant
  },
]
