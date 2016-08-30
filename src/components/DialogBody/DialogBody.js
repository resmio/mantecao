import React, { PropTypes } from 'react'

import { colors } from '../../variables'

const defaultStyle = {
  width: '80%',
  margin: '0rem auto',
  padding: '3rem 0rem'
}
const defaultBackgroundColor = colors.white

/**
 * Body section of a dialog
 */
const DialogBody = (props) => (
  <div style={{ backgroundColor: props.backgroundColor || defaultBackgroundColor }}>
    <div style={ defaultStyle }>
      { props.children }
    </div>
  </div>
)

DialogBody.propTypes = {
  backgroundColor: PropTypes.string
}

export default DialogBody
