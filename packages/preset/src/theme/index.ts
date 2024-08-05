import type { PresetHamaOptions } from '..'

import { type PresetHamaThemeColorsOptions, themeColors } from './colors'

export interface PresetHamaThemeOptions {
  colors?: PresetHamaThemeColorsOptions
}

export const theme = (option: PresetHamaThemeOptions = {}, prefix?: PresetHamaOptions['prefix']) => ({
  colors: themeColors(option.colors, prefix),
})
