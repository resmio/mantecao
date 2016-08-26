import React, {Component, PropTypes} from 'react'
import styles from './_Calendar.scss'

class DateInput extends Component {
  static propTypes = {
    defaultValue: PropTypes.object
  }

  render () {
    return (
      <input
        className={ styles.dateInput }
        type='text'
        defaultValue={ this.formatDate(this.props.defaultValue, 'A') }
        onChange= { this.props.onChange } />
    )
  }

  formatDate (date, format) {
    if (format === 'A') {
      return date.toString()
    }
  }
}

export default DateInput
