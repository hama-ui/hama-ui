import type { Preflight } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import {
  indigoP3 as indigo,
  indigoDarkP3 as indigoDark,
  slateP3 as slate,
  slateDarkP3 as slateDark,
  tomatoP3 as tomato,
  tomatoDarkP3 as tomatoDark,
} from '@radix-ui/colors'

const css = String.raw

const colorsToCSS = (colors: Record<string, string>, key: string) =>
  Object.entries(colors)
    .map(([_, color], i) => `--${key}-${i + 1}:${color}`).join(';')

// TODO: theme option
export const preflightTheme = (): Preflight<Theme> => ({
  getCSS: () => css`
:root, .light, [data-theme="light"] {
  ${colorsToCSS(indigo, 'primary')};
  ${colorsToCSS(tomato, 'secondary')};
  ${colorsToCSS(slate, 'neutral')};
}

.dark, [data-theme="dark"] {
  ${colorsToCSS(indigoDark, 'primary')};
  ${colorsToCSS(tomatoDark, 'secondary')};
  ${colorsToCSS(slateDark, 'neutral')};
}
`,
})
