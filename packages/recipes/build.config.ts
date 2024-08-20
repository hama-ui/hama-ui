import { defineBuildConfig } from 'unbuild'

import buildConfig from '../../build.config'

export default defineBuildConfig({
  ...buildConfig[0],
  entries: [
    './src/index',
    {
      input: './src/components/',
      outDir: './dist/components',
    },
  ],
})
