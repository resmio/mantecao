import React from 'react'
import PropTypes from 'prop-types'

const Stepper = ({
  children,
  onClickAction,
  onDecreaseClick,
  onIncreaseClick
}) => {
  return (
    <div onClick={onClickAction}>
      {children}
      <span id="mantecao-stepper-inc" onClick={onIncreaseClick}>+</span>
      <span id="mantecao-stepper-dec" onClick={onDecreaseClick}>+</span>
    </div>
  )
}

Stepper.PropTypes = {
  children: PropTypes.node.isRequired,
  onClickAction: PropTypes.function,
  onIncreaseClick: PropTypes.function,
  onDecreaseClick: PropTypes.function
}

export default Stepper
