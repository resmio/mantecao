import React, { Component, PropTypes } from 'react'
import {
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
  CloseIcon
} from '../../icons'

import {colors} from '../../variables'

const defaultAlertStyle = {
  boxShadow: '0px 0px 20px ' + colors.alto,
  width: '100%',
  maxWidth: '500px',
  zIndex: 1,
  margin: '0rem auto',
  backgroundColor: colors.white,
  textAlign: 'center',
  position: 'relative'
}
const defaultHeaderStyle = {
  height: '20rem',
  width: '100%',
  color: colors.white
}
const defaultHeadingStyle = {
  margin: '0rem',
  paddingBottom: '1rem',
  fontSize: '1.8rem'
}
const defaultMessageStyle = {
  margin: '0rem',
  fontSize: '1.6rem'
}
const defaultFooterStyle = {
  margin: '0rem',
  fontSize: '1.6rem',
  overflow: 'hidden'
}
const defaultAlertColors = {
  'alert': colors.goldenTainoi,
  'error': colors.amaranth,
  'info': colors.pacificBlue,
  'success': colors.java
}
const defaultAlertIcons = {
  'alert': <WarningIcon width="100%" height="100%" />,
  'error': <ErrorIcon width="100%" height="100%" />,
  'info': <InfoIcon width="100%" height="100%" />,
  'success': <SuccessIcon width="100%" height="100%" />
}

/**
 * (types: alert, error, info, success) with a large icon display, heading, message and body
 */
class Alert extends Component {
  constructor (props) {
    super(props)
    this.headerStyle = Object.assign({},
      defaultHeaderStyle,
      { backgroundColor: defaultAlertColors[props.type] }
    )
    this.headingStyle = Object.assign({},
      defaultHeadingStyle,
      { color: defaultAlertColors[props.type] }
    )
    this.alertIcon = defaultAlertIcons[props.type]
  }
  render () {
    const closeIcon = (
      <div
        onClick={this.props.onRemove}
        style={{float: 'right', padding: '0.5rem'}}
      >
        <CloseIcon />
      </div>
    )

    const alert = (
      <div style={defaultAlertStyle}>
        <div style={this.headerStyle}>
          {this.props.onClose ? closeIcon : null}
          <div style={{width: '15rem', margin: '0 auto', paddingTop: '2.5rem'}}>
            {this.alertIcon}
          </div>
        </div>
        <div style={{padding: '2rem'}}>
          <p style={this.headingStyle}>{this.props.heading}</p>
          <p style={defaultMessageStyle}>{this.props.message}</p>
          <div style={defaultFooterStyle}>{this.props.children}</div>
        </div>
      </div>
    )
    return this.props.isOpen ? alert : null
  }
}

Alert.propTypes = {
  heading: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
  onRemove: PropTypes.func,
  type: PropTypes.string.isRequired
}

export default Alert
