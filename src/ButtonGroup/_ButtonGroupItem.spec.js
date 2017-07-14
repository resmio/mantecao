import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import ButtonGroupItem from './_ButtonGroupItem'

describe('ButtonGroupItem Component', () => {
  it('renders a first button properly', () => {
    const tree = renderer
      .create(
        <ButtonGroupItem
          first={true}
          last={false}
          onSelect={() => false}
          selected={false}
          text={'whatup'}
          value={1}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a middle button properly', () => {
    const tree = renderer
      .create(
        <ButtonGroupItem
          first={false}
          last={false}
          onSelect={() => false}
          selected={false}
          text={'whatup'}
          value={1}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a last button properly', () => {
    const tree = renderer
      .create(
        <ButtonGroupItem
          first={false}
          last={true}
          onSelect={() => false}
          selected={false}
          text={'whatup'}
          value={1}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders properly disabled', () => {
    const tree = renderer
      .create(
        <ButtonGroupItem
          disabled
          first={false}
          last={true}
          onSelect={() => false}
          selected={false}
          text={'whatup'}
          value={1}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('fires onChange event properly', () => {
    const spy = jest.fn()
    const fakeValue = 1
    const component = shallow(
      <ButtonGroupItem
        disabled
        first={false}
        last={true}
        onSelect={spy}
        selected={false}
        text={'whatup'}
        value={fakeValue}
      />
    )
    component.simulate('click')
    expect(spy.mock.calls[0][0]).toEqual(fakeValue)
  })
})
