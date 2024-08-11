import type { Preflight } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import {
  blueP3 as blue,
  blueDarkP3 as blueDark,
  slateP3 as slate,
  slateDarkP3 as slateDark,
  yellowP3 as yellow,
  yellowDarkP3 as yellowDark,
} from '@radix-ui/colors'

const css = String.raw

const colorsToCSS = (colors: Record<string, string>, key: string) =>
  Object.entries(colors)
    .map(([_, color], i) => `--${key}-${i + 1}:${color}`).join(';')

// TODO: theme option
export const preflightTheme = (): Preflight<Theme> => ({
  getCSS: () => css`
:root, .light, [data-theme="light"] {
  ${colorsToCSS(blue, 'primary')};
  ${colorsToCSS(yellow, 'secondary')};
  ${colorsToCSS(slate, 'neutral')};
}

.dark, [data-theme="dark"] {
  ${colorsToCSS(blueDark, 'primary')};
  ${colorsToCSS(yellowDark, 'secondary')};
  ${colorsToCSS(slateDark, 'neutral')};
}
`,
})
