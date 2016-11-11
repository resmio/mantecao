import React, {PropTypes} from 'react'
import {colors} from '../../variables'

/**
 * small badge - we can update this later
 */
const Badge = (props) => (
  <span style={{
    display: 'inline-block',
    minWidth: '10px',
    padding: '1px 7px',
    fontSize: '12px',
    fontWeight: 700,
    color: colors.white,
    verticalAlign: 'bottom',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    backgroundColor: colors.dustyGray,
    borderRadius: '10px'
  }}>
    {props.children}
  </span>
)

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Badge
