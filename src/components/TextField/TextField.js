import React, {PropTypes} from 'react'
import {colors, iconSizes} from '../../variables'

const defaultContainerStyle = {
  marginBottom: '1rem'
}
const defaultInputStyle = {
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
const defaultHintStyle = {
  marginTop: '0.5rem'
}
const disabledStyle = {
  cursor: 'not-allowed',
  backgroundColor: colors.gallery
}
const iconInputStyle = {
  paddingLeft: '3.5rem'
}
const defaultIconContainerStyle = {
  position: 'relative'
}
const defaultIconStyle = {
  padding: '0.6rem 0.7rem',
  position: 'absolute',
  width: '3.5rem'
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

  let computedContainerStyle = Object.assign({},
    defaultContainerStyle,
    props.style
  )
  let computedInputStyle = Object.assign({},
    defaultInputStyle,
    borderColorStyle,
    props.icon ? iconInputStyle : {},
    props.disabled ? disabledStyle : {}
  )
  let computedIconContainerStyle = Object.assign({}, defaultIconContainerStyle)
  let computedLabelStyle = Object.assign({}, defaultLabelStyle, textColorStyle)
  let computedHintStyle = Object.assign({}, defaultHintStyle, textColorStyle)

  const inputField = (
    <input
      className={props.className}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      id={props.id}
      max={props.max}
      maxLength={props.maxLength}
      min={props.min}
      minLength={props.minLength}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onClick={props.onClick}
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
      maxLength={props.maxLength}
      minLength={props.minLength}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onClick={props.onClick}
      onFocus={props.onFocus}
      placeholder={props.placeHolder}
      required={props.required}
      rows={props.rows}
      style={computedInputStyle}
      value={props.value}
    />
  )
  return (
    <div style={computedContainerStyle}>
      <label style={computedLabelStyle}>{props.label}</label>
      <div style={computedIconContainerStyle}>
        {props.icon ? <div style={defaultIconStyle}>{props.icon}</div> : null}
        {props.multiLine ? textAreaField : inputField}
      </div>
      {props.hint ? <div style={computedHintStyle}>{props.hint}</div> : null}
    </div>
  )
}
const {
  bool,
  func,
  node,
  number,
  string,
  object,
  oneOfType
} = PropTypes

TextField.propTypes = {
  className: string,
  defaultValue: oneOfType([string, number]),
  disabled: bool,
  error: bool,
  hint: string,
  icon: node,
  id: string,
  label: string,
  max: number,
  maxLength: number,
  min: number,
  minLength: number,
  multiLine: bool,
  onBlur: func,
  onChange: func,
  onClick: func,
  onFocus: func,
  placeHolder: string,
  required: bool,
  rows: number,
  style: object,
  type: string,
  value: oneOfType([string, number]),
  warning: bool
}

export default TextField
