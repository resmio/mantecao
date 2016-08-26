import React, { Component, PropTypes } from 'react'
import * as Icons from '../icons'

import { colors } from '../styles/variables'
const defaultIconStyle = { position: 'absolute' }
const defaultContainerStyle = { position: 'relative' }

class IconMessage extends Component {
  constructor (props) {
    super(props)
    // compute style
    let iconPosition = { [props.right ? 'right' : 'left']: '0rem' }
    let containerPosition = { [props.right ? 'paddingRight' : 'paddingLeft']: '2.5rem' }
    this.iconStyle = Object.assign({}, defaultIconStyle, iconPosition)
    this.containerStyle = Object.assign({}, defaultContainerStyle, containerPosition)
    // set icon component
    let defaultIcon = Icons['LockedIcon'] // we can change this later
    this.icon = props.icon ? Icons[props.icon] : defaultIcon
  }
  render () {
    return (
      <div style={ this.containerStyle }>
        <this.icon small={ this.props.small } large={ this.props.large } style={ this.iconStyle } />
        { this.props.children }
      </div>
    )
  }
}

IconMessage.propTypes = {
  children: PropTypes.array,
  icon: PropTypes.string,
  right: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool
}

export default IconMessage
