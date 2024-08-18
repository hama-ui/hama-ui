import type { Preflight } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { preflightReset } from './reset'

export const preflights: Preflight<Theme>[] = [
  preflightReset,
]
