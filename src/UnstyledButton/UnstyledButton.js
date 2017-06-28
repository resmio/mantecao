import React from 'react'
import PropTypes from 'prop-types'

const defaultStyle = {
  cursor: 'pointer'
}

/**
 * onClick wrapper that takes some styles if needed
 */
const UnstyledButton = props =>
  <div onClick={props.onClick} style={defaultStyle}>
    {props.children}
  </div>

UnstyledButton.propTypes = {
  onClick: PropTypes.func
}

export default UnstyledButton
