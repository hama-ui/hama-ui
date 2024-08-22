import { cva } from 'cva'

import { defineBase, defineSize } from '~/utils'

/** avatar-base */
export const base = defineBase([
  // 'relative',
  'inline-flex',
  'items-center',
  'justify-center',
  'overflow-hidden',
  'align-middle',
  'rounded-full',
  'border',
  'border-surface-9',
  'transition-all',
], {
  hover: ['hover:border-2'],
})

export const size = defineSize({
  lg: ['h-12', 'w-12'],
  md: ['h-10', 'w-10'],
  sm: ['h-8', 'w-8'],
})

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
