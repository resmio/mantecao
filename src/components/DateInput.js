import React, { PropTypes } from 'react'

import { colors } from '../styles/variables'
const defaultStyle = {
  border: '1px solid ' + colors.gallery,
  minWidth: '200px'
}

const DateInput = (props) => (
  <input
    className={ defaultStyle }
    type='text'
    value='July 3rd, 2016' />
)

DateInput.propTypes = {}

export default DateInput
