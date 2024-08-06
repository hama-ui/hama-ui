import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { cva } from 'cva'

const buttonVariants = cva({
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'whitespace-nowrap',
    'rounded-lg',
    'text-sm',
    'font-medium',
    'transition-colors',
    'transition-shadow',
  ],
  compoundVariants: [
    {
      size: 'md',
      variant: 'primary',
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  variants: {
    size: {
      lg: 'h-10 rounded-md px-8',
      md: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
    },
    variant: {
      primary: [
        'bg-primary-7',
        'text-neutral-12',
        'border',
        'border-neutral-12',
        'hover:bg-primary-8',
        'hover:shadow-hama1',
      ],
    },
  },
})

export const button: UserShortcuts<Theme> = [
  {
    btn: buttonVariants(),
  },
]
