import { definePreset } from '@unocss/core'
import { presetAttributify } from '@unocss/preset-attributify'
import { presetMini } from '@unocss/preset-mini'
// https://github.com/unocss/unocss/pull/4053
import presetWebFonts from '@unocss/preset-web-fonts'

import { shortcuts } from './shortcuts'

export interface PresetHamaOptions {
  prefix?: `${string}-`
}

export const presetHama = definePreset((_options: PresetHamaOptions = {}) => ({
  name: '@hama-ui/preset',
  presets: [
    presetMini(),
    presetAttributify(),
    presetWebFonts(),
  ],
  shortcuts,
}))

export default presetHama
