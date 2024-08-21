/** @see {@link https://tailwindcss.com/docs/hover-focus-and-other-states} */
export interface States {
  active: `active:${string}`[]
  disabled: `disabled:${string}`[]
  focus: `focus:${string}`[]
  focusVisible: `focus-visible:${string}`[]
  hover: `hover:${string}`[]
}

export const defineBase = (base: string[], states: Partial<States> = {}) =>
  [...base, ...Object.values(states).flat()]
    .join(' ')
