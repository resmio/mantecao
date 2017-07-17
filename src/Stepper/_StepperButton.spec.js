import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import StepperButton from './_StepperButton'
import { EyeClosedIcon } from '../icons'

const ON_CLICK = jest.fn()
const ICON = <EyeClosedIcon small />
const ID = 'aloha'

describe('StepperButton', () => {
  let stepperButton

  beforeEach(() => {
    stepperButton = shallow(
      <StepperButton id={ID} action={ON_CLICK} icon={ICON} />
    )
  })

  it('Should render the icon passed as a prop', () => {
    expect(stepperButton.contains(ICON)).toBe(true)
  })

  it('Should render the id passed as a prop', () => {
    expect(stepperButton.is(`#${ID}`)).toBe(true)
  })

  it('Should run the OnClickAction passed as a prop when clicked', () => {
    stepperButton.simulate('click')
    expect(ON_CLICK).toHaveBeenCalled()
  })

  it('Should not fire the action if it is disabled', () => {
    ON_CLICK.mockClear()

    const disabledStepperButton = shallow(
      <StepperButton onClickAction={ON_CLICK} icon={ICON} disabled />
    )

    disabledStepperButton.simulate('click')

    expect(ON_CLICK).not.toBeCalled()
  })
})
