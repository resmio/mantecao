import React, { PropTypes } from 'react'

import { colors } from '../../variables'

const defaultStyle = {
  border: '1px solid ' + colors.gallery,
  minWidth: '200px'
}

/**
 * Date input field
 */
const DateInput = (props) => (
  <input
    className={ defaultStyle }
    type='text'
    value='July 3rd, 2016' />
)

DateInput.propTypes = {}

export default DateInput
