import { definePreset } from '@unocss/core'

export interface PresetHamaOptions {}

export const presetHama = definePreset((_options: PresetHamaOptions = {}) => ({
  name: '@hama-ui/preset-hama',
}))

export default presetHama
