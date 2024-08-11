import { cva } from 'cva'

/** avatar-base */
export const base = [
  'relative',
  'flex',
  'shrink-0',
  'overflow-hidden',
  'rounded-full',
] as const

export const size = {
  lg: 'h-12 w-12',
  md: 'h-10 w-10',
  sm: 'h-8 w-8',
} as const

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
