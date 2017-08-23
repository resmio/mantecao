import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Popover from './Popover'

describe('Popover Component', () => {
  it('renders properly when not shown', () => {
    const tree = renderer
      .create(<Popover onClose={() => false}><div>child</div></Popover>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders properly with show prop', () => {
    const tree = renderer
      .create(<Popover onClose={() => false} show><div>child</div></Popover>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders properly with showBackdrop prop', () => {
    const tree = renderer
      .create(<Popover onClose={() => false} show showBackdrop><div>child</div></Popover>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('fires onClose when backdrop is clicked', () => {
    const spy = jest.fn()
    const component = mount(
      <Popover onClose={spy} show showBackdrop><div>child</div></Popover>
    )
    expect(spy.mock.calls.length).toEqual(0)
    component.find('div').first().simulate('click')
    expect(spy.mock.calls.length).toEqual(1)
  })

  it('does not fire onClose when child is clicked', () => {
    const spy = jest.fn()
    const component = mount(
      <Popover onClose={spy} show showBackdrop><div>child</div></Popover>
    )
    expect(spy.mock.calls.length).toEqual(0)
    component.children().first().find('div').first().simulate('click')
    expect(spy.mock.calls.length).toEqual(1)
  })
})
