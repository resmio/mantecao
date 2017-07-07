import React from 'react'
import PropTypes from 'prop-types'

const Stepper = ({ children, onClickAction }) => {
  return (
    <div onClick={onClickAction}>
      {children}
    </div>
  )
}

Stepper.PropTypes = {
  children: PropTypes.node.isRequired,
  onClickAction: PropTypes.function
}

export default Stepper
