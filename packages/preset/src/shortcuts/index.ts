import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { components } from './components'

export const shortcuts: UserShortcuts<Theme> = [
  components,
]
