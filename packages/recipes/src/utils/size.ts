export interface Sizes extends Record<string, string[]> {
  lg: string[]
  md: string[]
  sm: string[]
  // xl?: string[]
  // xs?: string[]
}

export const defineSize = <T extends Record<string, string[]> = Sizes>(sizes: T) => Object.fromEntries(
  Object.entries(sizes)
    .map(([k, v]) => [k, v.join(' ')]),
)
