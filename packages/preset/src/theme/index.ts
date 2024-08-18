import type { Theme } from '@unocss/preset-mini'

import { boxShadow } from './box-shadow'
import { type PresetHamaThemeColorsOptions, themeColors } from './colors'

export interface PresetHamaThemeOptions {
  colors?: PresetHamaThemeColorsOptions
}

export const theme = (option: PresetHamaThemeOptions = {}): Theme => ({
  boxShadow,
  colors: themeColors(option.colors),
})
