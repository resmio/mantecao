import React from 'react'

const emptyFunction = () => {}

const StepperButton = ({ id, action, disabled, icon }) =>
  <span id={id} onClick={disabled ? emptyFunction : action}>
    {icon}
  </span>

export default StepperButton
