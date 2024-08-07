import { cva } from 'cva'

/** btn-base */
export const base = [
  'inline-flex',
  'items-center',
  'justify-center',
  'whitespace-nowrap',
  'rounded-lg',
  'text-sm',
  'font-medium',
  'transition-colors',
  'transition-shadow',
]

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
