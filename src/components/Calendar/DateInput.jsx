import React, {Component, PropTypes} from 'react'
import styles from './_Calendar.scss'

class DateInput extends Component {
  static propTypes = {
    defaultValue: PropTypes.object
  }

  render () {
    return (
      <input
        className={styles.dateInput}
        type='text'
        value='July 3rd, 2016' />
    )
  }

  formatDate (date, format) {
    if (format === 'A') {
      return date.toString()
    }
  }
}

export default DateInput
