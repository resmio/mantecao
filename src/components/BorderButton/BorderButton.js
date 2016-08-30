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
const BorderButton = (props) => {
  const color = props.color || defaultStyle.color
  const bgColor = props.bgColor || defaultStyle.bgColor
  return (
    <Button
      borderColor={color}
      hoverBorderColor={color}
      bgColor={bgColor}
      hoverBgColor={color}
      textColor={color}
      hoverTextColor={bgColor}
      onClick={props.onClick}
    >
      { props.children }
    </Button>
  )
}

BorderButton.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default BorderButton
