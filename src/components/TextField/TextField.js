import React, { PropTypes } from 'react'

const defaultStyle = {
  width: '100%',
  borderRadius: '0.4rem',
  border: '1px solid',
  borderColor: '#CCC',
  padding: '0.6rem 1.2rem'
}

const errorStyle = Object.assign({}, defaultStyle, {borderColor: '#F00'})

const defaultContainerStyle = {
  marginBottom: '1rem'
}

const TextField = (props) => {
  const inputField = (
    <input
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeHolder}
      style={props.hasError ? errorStyle : defaultStyle}
      required={props.required}
      value={props.value}
    />
  )
  const textAreaField = (
    <textarea
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeHolder}
      required={props.required}
      style={props.hasError ? errorStyle : defaultStyle}
    />
  )
  return (
    <div style={defaultContainerStyle}>
      <label>{props.label}</label>
      <br />
      {props.multiLine ? textAreaField : inputField}
      {props.hint ? <span style={{display: 'block'}}>{props.hint}</span> : null}
    </div>
  )
}

TextField.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  multiLine: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeHolder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string
}

export default TextField
