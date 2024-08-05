import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { button } from './button'

export const shortcuts: UserShortcuts<Theme> = [
  button,
].flat()
