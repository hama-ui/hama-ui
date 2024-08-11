import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { badge } from './badge'
import { button } from './button'

export const shortcuts: UserShortcuts<Theme> = [
  badge,
  button,
].flat()
