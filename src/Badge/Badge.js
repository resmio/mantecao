import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../variables'
// We need this on every component to apply our minimal base
// This runs on top of normalize.css which is included here in the storybook
// template, we don't want to call it from here since we don't want it included
// on every component
import globalStyles from '../styles.global'
globalStyles()

const StyledSpan = styled.span`
  display: inline-block;
  min-width: 10px;
  padding: 1px 7px;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.white};
  vertical-align: bottom;
  white-space: nowrap;
  text-align: center;
  background-color: ${colors.dustyGray};
  border-radius: 10px;
`

/**
 * small badge - we can update this later
 */
const Badge = ({ style, children }) => {
  return (
    <StyledSpan style={style}>
      {children}
    </StyledSpan>
  )
}

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object
}

export default Badge
