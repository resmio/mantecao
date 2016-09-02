import React, { PropTypes } from 'react'

import { CloseIcon } from '../../icons'
import { UnstyledButton } from '../UnstyledButton'

import { colors } from '../../variables'

const defaultWrapperStyle = {
  position: 'relative',
  background: colors.pacificBlue,
  color: colors.white
}
const defaultContainerStyle = {
  padding: '2rem',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 100
}
const defaultCloseStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem'
}

/**
 * Header section of a dialog
 */
const DialogHeader = (props) => {
  let close = (
    <div style={ defaultCloseStyle }>
      <UnstyledButton onClick={ props.close }><CloseIcon /></UnstyledButton>
    </div>
  )
  return (
    <div style={ defaultWrapperStyle }>
      <div style={ defaultContainerStyle }>
        { props.children }
      </div>
      { props.close ? close : null }
    </div>
  )
}

DialogHeader.propTypes = {
  close: PropTypes.func
}

export default DialogHeader
