import { cva } from 'cva'

import type { Size } from '~/types/size'

/** badge-base */
export const base = [
  'inline-flex',
  'items-center',
  'rounded-full',
  'text-surface-9',
  'border',
  'border-surface-9',
  'transition-colors',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-surface-9',
  'focus:ring-offset-2',
] as const

export const size = {
  lg: 'px-4 py-1 font-medium text-base',
  md: 'px-3 py-0.75 font-medium text-sm',
  sm: 'px-2.5 py-0.5 font-semibold text-xs',
} as const satisfies Size

export const variant = {
  primary: [
    'bg-primary-4',
    'hover:bg-primary-5',
  ],
  secondary: [
    'bg-secondary-4',
    'hover:bg-secondary-5',
  ],
} as const

export const variants = cva({
  base,
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
    size,
    variant,
  },
})
