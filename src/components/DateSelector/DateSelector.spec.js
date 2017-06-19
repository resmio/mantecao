import React from 'react'
import renderer from 'react-test-renderer'
import DateSelector from './DateSelector'

const ON_CHANGE = jest.fn()
const DATE = '1984-03-19'

describe('Date Selector', () => {
  it('renders with no date when no date is passed as a prop', () => {
    const tree = renderer.create(
      <DateSelector onChange={ON_CHANGE} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders a date if you pass it as a prop', () => {
    const tree = renderer.create(
      <DateSelector date={DATE} onChange={ON_CHANGE} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders month before day if specified as a prop', () => {
    const tree = renderer.create(
      <DateSelector date={DATE} onChange={ON_CHANGE} monthBeforeDay />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('fires the onChange function everytime a field changes')
  it('returns no errors onChange if the date is valid')
  it('returns errors onChange if the date is invalid')
  it('highlights the field that contain errors')
})
