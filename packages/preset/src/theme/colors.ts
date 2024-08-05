import type { Theme } from '@unocss/preset-mini'

import type { PresetHamaOptions } from '..'

type RadixColorKey = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type RadixColor = Record<RadixColorKey, string>
export interface PresetHamaThemeColorsOptions {
  neutral?: RadixColor
  primary?: RadixColor
  secondary?: RadixColor
}

const cssVariable = (key: keyof PresetHamaThemeColorsOptions, prefix?: PresetHamaOptions['prefix']) =>
  Object.fromEntries(Array.from({ length: 12 }, (_, i) => i + 1)
    .map(i => [i, `var(--${prefix ? `${prefix}-${key}` : key}-${i})`]))

export const themeColors = (option: PresetHamaThemeColorsOptions = {}, prefix?: PresetHamaOptions['prefix']): Theme['colors'] => ({
  // TODO: @radix-ui/colors/black
  black: {},
  neutral: option.neutral ?? cssVariable('neutral', prefix),
  primary: option.primary ?? cssVariable('primary', prefix),
  secondary: option.secondary ?? cssVariable('secondary', prefix),
  // TODO: @radix-ui/colors/white
  white: {},
})
