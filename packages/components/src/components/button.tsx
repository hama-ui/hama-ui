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
  'text-neutral-9',
  'font-medium',
  'border',
  'border-neutral-9',
  'transition-colors',
  'transition-shadow',
  'hover:shadow-hama1',
  'focus-visible:outline-none',
  'focus-visible:ring-1',
  'focus-visible:ring-neutral-9',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
] as const

export const size = {
  lg: 'h-10 px-8',
  md: 'h-9 px-4 py-2',
  sm: 'h-8 px-3 text-xs',
} as const satisfies Size

export const variant = {
  ghost: [
    'border-none',
    'hover:border',
    'hover:bg-black/05',
    '!hover:shadow-none',
  ],
  neutral: [
    'bg-neutral-1',
    'hover:bg-neutral-2',
  ],
  outlined: [],
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
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  variants: {
    size,
    variant,
  },
})
