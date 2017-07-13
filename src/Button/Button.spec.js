import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

const ON_CLICK_ACTION = jest.fn()

describe('Button Component', () => {
  it('renders properly with color prop', () => {
    const tree = renderer
      .create(<Button color="lemonchiffon">whatup</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders properly with hollow prop', () => {
    const tree = renderer.create(<Button hollow>whatup</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
