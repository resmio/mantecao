import React from 'react'
import renderer from 'react-test-renderer'

import Select from './Select'

const ID = 'testId'
const NAME = 'testName'
const OPTIONS = ['1','2','3','4']
const VALUES = ['value1', 'value2', 'value3', 'value4']
const SELECTED = '3'
const ON_OPTION_CHANGE = jest.fn()

describe('Select', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Select
          id={ID}
          name={NAME}
          onOptionChange={ON_OPTION_CHANGE}
          options={OPTIONS}
          selected={SELECTED}
        />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders values if those are passed as props', () => {
    const tree = renderer
      .create(
        <Select
          onOptionChange={ON_OPTION_CHANGE}
          options={OPTIONS}
          selected={SELECTED}
          values={VALUES}
        />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('renders differently if it has an error', () => {
    const tree = renderer
      .create(
        <Select
          onOptionChange={ON_OPTION_CHANGE}
          options={OPTIONS}
          selected={SELECTED}
          hasError
        />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should fire the onOptionChange prop passing the value selected', () => {
    const tree = renderer
      .create(
        <Select
          onOptionChange={ON_OPTION_CHANGE}
          options={OPTIONS}
          selected={SELECTED}
        />).toJSON()

    tree.props.onChange()

    expect(tree).toMatchSnapshot()
    expect(ON_OPTION_CHANGE).toBeCalled()
  })
})
