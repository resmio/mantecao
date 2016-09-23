import React, { Component, PropTypes } from 'react'

import { colors } from '../../variables'
import { colorLuminance } from '../../utils/colorUtils'

const defaultStyle = {
  padding: '0.8rem 1.5rem',
  color: colors.white,
  backgroundColor: colors.alto,
  fontSize: '1.5rem',
  outline: 'none',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '4px',
  boxSizing: 'border-box',
  verticalAlign: 'middle'
}

/**
 * Normal Button - onClick and disabled props, and can have styles applied
 */
class Button extends Component {
  constructor (props) {
    super(props)
    // build the styles for the button
    let addedStyle = {}
    if (props.textColor) { addedStyle.color = props.textColor }
    if (props.bgColor) { addedStyle.backgroundColor = props.bgColor }
    if (props.borderColor) { addedStyle.border = '1px solid ' + props.borderColor }
    this.componentStyle = Object.assign({},
      defaultStyle, // <-- adds any additional styles sent as props
      props.style, // <-- overrides with any additional styles sent with 'style' prop
      addedStyle // <-- overrides (highest priority) with any special props
    )

    // build the hover styles
    let addedHoverStyle = {}
    if (props.hoverTextColor) { addedHoverStyle.color = props.hoverTextColor }
    if (props.hoverBgColor) { addedHoverStyle.backgroundColor = props.hoverBgColor }
    if (props.hoverBorderColor) { addedHoverStyle.border = '1px solid ' + props.hoverBorderColor }
    this.hoverStyle = Object.assign({},
      defaultStyle,
      {backgroundColor: colorLuminance(this.componentStyle.backgroundColor, -0.1)}, // <-- overrides with the default hover styles
      addedHoverStyle // <-- overrides (highest priority) with any special hover props
    )

    // build the disabled styles
    this.disabledStyle = Object.assign({},
      this.componentStyle,
      {opacity: 0.4, cursor: 'not-allowed'}
    )

    this.state = { style: this.componentStyle }
    this._onMouseEnter = this._onMouseEnter.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)
  }
  render () {
    return (
      <button
        type='button'
        className={ this.props.className }
        style={ this.props.disabled ? this.disabledStyle : this.state.style }
        onMouseEnter={ this._onMouseEnter }
        onMouseLeave={ this._onMouseLeave }
        disabled={ this.props.disabled }
        onClick={ this.props.onClick }
      >
        { this.props.children }
      </button>
    )
  }
  _onMouseEnter () {
    this.setState({ style: this.hoverStyle })
  }
  _onMouseLeave () {
    this.setState({ style: this.componentStyle })
  }
}

Button.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hoverBgColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  textColor: PropTypes.string
}

export default Button
