import type { Preflight } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { tailwind } from './tailwind'

export const preflights: Preflight<Theme>[] = [
  tailwind,
]
