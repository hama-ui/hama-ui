import { colors, type Theme } from '@unocss/preset-mini'

type BuiltinColor = keyof Omit<typeof colors, 'black' | 'current' | 'inherit' | 'transparent' | 'white'>

type ThemeColor = typeof colors['neutral']

type Color = BuiltinColor | ThemeColor

export interface PresetHamaThemeColorsOptions {
  primary?: Color
  secondary?: Color
  surface?: Color
}

const transformColor = (color: Color) =>
  color instanceof Object ? color : colors[color]

export const themeColors = (option: PresetHamaThemeColorsOptions = {}): Theme['colors'] => ({
  primary: option.primary ? transformColor(option.primary) : colors.purple,
  secondary: option.secondary ? transformColor(option.secondary) : colors.lime,
  surface: option.surface ? transformColor(option.surface) : colors.slate,
})
