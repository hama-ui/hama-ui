import type { Theme } from '@unocss/preset-mini'

import type { PresetHamaOptions } from '..'

import { boxShadow } from './box-shadow'
import { type PresetHamaThemeColorsOptions, themeColors } from './colors'

export interface PresetHamaThemeOptions {
  colors?: PresetHamaThemeColorsOptions
}

export const theme = (option: PresetHamaThemeOptions = {}, prefix?: PresetHamaOptions['prefix']): Theme => ({
  boxShadow,
  colors: themeColors(option.colors, prefix),
})
