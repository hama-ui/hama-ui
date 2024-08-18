import { colors, type Theme } from '@unocss/preset-mini'

type BuiltinColor = keyof Omit<typeof colors, 'black' | 'current' | 'inherit' | 'transparent' | 'white'>

type ThemeColor = typeof colors['neutral']

type Color = BuiltinColor | ThemeColor

export interface PresetHamaThemeColorsOptions {
  neutral?: Color
  primary?: Color
  secondary?: Color
}

const transformColor = (color: Color) =>
  color instanceof Object ? color : colors[color]

export const themeColors = (option: PresetHamaThemeColorsOptions = {}): Theme['colors'] => ({
  neutral: option.neutral ? transformColor(option.neutral) : colors.slate,
  primary: option.primary ? transformColor(option.primary) : colors.purple,
  secondary: option.secondary ? transformColor(option.secondary) : colors.lime,
})
