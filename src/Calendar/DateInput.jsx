import React, {Component, PropTypes} from 'react'
import styles from './_Calendar.scss'

class DateInput extends Component {
  static propTypes = {
  }

  render () {
    return (
      <input
        className={styles.dateInput}
        type="text"
        value="July 3rd, 2016" />
    )
  }
}

export default DateInput
