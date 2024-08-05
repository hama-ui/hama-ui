import type { Theme } from '@unocss/preset-mini'

import { blackP3A, whiteP3A } from '@radix-ui/colors'

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

const formatColors = (colors: Record<string, string>) =>
  Object.fromEntries(Object.entries(colors).map(([_, color], i) => [i + 1, color]))

export const themeColors = (option: PresetHamaThemeColorsOptions = {}, prefix?: PresetHamaOptions['prefix']): Theme['colors'] => ({
  black: formatColors(blackP3A),
  neutral: option.neutral ?? cssVariable('neutral', prefix),
  primary: option.primary ?? cssVariable('primary', prefix),
  secondary: option.secondary ?? cssVariable('secondary', prefix),
  white: formatColors(whiteP3A),
})
