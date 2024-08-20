import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'

import { presetHama } from '../src'

describe('@hama-ui/preset', () => {
  const uno = createGenerator({
    presets: [presetHama()],
  })

  it('preflights', async () => {
    const { css } = await uno.generate('')
    expect(css).toMatchSnapshot()
  })
})
