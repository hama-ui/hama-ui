import type { StaticShortcutMap } from '@unocss/core'

import { Avatar } from '@hama-ui/recipes'

export const avatar: StaticShortcutMap = {
  'avatar': Avatar.Root.variants(),
  'avatar-base': [
    Avatar.Root.base,
    Avatar.Root.size.md,
  ].join(' '),
  // size
  'avatar-lg': Avatar.Root.size.lg,
  'avatar-md': Avatar.Root.size.md,
  'avatar-sm': Avatar.Root.size.sm,
  // variant
}
