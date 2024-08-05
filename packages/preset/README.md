# @hama-ui/preset

## Install

```bash
pnpm add -D @hama-ui/preset
```

```ts
// uno.config.ts
import { presetHama } from '@hama-ui/preset'
import { defineConfig } from '@unocss/core'

export default defineConfig({
  presets: [
    presetHama(),
    // ...other presets
  ],
})
```

## License

[MIT](../../LICENSE.md)
