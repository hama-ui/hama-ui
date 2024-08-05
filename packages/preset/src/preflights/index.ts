import type { Preflight } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { reset } from './reset'

export const preflights: Preflight<Theme>[] = [
  reset,
]
