import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../variables'

// We need this on every component to apply our minimal base
// This runs on top of normalize.css which is included here in the storybook
// template, we don't want to call it from here since we don't want it included
// on every component
import globalStyles from '../styles.global'
globalStyles()

const defaultStyle = {
  display: 'inline',
  padding: '2px 6px 3px',
  fontSize: '75%',
  fontWeight: '700',
  lineHeight: '1px',
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
