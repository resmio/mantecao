import React from 'react'
import PropTypes from 'prop-types'
import { ArrowIcon } from '../icons'

// TODO: move to utils
const _emptyFunction = () => {}

const stopPropagation = fn => e => {
  if (e) {
    e.stopPropagation()
  }
  fn()
}

const emptyFunctionWithNoPropagation = stopPropagation(_emptyFunction)

const Stepper = ({
  children,
  customIcon,
  disabled,
  onClickAction,
  onDecreaseClick,
  onIncreaseClick
}) => {
  let clickAction
  let increaseAction
  let decreaseAction

  if (!disabled) {
    clickAction = onClickAction
    increaseAction = stopPropagation(onIncreaseClick)
    decreaseAction = stopPropagation(onDecreaseClick)
  } else {
    clickAction = _emptyFunction
    increaseAction = emptyFunctionWithNoPropagation
    decreaseAction = emptyFunctionWithNoPropagation
  }

  return (
    <div onClick={clickAction}>
      {children}
      {customIcon ? customIcon : <ArrowIcon small />}
      <span id="mantecao-stepper-inc" onClick={increaseAction}>
        <ArrowIcon small mirrorY />
      </span>
      <span id="mantecao-stepper-dec" onClick={decreaseAction}>
        <ArrowIcon small />
      </span>
    </div>
  )
}

Stepper.PropTypes = {
  children: PropTypes.node.isRequired,
  customIcon: PropTypes.node,
  onClickAction: PropTypes.function,
  onIncreaseClick: PropTypes.function,
  onDecreaseClick: PropTypes.function
}

export default Stepper
