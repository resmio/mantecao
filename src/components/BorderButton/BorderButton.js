import React, { PropTypes } from 'react'
import { Button } from '../Button'

import { colors } from '../../variables'

const defaultStyle = {
  color: colors.alto,
  bgColor: colors.white
}

/**
 * A button with a border - color and bgColor set with props
 */
const BorderButton = props => {
  const color = props.color || defaultStyle.color
  const bgColor = props.bgColor || defaultStyle.bgColor
  return (
    <Button
      borderColor={color}
      hoverBorderColor={color}
      bgColor={bgColor}
      disabled={props.disabled}
      hoverBgColor={color}
      textColor={color}
      hoverTextColor={bgColor}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

BorderButton.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default BorderButton
