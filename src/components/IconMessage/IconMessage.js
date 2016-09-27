import React, { Component, PropTypes } from 'react'

import * as Icons from '../../icons'

import { colors, iconSizes } from '../../variables'

const defaultWrapperStyle = { position: 'relative' }
const defaultIconStyle = { position: 'absolute', left: 0 }
const defaultChildrenContainerStyle = { paddingLeft: '0.5rem' }

/**
 * Renders an icon next to something
 */
class IconMessage extends Component {
  constructor (props) {
    super(props)
    // compute style
    let iconSpacing = iconSizes.medium
    if (props.xsmall) {
      iconSpacing = iconSizes.xsmall
    } else if (props.small) {
      iconSpacing = iconSizes.small
    } else if (props.large) {
      iconSpacing = iconSizes.large
    }
    this.iconStyle = Object.assign({}, defaultIconStyle)
    this.containerStyle = Object.assign({}, {
      paddingLeft: iconSpacing,
      minHeight: iconSpacing
    })
    this.wrapperStyle = Object.assign({}, defaultWrapperStyle)
    // set icon component
    let defaultIcon = Icons['LockedIcon'] // we can change this later
    this.icon = props.icon ? Icons[props.icon] : defaultIcon
  }
  render () {
    let Icon = <this.icon {...this.props} style={ this.iconStyle } />
    return (
      <div style={ this.wrapperStyle }>
        { Icon }
        <div style={ this.containerStyle }>
          <div style={ defaultChildrenContainerStyle }>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

IconMessage.propTypes = {
  icon: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool
}

export default IconMessage
