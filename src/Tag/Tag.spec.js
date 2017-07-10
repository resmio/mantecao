import React from 'react'
import renderer from 'react-test-renderer'
import Tag from './Tag'

const ON_CLICK_ACTION = jest.fn()

describe('Tag Component', () => {
  it('renders with no close button if not onCLickAction prop is passed', () => {
    const tree = renderer.create(<Tag name="tag 1" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with a close button if an onCLickAction prop is passed', () => {
    const tree = renderer
      .create(<Tag name="tag 1" onClickAction={ON_CLICK_ACTION} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // TODO
  it('fires the onClickAction function when the close button is pressed')
  it('changes the class of the component when the close button is hovered')
})
