import React, { PropTypes } from 'react'

import DateInput from './DateInput'

import { colors } from '../variables'

const defaultDatepickerStyle = {}
const defaultCalendarStyle = {
  backgroundColor: colors.alto,
  fontSize: '1em'
}

const Calendar = (props) => (
  <div style={ defaultDatepickerStyle } >
    <DateInput />
    <div style={ defaultCalendarStyle }>
      <div className='month-selector'>&#60; July &#62;</div>
      <ul className='dayname-container'>
        <li className='dayname'>Lu</li>
        <li className='dayname'>Ma</li>
        <li className='dayname'>Mi</li>
        <li className='dayname'>Ju</li>
        <li className='dayname'>Vi</li>
        <li className='dayname'>Sa</li>
        <li className='dayname'>Do</li>
      </ul>
      <div className='weeks-container'>
        <div className='week'>
          <div className='day'>1</div>
          <div className='day'>2</div>
          <div className='day'>3</div>
          <div className='day'>4</div>
          <div className='day'>5</div>
          <div className='day'>6</div>
          <div className='day'>7</div>
        </div>
      </div>
    </div>
  </div>
)

Calendar.propTypes = {}

export default Calendar
