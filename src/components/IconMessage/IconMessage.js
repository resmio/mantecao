import React, { Component, PropTypes } from 'react'

import * as Icons from '../../icons'

import { colors } from '../../variables'

const defaultWrapperStyle = { display: 'flex' }
const defaultIconStyle = { position: 'relative', flex: '0 1 auto' }
const defaultContainerStyle = { flex: '1' }

/**
 * Renders an icon next to some text
 */
class IconMessage extends Component {
  constructor (props) {
    super(props)
    // compute style
    let iconPosition = { [props.right ? 'marginLeft' : 'marginRight']: '0.5rem' }
    this.iconStyle = Object.assign({}, defaultIconStyle, iconPosition)
    this.containerStyle = Object.assign({}, defaultContainerStyle)
    this.wrapperStyle = Object.assign({}, defaultWrapperStyle)
    // set icon component
    let defaultIcon = Icons['LockedIcon'] // we can change this later
    this.icon = props.icon ? Icons[props.icon] : defaultIcon
  }
  render () {
    let Icon = <this.icon small={ this.props.small } large={ this.props.large } style={ this.iconStyle } />
    return (
      <div style={ this.wrapperStyle }>
        { this.props.right ? null : Icon }
        <div style={ this.containerStyle }>
          { this.props.children }
        </div>
        { this.props.right ? Icon : null }
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
