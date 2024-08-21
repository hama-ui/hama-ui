import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { Avatar } from '@hama-ui/recipes'

export const avatar: UserShortcuts<Theme> = [
  {
    'avatar': Avatar.Root.variants(),
    'avatar-base': [
      ...Avatar.Root.base,
      Avatar.Root.size.md,
    ].join(' '),
    // size
    'avatar-lg': Avatar.Root.size.lg,
    'avatar-md': Avatar.Root.size.md,
    'avatar-sm': Avatar.Root.size.sm,
    // variant
  },
]
