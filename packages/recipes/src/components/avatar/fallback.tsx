import { cva } from 'cva'

import { defineBase } from '~/utils'

/** avatar-base */
export const base = defineBase([
  'leading-1',
  'flex',
  'h-full',
  'w-full',
  'items-center',
  'justify-center',
  'text-base',
  'font-medium',
  // TODO: update color
  'bg-white',
  'text-surface-9',
])

export const variants = cva({ base })
