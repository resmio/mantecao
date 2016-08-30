import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

import { CloseIcon } from '../../icons'

import { colors } from '../../variables'

const defaultAlertStyle = {
  boxShadow: '0px 0px 20px ' + colors.alto,
  width: '80%',
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
  fontSize: '1.8rem'
}
const defaultMessageStyle = {
  margin: '0rem',
  fontSize: '1.8rem'
}
const defaultFooterStyle = {
  margin: '0rem',
  fontSize: '1.8rem',
  overflow: 'hidden'
}
const defaultAlertColors = {
  'alert': colors.goldenTainoi,
  'error': colors.amaranth,
  'info': colors.pacificBlue,
  'success': colors.java
}
const defaultAlertIcons = {
  'alert': <CloseIcon large />,
  'error': <CloseIcon large />,
  'info': <CloseIcon large />,
  'success': <CloseIcon large />
}

/**
 * Alert component (types: alert, error, info, success) with a large icon display, heading, message and body
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
    let alert = (
      <div style={ defaultAlertStyle }>
        <div style={ this.headerStyle }>
          { this.alertIcon }
        </div>
        <p style={ this.headingStyle }>{ this.props.heading }</p>
        <p style={ defaultMessageStyle }>{ this.props.message }</p>
        <div style={ defaultFooterStyle }>{ this.props.children }</div>
      </div>
    )
    return this.props.isOpen ? alert : null
  }
}

Alert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  heading: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.string.isRequired
}

export default Alert
