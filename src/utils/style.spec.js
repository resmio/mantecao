import { media } from './style'
import { breakpoints } from '../variables'

describe('media', () => {
  it('Ouputs an an object with breakpoint based media queries', () => {
    const actual = Object.keys(media)
    const expected = Object.keys(breakpoints)
    expect(actual).toEqual(expected)
  })

  it('Provides a media query for a given breakpoint', () => {
    // take the first breakpoint and test it
    const keys = Object.keys(breakpoints)
    const first = keys[0]
    const actualQuery = media[first]`style: 0;`
    // because of the tagged template literals: https://www.styled-components.com/docs/advanced#tagged-template-literals
    const actual = actualQuery.map(line => line.trim()).join('')
    const expected = `@media (min-width:${breakpoints[first]}) {style: 0;}`
    expect(actual).toEqual(expected)
  })
})
