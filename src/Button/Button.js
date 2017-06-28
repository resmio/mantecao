import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { colors } from '../variables'
import { colorLuminance } from '../utils/colorUtils'

const defaultStyle = {
  padding: '0.8rem 2rem',
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
  constructor(props) {
    super(props)
    let componentStyle = this._getComponentStyle(props.style)
    let hoverStyle = this._getHoverStyle(componentStyle)
    let disabledStyle = this._getDisabledStyle(componentStyle)
    this.state = {
      componentStyle,
      hoverStyle,
      disabledStyle,
      hover: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.style || nextProps.disabled) {
      // recompute the styles when props dictate
      let componentStyle = this._getComponentStyle(nextProps.style)
      let hoverStyle = this._getHoverStyle(componentStyle)
      let disabledStyle = this._getDisabledStyle(componentStyle)
      this.setState({
        componentStyle,
        hoverStyle,
        disabledStyle
      })
    }
  }
  render() {
    let style = {}
    if (this.props.disabled) {
      style = this.state.disabledStyle
    } else if (this.state.hover) {
      style = this.state.hoverStyle
    } else {
      style = this.state.componentStyle
    }
    return (
      <button
        type="button"
        className={this.props.className}
        style={style}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
  _onMouseEnter = () => {
    this.setState({ hover: true })
  }
  _onMouseLeave = () => {
    this.setState({ hover: false })
  }
  _getComponentStyle = (customStyle = {}) => {
    const { textColor, bgColor, borderColor } = this.props
    return Object.assign(
      {},
      defaultStyle,
      customStyle,
      textColor ? { color: textColor } : {},
      bgColor ? { backgroundColor: bgColor } : {},
      borderColor ? { border: '1px solid ' + borderColor } : {}
    )
  }
  _getHoverStyle = componentStyle => {
    const { hoverTextColor, hoverBgColor, hoverBorderColor } = this.props
    return Object.assign(
      {},
      componentStyle,
      { backgroundColor: colorLuminance(componentStyle.backgroundColor, -0.1) },
      hoverTextColor ? { color: hoverTextColor } : {},
      hoverBgColor ? { backgroundColor: hoverBgColor } : {},
      hoverBorderColor ? { border: '1px solid ' + hoverBorderColor } : {}
    )
  }
  _getDisabledStyle = componentStyle => {
    return Object.assign({}, componentStyle, {
      opacity: 0.4,
      cursor: 'not-allowed'
    })
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
