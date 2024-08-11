import { cva } from 'cva'

/** badge-base */
export const base = [
  'inline-flex',
  'items-center',
  'rounded-full',
  'text-neutral-12',
  'font-semibold',
  'border',
  'border-neutral-12',
  'transition-colors',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-neutral-12',
  'focus:ring-offset-2',
] as const

export const size = {
  lg: 'px-4 py-1.5',
  md: 'px-3 py-1 text-sm',
  sm: 'px-2.5 py-0.5 text-xs',
} as const

export const variant = {
  primary: [
    'bg-primary-7',
    'hover:bg-primary-8',
  ],
  secondary: [
    'bg-secondary-7',
    'hover:bg-secondary-8',
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
