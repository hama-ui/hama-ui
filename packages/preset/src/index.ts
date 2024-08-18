import { definePreset } from '@unocss/core'
import { presetMini } from '@unocss/preset-mini'
// https://github.com/unocss/unocss/pull/4053
import presetWebFonts from '@unocss/preset-web-fonts'

import { preflights } from './preflights'
import { shortcuts } from './shortcuts'
import { type PresetHamaThemeOptions, theme } from './theme'

export interface PresetHamaOptions {
  // prefix?: `${string}-`
  theme?: PresetHamaThemeOptions
}

export const presetHama = definePreset((options: PresetHamaOptions = {}) => ({
  name: '@hama-ui/preset',
  preflights,
  presets: [
    presetMini(),
    presetWebFonts(),
  ],
  shortcuts,
  theme: theme(options.theme),
}))

export default presetHama
