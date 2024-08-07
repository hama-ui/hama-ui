import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { button as Button } from '@hama-ui/components'

export const button: UserShortcuts<Theme> = [
  {
    btn: Button.variants(),
  },
]
