import React from 'react'
import PropTypes from 'prop-types'
import { ArrowIcon } from '../icons'

const Stepper = ({
  children,
  customIcon,
  disabled,
  onClickAction,
  onDecreaseClick,
  onIncreaseClick
}) => {
  return (
    <div onClick={!disabled && onClickAction}>
      {children}
      {customIcon ? customIcon : <ArrowIcon small />}
      <span id="mantecao-stepper-inc" onClick={!disabled && onIncreaseClick}>
        <ArrowIcon small mirrorY />
      </span>
      <span id="mantecao-stepper-dec" onClick={!disabled && onDecreaseClick}>
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
