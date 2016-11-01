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
      className={props.className}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      id={props.id}
      maxLength={props.maxLength}
      minLength={props.minLength}
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
      className={props.className}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      id={props.id}
      maxlength={props.maxLength}
      minlength={props.minLength}
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

const {
  bool,
  func,
  number,
  string,
  object,
  oneOfType
} = PropTypes

TextField.propTypes = {
  className: string,
  defaultValue: string,
  disabled: bool,
  error: bool,
  hint: string,
  id: string,
  label: string,
  maxLength: number,
  minLength: number,
  multiLine: bool,
  onBlur: func,
  onChange: func,
  onFocus: func,
  placeHolder: string,
  required: bool,
  style: object,
  type: string,
  value: oneOfType([string, number]),
  warning: bool
}

export default TextField
