import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Stepper from './Stepper'

const ON_CLICK = jest.fn()

describe('Stepper', () => {
  xit('Renders its children', () => {
    const tree = renderer
      .create(<Stepper>👶👶🏻👶🏼👶🏽👶🏾👶🏿</Stepper>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should run the OnClickAction passed as a prop when clicked', () => {
    const stepper = shallow(<Stepper onClickAction={ON_CLICK}>Click</Stepper>)

    stepper.simulate('click')

    expect(ON_CLICK).toHaveBeenCalled()
  })
})
