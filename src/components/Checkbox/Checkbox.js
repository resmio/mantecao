import React, {PropTypes, Component} from 'react'

import {colors, iconSizes} from '../../variables'
import {CheckIcon} from '../../icons'

const defaultStyle = {
  cursor: 'pointer'
}
const defaultLabelStyle = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '0.5rem',
  maxWidth: '100%'
}
const defaultCheckboxStyle = {
  display: 'block',
  border: '1px solid',
  boxSizing: 'border-box',
  padding: '0.1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  borderColor: 'currentColor',
  position: 'relative',
  height: '1.8rem',
  width: '1.8rem',
  margin: '0.2rem 0 0 0'
}
const checkedStyle = {
  color: colors.white,
  backgroundColor: colors.pacificBlue,
  borderColor: colors.pacificBlue
}

/**
 * with label, description and hint
 */
class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: props.defaultChecked === undefined
        ? props.checked
        : props.defaultChecked
    }
  }
  componentDidUpdate (nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({checked: nextProps.checked},
        () => {
          this.props.onChange(this.state.checked)
        }
      )
    }
  }
  render () {
    const {error, labelStyle, disabled, label, description, hint} = this.props

    let textColorStyle = Object.assign({},
      error ? {color: colors.amaranth} : {}
    )
    let computedLabelStyle = Object.assign({}, defaultLabelStyle, labelStyle)
    let computedHintStyle = Object.assign({}, textColorStyle)
    let computedCheckboxStyle = Object.assign({},
      defaultCheckboxStyle,
      this.state.checked ? checkedStyle : {}
    )

    return (
      <div style={{display: 'flex'}}>
        <div style={{flex: '0 1 auto', marginRight: '2rem'}}>
          <label
            onClick={this._toggleCheckbox}
            htmlFor={this.refs.checkboxInput}
            style={computedCheckboxStyle}
          >
            {this.state.checked === true
              ? <CheckIcon style={{strokeWidth: '3.5px', width: '1.4rem', height: '1.4rem', verticalAlign: 'none'}} />
              : null
            }
            <input
              ref='checkboxInput'
              style={{visibility: 'hidden', position: 'absolute', left: 0}}
              type='checkbox'
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
            ? <div style={{marginBottom: '0.5rem'}}>{description}</div>
            : null
          }
          {hint
            ? <div style={computedHintStyle}>{hint}</div>
            : null
          }
        </div>
      </div>
    )
  }
  _toggleCheckbox = () => {
    this.setState(
      {checked: !this.state.checked},
      () => {
        this.props.onChange(this.state.checked)
      }
    )
  }
  _onChange = (e) => {
    // with a controlled input, react requires an onchange handler - do nothing
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  onChange: PropTypes.func.isRequired
}

export default Checkbox
