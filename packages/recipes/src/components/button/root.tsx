import { cva } from 'cva'

import type { Size } from '~/types/size'

/** btn-base */
export const base = [
  'inline-flex',
  'items-center',
  'justify-center',
  'whitespace-nowrap',
  'rounded-md',
  'text-surface-9',
  'font-medium',
  'border',
  'border-surface-9',
  'transition-all',
  'hover:shadow-hama1',
  'hover:-translate-x-1',
  'hover:-translate-y-1',
  'focus-visible:outline-none',
  'focus-visible:ring-1',
  'focus-visible:ring-surface-9',
  'active:translate-x-0',
  'active:translate-y-0',
  'active:shadow-none',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
] as const

export const size = {
  lg: 'h-10 px-8 text-base',
  md: 'h-9 px-4 py-2 text-sm',
  sm: 'h-8 px-3 text-xs',
} as const satisfies Size

export const variant = {
  outlined: [],
  primary: [
    'bg-primary-4',
  ],
  secondary: [
    'bg-secondary-4',
  ],
  surface: [
    'bg-surface-1',
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
