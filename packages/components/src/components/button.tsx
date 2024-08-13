import { cva } from 'cva'

import type { Size } from '../types/size'

/** btn-base */
export const base = [
  'inline-flex',
  'items-center',
  'justify-center',
  'whitespace-nowrap',
  'rounded-md',
  'text-sm',
  'text-neutral-12',
  'font-medium',
  'border',
  'border-neutral-12',
  'transition-colors',
  'transition-shadow',
  'hover:shadow-hama1',
  'focus-visible:outline-none',
  'focus-visible:ring-1',
  'focus-visible:ring-neutral-12',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
] as const

export const size = {
  lg: 'h-10 px-8',
  md: 'h-9 px-4 py-2',
  sm: 'h-8 px-3 text-xs',
} as const satisfies Size

export const variant = {
  primary: [
    'bg-primary-7',
    'hover:bg-primary-8',
  ],
  secondary: [
    'bg-indigo-4',
    'hover:bg-indigo-5',
    // 'bg-secondary-9',
    // 'hover:bg-secondary-8',
  ],
} as const

export const variants = cva({
  base,
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  variants: {
    size,
    variant,
  },
})
