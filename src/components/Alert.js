import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

import { CloseIcon } from '../icons'

import { colors } from '../styles/variables'
const defaultAlertStyle = {
  boxShadow: '0px 0px 20px ' + colors.alto,
  width: '80%',
  zIndex: 1,
  margin: '0 auto',
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
  fontSize: '1.8rem'
}

class Alert extends Component {
  constructor (props) {
    super(props)

    this.headerStyle = {}
    this.headingStyle = {}
    switch (props.type) {
      case 'alert':
        this.headerStyle = Object.assign({}, defaultHeaderStyle, { backgroundColor: colors.goldenTainoi })
        this.headingStyle = Object.assign({}, defaultHeadingStyle, { color: colors.goldenTainoi })
        this.alertIcon = <CloseIcon large /> // replace with the correct later
        break
      case 'error':
        this.headerStyle = Object.assign(defaultHeaderStyle, { backgroundColor: colors.amaranth })
        this.headingStyle = Object.assign({}, defaultHeadingStyle, { color: colors.amaranth })
        this.alertIcon = <CloseIcon large /> // replace with the correct later
        break
      case 'info':
        this.headerStyle = Object.assign(defaultHeaderStyle, { backgroundColor: colors.pacificBlue })
        this.headingStyle = Object.assign({}, defaultHeadingStyle, { color: colors.pacificBlue })
        this.alertIcon = <CloseIcon large /> // replace with the correct later
        break
      case 'success':
        this.headerStyle = Object.assign(defaultHeaderStyle, { backgroundColor: colors.java })
        this.headingStyle = Object.assign({}, defaultHeadingStyle, { color: colors.java })
        this.alertIcon = <CloseIcon large /> // replace with the correct later
        break
    }
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
