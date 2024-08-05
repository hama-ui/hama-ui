import type { Preflight } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import {
  indigoP3A as indigo,
  indigoDarkP3A as indigoDark,
  limeP3A as lime,
  limeDarkP3A as limeDark,
  slateP3A as slate,
  slateDarkP3A as slateDark,
} from '@radix-ui/colors'

const css = String.raw

const colorsToCSS = (colors: Record<string, string>, key: string) =>
  Object.entries(colors)
    .map(([_, color], i) => `--${key}-${i + 1}:${color}`).join(';')

// TODO: theme option
export const preflightTheme = (): Preflight<Theme> => ({
  getCSS: () => css`
:root, .light {
  ${colorsToCSS(indigo, 'primary')}
  ${colorsToCSS(lime, 'secondary')}
  ${colorsToCSS(slate, 'neutral')}
}

.dark {
  ${colorsToCSS(indigoDark, 'primary')}
  ${colorsToCSS(limeDark, 'secondary')}
  ${colorsToCSS(slateDark, 'neutral')}
}
`,
})
