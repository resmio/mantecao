import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Stepper from './Stepper'

const ON_CLICK = jest.fn()
const INCREASE_ACTION = jest.fn()
const DECREASE_ACTION = jest.fn()

describe('Stepper', () => {
  let stepper

  beforeEach(() => {
    stepper = shallow(
      <Stepper
        onClickAction={ON_CLICK}
        onIncreaseClick={INCREASE_ACTION}
        onDecreaseClick={DECREASE_ACTION}
      >
        Click
      </Stepper>
    )
  })

  xit('Renders its children', () => {
    const tree = renderer
      .create(<Stepper>👶👶🏻👶🏼👶🏽👶🏾👶🏿</Stepper>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should run the OnClickAction passed as a prop when clicked', () => {
    stepper.simulate('click')
    expect(ON_CLICK).toHaveBeenCalled()
  })

  it('Should run the onIncreaseClick action when the inc button is clicked ', () => {
    stepper.find('#mantecao-stepper-inc').simulate('click')
    expect(INCREASE_ACTION).toBeCalled()
  })

  it('Should run the onDecreaseClick action when the inc button is clicked ', () => {
    stepper.find('#mantecao-stepper-dec').simulate('click')
    expect(DECREASE_ACTION).toBeCalled()
  })

  it('Should not run the onClickAction action when the inc button is clicked ', () => {
    ON_CLICK.mockClear()
    stepper.find('#mantecao-stepper-inc').simulate('click')
    expect(ON_CLICK).not.toBeCalled()
  })
})
