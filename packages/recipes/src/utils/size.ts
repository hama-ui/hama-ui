export interface Sizes {
  lg: string[]
  md: string[]
  sm: string[]
  xl?: string[]
  xs?: string[]
}

export const defineSize = (sizes: Sizes) => Object.fromEntries(
  Object.entries(sizes)
    .map(([k, v]) => [k, v.join(' ')]),
)
