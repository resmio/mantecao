import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { EyeClosedIcon } from '../icons'

import Stepper from './Stepper'
import { StyledStepperButton, StyledExpander, StyledChildren } from './_Styled'

describe('Stepper', () => {
  it('renders its children', () => {
    const tree = renderer
      .create(
        <Stepper>
          👶👶🏻👶🏼👶🏽👶🏾👶🏿
        </Stepper>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders custom icons', () => {
    const tree = renderer
      .create(
        <Stepper
          decreaseIcon={<EyeClosedIcon small />}
          icon={<EyeClosedIcon small />}
          increaseIcon={<EyeClosedIcon small />}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with click handlers', () => {
    const tree = renderer
      .create(
        <Stepper
          onClick={jest.fn}
          onDecreaseClick={jest.fn}
          onIncreaseClick={jest.fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('fires onClick function properly', () => {
    const spy = jest.fn()
    const component = shallow(<Stepper onClick={spy} />)
    const children = component.find(StyledChildren)
    children.simulate('click')
    const expander = component.find(StyledExpander)
    expander.simulate('click')
    expect(spy.mock.calls.length).toEqual(2)
  })

  it('fires onIncreaseClick function properly', () => {
    const spy = jest.fn()
    const component = shallow(<Stepper onIncreaseClick={spy} />)
    const button = component.find(StyledStepperButton).first()
    button.simulate('click')
    expect(spy.mock.calls.length).toEqual(1)
  })

  it('fires onDecreaseClick function properly', () => {
    const spy = jest.fn()
    const component = shallow(<Stepper onDecreaseClick={spy} />)
    const button = component.find(StyledStepperButton).last()
    button.simulate('click')
    expect(spy.mock.calls.length).toEqual(1)
  })
})
