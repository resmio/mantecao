import React, {Component, PropTypes} from 'react'
import DateInput from './Dateinput'
import styles from './_Calendar.scss'

class Calendar extends Component {
  static propTypes = {
  }

  constructor (props) {
    super(props)
    this.initialState = {
      date: new Date()
    }
  }

  render () {
    return (
      <div className={styles.datepicker} >
        <DateInput
          defaultValue={ this.initialState.date }
          onChange= { this.setState()}
        />
        <div className={styles.calendar}>
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
  }
}

export default Calendar
