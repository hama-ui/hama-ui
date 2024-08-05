import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'

import { button } from './button'

export const shortcuts: UserShortcuts<Theme> = [
  button,
].flat()
