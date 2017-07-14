import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renders with a label', () => {
    const tree = renderer
      .create(
        <Checkbox
          label="hello checkbox"
          onChange={() => false}
          checked={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without a label', () => {
    const tree = renderer
      .create(<Checkbox onChange={() => false} checked={true} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders checked', () => {
    const tree = renderer
      .create(
        <Checkbox
          label="hello checkbox"
          onChange={() => false}
          checked={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders unchecked', () => {
    const tree = renderer
      .create(
        <Checkbox
          label="hello checkbox"
          onChange={() => false}
          checked={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('changes state with a click', () => {})
})
