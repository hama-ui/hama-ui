import type { Linter } from 'eslint'

import { antfu } from '@antfu/eslint-config'
import ii from '@importantimport/eslint-config'

export default antfu({
  astro: true,
  typescript: true,
  unocss: true,
}).append(ii({ functional: false })) as Linter.Config
