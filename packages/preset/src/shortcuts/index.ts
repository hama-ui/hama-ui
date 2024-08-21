import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { avatar } from './avatar'
import { badge } from './badge'
import { button } from './button'

export const shortcuts: UserShortcuts<Theme> = Object.values({
  avatar,
  badge,
  button,
}).flat()
