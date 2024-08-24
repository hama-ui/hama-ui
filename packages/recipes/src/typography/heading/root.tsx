import { cva } from 'cva'

import { defineBase, defineSize } from '~/utils'

export const base = defineBase([])

export const size = defineSize<Record<number, string[]>>({
  1: ['text-4xl'],
  2: ['text-3xl'],
  3: ['text-2xl'],
  4: ['text-xl'],
  5: ['text-lg'],
  6: ['text-sm'],
})

export const variants = cva({
  base,
  defaultVariants: {
    size: 2,
  },
  variants: {
    size,
  },
})
