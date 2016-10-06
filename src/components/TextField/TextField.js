import React, {PropTypes} from 'react'
import {colors} from '../../variables'

const defaultStyle = {
  width: '100%',
  borderRadius: '0.4rem',
  border: '1px solid',
  borderColor: colors.silver,
  padding: '0.6rem 1.2rem',
  boxSizing: 'border-box'
}
const defaultLabelStyle = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '0.5rem',
  maxWidth: '100%'
}

const TextField = (props) => {
  let borderColorStyle = Object.assign({},
    props.warning ? {borderColor: colors.goldenTainoi} : {},
    props.error ? {borderColor: colors.amaranth} : {}
  )
  let textColorStyle = Object.assign({},
    props.warning ? {color: colors.goldenTainoi} : {},
    props.error ? {color: colors.amaranth} : {}
  )

  let computedInputStyle = Object.assign({}, defaultStyle, borderColorStyle)
  let computedLabelStyle = Object.assign({}, defaultLabelStyle, textColorStyle)
  let computedHintStyle = Object.assign({marginTop: '0.5rem'}, textColorStyle)
  let computedContainerStyle = Object.assign({marginBottom: '1rem'}, props.style)

  const inputField = (
    <input
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
      placeholder={props.placeHolder}
      required={props.required}
      style={computedInputStyle}
      type={props.type}
      value={props.value}
    />
  )
  const textAreaField = (
    <textarea
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
      placeholder={props.placeHolder}
      required={props.required}
      style={computedInputStyle}
    />
  )
  return (
    <div style={computedContainerStyle}>
      <label style={computedLabelStyle}>{props.label}</label>
      {props.multiLine ? textAreaField : inputField}
      {props.hint ? <div style={computedHintStyle}>{props.hint}</div> : null}
    </div>
  )
}

TextField.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  multiLine: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeHolder: PropTypes.string,
  required: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string,
  warning: PropTypes.bool
}

export default TextField
