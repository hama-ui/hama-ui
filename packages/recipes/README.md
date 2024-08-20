# @hama-ui/recipes

## Install

```bash
pnpm add -D @hama-ui/recipes
```

## Usage

```tsx
import type { VariantProps } from 'cva'

import { button } from '@hama-ui/recipes'
import { useState } from 'react'

export const Counter = ({ size, variant }: VariantProps<typeof button.variants>) => {
  const [count, setCount] = useState(0)

  return (
    <button
      className={button.variants({ size, variant })}
      onClick={() => setCount(count => count + 1)}
    >
      {count}
    </button>
  )
}
```

## License

[MIT](../../LICENSE.md)
