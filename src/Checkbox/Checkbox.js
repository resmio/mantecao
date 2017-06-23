import React, { PropTypes, Component } from 'react'

import { colors, iconSizes } from '../variables'
import { CheckIcon } from '../icons'

const defaultContainerStyle = {
  display: 'flex'
}
const defaultLabelStyle = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '0.5rem',
  maxWidth: '100%'
}
const defaultCheckboxStyle = {
  display: 'block',
  backgroundColor: colors.white,
  border: '1px solid',
  boxSizing: 'border-box',
  padding: '0.1rem',
  borderRadius: '2px',
  cursor: 'pointer',
  borderColor: 'currentColor',
  position: 'relative',
  height: '1.8rem',
  width: '1.8rem',
  margin: '0.2rem 0 0 0',
  fontSize: '0px', // fixes weird white-space issues
  userSelect: 'none' // fixes text select on multi-click
}
const checkedStyle = {
  color: colors.white,
  backgroundColor: colors.pacificBlue,
  borderColor: colors.pacificBlue
}
const disabledStyle = {
  color: colors.white,
  cursor: 'not-allowed',
  borderColor: colors.silver
}

/**
 * with label, description and hint
 */
class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // we need a state for this because it can be controlled or non-controlled
    // i.e. - given a 'checked' or 'defaultChecked' (or both - 'checked' wins)
    if (props.checked !== undefined) {
      this.state.checked = props.checked
    } else if (props.defaultChecked !== undefined) {
      this.state.checked = props.defaultChecked
    } else {
      this.state.checked = false
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({ checked: nextProps.checked })
    }
  }
  render() {
    const {
      error,
      warning,
      labelStyle,
      disabled,
      label,
      description,
      hint,
      style
    } = this.props

    let computerContainerStyle = Object.assign({}, defaultContainerStyle, style)
    let textColorStyle = Object.assign(
      {},
      warning ? { color: colors.goldenTainoi } : {},
      error ? { color: colors.amaranth } : {}
    )
    let computedLabelStyle = Object.assign({}, defaultLabelStyle, labelStyle)
    let computedHintStyle = Object.assign({}, textColorStyle)
    let computedCheckboxStyle = Object.assign(
      {},
      defaultCheckboxStyle,
      this.state.checked ? checkedStyle : {},
      disabled ? disabledStyle : {},
      this.state.checked && disabled ? { backgroundColor: colors.silver } : {}
    )

    return (
      <div style={computerContainerStyle}>
        <div style={{ flex: '0 1 auto', marginRight: '0.7rem' }}>
          <label
            onClick={this._toggleCheckbox}
            htmlFor={this.refs.checkboxInput}
            style={computedCheckboxStyle}
          >
            {this.state.checked === true
              ? <CheckIcon
                  style={{
                    strokeWidth: '3.5px',
                    width: '1.4rem',
                    height: '1.4rem',
                    verticalAlign: 'none'
                  }}
                />
              : null}
            <input
              ref="checkboxInput"
              style={{ visibility: 'hidden', position: 'absolute', left: 0 }}
              type="checkbox"
              disabled={disabled}
              checked={this.state.checked}
              onChange={this._onChange}
            />
          </label>
        </div>
        <div style={{flex: '1 1 auto'}}>
          {label
            ? <label style={computedLabelStyle}>{label}</label>
            : null
          }
          {description
            ? <div style={{ marginBottom: '0.5rem' }}>{description}</div>
            : null}
          {hint ? <div style={computedHintStyle}>{hint}</div> : null}
        </div>
      </div>
    )
  }
  _toggleCheckbox = e => {
    e.preventDefault()
    if (!this.props.disabled) {
      this.setState({ checked: !this.state.checked }, () => {
        this.props.onChange(this.state.checked)
      })
    }
  }
  _onChange = e => {
    // with a controlled input, react requires an onchange handler - do nothing
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  warning: PropTypes.bool
}

export default Checkbox
