import React, { PropTypes } from 'react'
import LockedIcon from '../icons/LockedIcon'

import { colors } from '../styles/variables'
const defaultContainerStyle = {
  position: 'relative',
  color: colors.goldenTainoi,
  paddingLeft: '2.5rem'
}
const defaultIconStyle = {
  position: 'absolute',
  left: '0rem'
}

const LockedFeature = (props) => (
  <div style={ defaultContainerStyle }>
    <LockedIcon small style={ defaultIconStyle } />
    { props.children }
  </div>
)

LockedFeature.propTypes = {
  children: PropTypes.array
}

export default LockedFeature
