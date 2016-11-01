import React, {PropTypes} from 'react'

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

/**
 * with label, description and hint
 */
const Checkbox = (props) => {
  let textColorStyle = Object.assign({},
    props.error ? {color: colors.amaranth} : {}
  )
  let computedLabelStyle = Object.assign({}, defaultLabelStyle, props.labelStyle)
  let computedHintStyle = Object.assign({}, textColorStyle)
  let computedCheckboxStyle = Object.assign({},
    defaultCheckboxStyle,
    props.checked ? {color: colors.white, backgroundColor: colors.pacificBlue, borderColor: colors.pacificBlue} : {}
  )
  let inputId = 'checkbox_' + (Math.floor(Math.random() * 10000) + 1)

  return (
    <div style={{display: 'flex'}}>
      <div style={{flex: '0 1 auto', marginRight: '2rem'}}>
        <label htmlFor={inputId} style={computedCheckboxStyle}>
          {props.checked ? <CheckIcon style={{strokeWidth: '3.5px', width: '1.4rem', height: '1.4rem', verticalAlign: 'none'}} /> : null}
          <input
            id={inputId}
            style={{visibility: 'hidden', position: 'absolute', left: 0}}
            type='checkbox'
            disabled={props.disabled}
            defaultChecked={props.defaultChecked}
            checked={props.checked}
            onChange={props.onChange}
          />
        </label>
      </div>
      <div style={{flex: '1 1 auto'}}>
        {props.label ? <label style={computedLabelStyle}>{props.label}</label> : null}
        {props.description ? <div style={{marginBottom: '0.5rem'}}>{props.description}</div> : null}
        {props.hint ? <div style={computedHintStyle}>{props.hint}</div> : null}
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  onChange: PropTypes.func
}

export default Checkbox
