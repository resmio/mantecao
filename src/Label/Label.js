import React from 'react'
import PropTypes from 'prop-types'
import { colors, theme } from '../variables'

const defaultStyle = {
  fontFamily: theme.fontFamily,
  display: 'inline',
  padding: '2px 6px 3px',
  fontSize: '0.75em',
  fontWeight: '700',
  lineHeight: '1',
  color: colors.white,
  backgroundColor: colors.dustyGray,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.25rem'
}

const defaultAlertColors = {
  alert: colors.goldenTainoi,
  error: colors.amaranth,
  info: colors.pacificBlue,
  success: colors.java
}

/**
* small label - we can update this later
*/
const Label = props => {
  const computedStyle = Object.assign(
    {},
    defaultStyle,
    props.type ? { backgroundColor: defaultAlertColors[props.type] } : {}
  )
  return (
    <span style={computedStyle}>
      {props.children}
    </span>
  )
}

Label.propTypes = {
  children: PropTypes.string.isRequired
}

export default Label
