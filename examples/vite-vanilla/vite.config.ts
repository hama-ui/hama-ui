import unoCSS from '@unocss/vite'
import { defineConfig } from 'vite'

import unoConfig from '../../uno.config'

export default defineConfig({
  plugins: [unoCSS(unoConfig)],
})
