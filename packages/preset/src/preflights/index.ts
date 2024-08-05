import type { Preflight } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { preflightReset } from './reset'
import { preflightTheme } from './theme'

export const preflights: Preflight<Theme>[] = [
  preflightReset,
  preflightTheme(),
]
