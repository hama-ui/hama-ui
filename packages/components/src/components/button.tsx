import { cva } from 'cva'

/** btn-base */
export const base = [
  'inline-flex',
  'items-center',
  'justify-center',
  'whitespace-nowrap',
  'rounded-md',
  'text-sm',
  'font-medium',
  'transition-colors',
  'transition-shadow',
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
} as const

export const variant = {
  primary: [
    'bg-primary-7',
    'text-neutral-12',
    'border',
    'border-neutral-12',
    'hover:bg-primary-8',
    'hover:shadow-hama1',
  ],
  secondary: [
    'bg-secondary-7',
    'text-neutral-12',
    'border',
    'border-neutral-12',
    'hover:bg-secondary-8',
    'hover:shadow-hama1',
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
