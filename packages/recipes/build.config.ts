import { fileURLToPath } from 'node:url'
import { defineBuildConfig } from 'unbuild'

import buildConfig from '../../build.config'

export default defineBuildConfig({
  ...buildConfig[0],
  alias: {
    '~': fileURLToPath(new URL('src', import.meta.url)),
  },
  // entries: [
  //   './src/index',
  //   {
  //     input: './src/components/',
  //     outDir: './dist/components',
  //   },
  // ],
})
