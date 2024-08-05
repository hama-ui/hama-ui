import { definePreset } from '@unocss/core'
import { presetAttributify } from '@unocss/preset-attributify'
import { presetUno } from '@unocss/preset-uno'
// https://github.com/unocss/unocss/pull/4053
import presetWebFonts from '@unocss/preset-web-fonts'

import { shortcuts } from './shortcuts'

export interface PresetHamaOptions {
  prefix?: `${string}-`
}

export const presetHama = definePreset((_options: PresetHamaOptions = {}) => ({
  name: '@hama-ui/preset',
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts(),
  ],
  shortcuts,
}))

export default presetHama
