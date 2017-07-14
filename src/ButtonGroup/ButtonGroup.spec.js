import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import ButtonGroup from './ButtonGroup'
import ButtonGroupItem from './_ButtonGroupItem'

describe('ButtonGroup Component', () => {
  it('renders the correct selected and unselected things', () => {
    const tree = renderer
      .create(
        <ButtonGroup
          options={[1, 2, 3, 4, 5]}
          optionValues={['a', 'b', 'c', 'd', 'e']}
          selected={[1, 4, 5]}
          onChange={() => false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders properly with all selected', () => {
    const tree = renderer
      .create(
        <ButtonGroup
          options={[1, 2, 3, 4, 5]}
          optionValues={['a', 'b', 'c', 'd', 'e']}
          selected={[1, 2, 3, 4, 5]}
          onChange={() => false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders properly with none selected', () => {
    const tree = renderer
      .create(
        <ButtonGroup
          options={[1, 2, 3, 4, 5]}
          optionValues={['a', 'b', 'c', 'd', 'e']}
          selected={[]}
          onChange={() => false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders properly disabled', () => {
    const tree = renderer
      .create(
        <ButtonGroup
          options={[1, 2, 3, 4, 5]}
          optionValues={['a', 'b', 'c', 'd', 'e']}
          selected={[1, 4, 5]}
          onChange={() => false}
          disabled
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('fires onChange function properly', () => {
    const spy = jest.fn()
    const component = shallow(
      <ButtonGroup
        options={[1, 2, 3, 4, 5]}
        optionValues={['a', 'b', 'c', 'd', 'e']}
        selected={[1, 4, 5]}
        onChange={spy}
        disabled
      />
    )
    const firstItem = component.find(ButtonGroupItem).first()
    firstItem.props().onSelect(firstItem.props().value)
    expect(spy.mock.calls[0][0]).toEqual([4, 5])
  })
})
