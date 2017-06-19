import React, { PropTypes } from 'react'

import { colors } from '../../variables'

const defaultStyle = {
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
