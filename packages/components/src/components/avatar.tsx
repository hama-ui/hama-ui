import { cva } from 'cva'

import type { Size } from '../types/size'

/** avatar-base */
export const base = [
  'relative',
  'flex',
  'shrink-0',
  'overflow-hidden',
  'rounded-full',
  'border',
  'border-neutral-12',
] as const

export const size = {
  lg: 'h-12 w-12',
  md: 'h-10 w-10',
  sm: 'h-8 w-8',
} as const satisfies Size

export const variants = cva({
  base,
  compoundVariants: [
    {
      size: 'md',
    },
  ],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size,
  },
})
