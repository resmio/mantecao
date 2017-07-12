import { css } from 'styled-components'
import { breakpoints } from '../variables'

export const media = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = (...args) => css`
    @media (min-width: ${breakpoints[breakpoint]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})
