import { colors, type Theme } from '@unocss/preset-mini'

type DefaultColors = keyof Omit<typeof colors, 'black' | 'current' | 'inherit' | 'transparent' | 'white'>

export interface PresetHamaThemeColorsOptions {
  neutral?: DefaultColors
  primary?: DefaultColors
  secondary?: DefaultColors
  tertiary?: DefaultColors
}

export const themeColors = (option: PresetHamaThemeColorsOptions = {}): Theme['colors'] => ({
  neutral: colors[option.neutral ?? 'slate'],
  primary: colors[option.primary ?? 'blue'],
  secondary: colors[option.secondary ?? 'yellow'],
  tertiary: colors[option.tertiary ?? 'lime'],
})
