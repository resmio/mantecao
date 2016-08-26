import React, { PropTypes } from 'react'

const defaultStyle = {
  cursor: 'pointer'
}

const UnstyledButton = (props) => (
  <div
    onClick={ props.onClick }
    style={ defaultStyle }
  >
    { props.children }
  </div>
)

UnstyledButton.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default UnstyledButton
