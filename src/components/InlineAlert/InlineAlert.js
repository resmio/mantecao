import React, {Component, PropTypes} from 'react'

import {ErrorIcon, WarningIcon, InfoIcon, SuccessIcon} from '../../icons'

import {colors} from '../../variables'

const defaultAlertStyle = {
  width: '100%',
  backgroundColor: colors.white,
  textAlign: 'left',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.white,
  borderRadius: '4px'
}
const defaultIconStyle = {
  color: colors.white,
  display: 'table-cell',
  marginRight: '1.5rem',
  padding: '0.5rem'
}
const defaultAlertColors = {
  'alert': colors.goldenTainoi,
  'error': colors.amaranth,
  'info': colors.pacificBlue,
  'success': colors.java
}
const defaultAlertIcons = {
  'alert': <WarningIcon />,
  'error': <ErrorIcon />,
  'info': <InfoIcon />,
  'success': <SuccessIcon />
}
const defaultChildrenStyle = {
  padding: '0.5rem 1rem',
  display: 'table-cell',
  verticalAlign: 'middle'
}

/**
 * (types: alert, error, info) with a small icon display and message body
 */
class InlineAlert extends Component {
  constructor (props) {
    super(props)
    this.alertStyle = Object.assign({},
      defaultAlertStyle,
      { borderColor: defaultAlertColors[props.type] }
    )
    this.iconStyle = Object.assign({},
      defaultIconStyle,
      { backgroundColor: defaultAlertColors[props.type] }
    )
    this.alertIcon = defaultAlertIcons[props.type]
  }
  render () {
    return (
      <div style={this.alertStyle}>
        <span style={this.iconStyle}>
          {this.alertIcon}
        </span>
        <span style={defaultChildrenStyle}>
          {this.props.children}
        </span>
      </div>
    )
  }
}

InlineAlert.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired
}

export default InlineAlert
