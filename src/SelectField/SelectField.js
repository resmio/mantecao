import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../variables'

// We need this on every component to apply our minimal base
// This runs on top of normalize.css which is included here in the storybook
// template, we don't want to call it from here since we don't want it included
// on every component
import globalStyles from '../styles.global'
globalStyles()

const defaultStyle = {
  backgroundColor: colors.white,
  borderRadius: '0.4rem',
  border: '1px solid',
  borderColor: colors.silver,
  height: '3.3rem',
  width: '100%'
}
const defaultLabelStyle = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '0.5rem',
  maxWidth: '100%'
}
const disabledStyle = {
  cursor: 'not-allowed',
  backgroundColor: colors.gallery
}

/**
 * Can be given options to list in the select dropdown (assigned as optionValues)
 */
const SelectField = props => {
  let { optionValues, options } = props
  if (!optionValues) {
    optionValues = options
  }

  let borderColorStyle = Object.assign(
    {},
    props.warning ? { borderColor: colors.goldenTainoi } : {},
    props.error ? { borderColor: colors.amaranth } : {}
  )
  let textColorStyle = Object.assign(
    {},
    props.disabled ? { color: colors.dustyGray } : {},
    props.warning ? { color: colors.goldenTainoi } : {},
    props.error ? { color: colors.amaranth } : {}
  )

  let computedInputStyle = Object.assign(
    {},
    defaultStyle,
    borderColorStyle,
    props.disabled ? disabledStyle : {}
  )
  let computedLabelStyle = Object.assign({}, defaultLabelStyle, textColorStyle)
  let computedContainerStyle = Object.assign(
    { marginBottom: '1rem' },
    props.style
  )
  let computedHintStyle = Object.assign({ marginTop: '0.5rem' }, textColorStyle)

  return (
    <div style={computedContainerStyle}>
      {props.label && <label style={computedLabelStyle}>{props.label}</label>}
      <select
        className={props.className}
        disabled={props.disabled}
        onBlur={props.onBlur}
        onChange={props.onChange}
        style={computedInputStyle}
        required={props.required}
        defaultValue={props.defaultValue}
        value={props.value}
      >
        {props.options.map((option, index) => {
          return (
            <option key={index} value={optionValues[index]}>
              {options[index]}
            </option>
          )
        })}
      </select>
      {props.hint && <div style={computedHintStyle}>{props.hint}</div>}
    </div>
  )
}

SelectField.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  optionValues: PropTypes.array,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  warning: PropTypes.bool
}

export default SelectField
