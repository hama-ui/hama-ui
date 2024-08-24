import type { StaticShortcutMap } from '@unocss/core'

import { avatar } from './avatar'
import { badge } from './badge'
import { button } from './button'

export const components: StaticShortcutMap = {
  ...avatar,
  ...badge,
  ...button,
}
