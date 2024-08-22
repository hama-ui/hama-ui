import { cva } from 'cva'

import { defineBase } from '~/utils'

/** avatar-base */
export const base = defineBase([
  'w-full',
  'h-full',
  'object-cover',
  'border-inherit',
])

export const variants = cva({ base })
