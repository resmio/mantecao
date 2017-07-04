import React from 'react'
import PropTypes from 'prop-types'

import { colors, theme } from '../variables'

const defaultStyle = {
  backgroundColor: theme.backgroundColor,
  color: theme.fontColor,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  lineHeight: theme.lineHeight,
  width: '80%',
  margin: '0rem auto',
  padding: '3rem 0rem'
}
const defaultBgColor = colors.white

/**
 * Body section of a dialog
 */
const DialogBody = props => {
  let addedStyle = { textAlign: props.right ? 'right' : 'left' }
  const style = Object.assign({}, defaultStyle, addedStyle, props.style)
  return (
    <div style={{ backgroundColor: props.bgColor || defaultBgColor }}>
      <div style={style}>
        {props.children}
      </div>
    </div>
  )
}

DialogBody.propTypes = {
  bgColor: PropTypes.string,
  right: PropTypes.bool,
  style: PropTypes.object
}

export default DialogBody
