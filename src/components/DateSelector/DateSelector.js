import React, { Component, PropTypes as t } from 'react'
import styles from './DateSelector.styles'
import Select from './Select'
import {TrashIcon} from '../../icons'
// import '@resmio/rollico'

import {
  isValidDate,
  getDayFromDate,
  getMonthFromDate,
  getPastYears,
  getYearFromDate,
  MONTH_NAMES
} from '../../utils/dates'

// Date Generation
const days = [...Array(31 + 1).keys()].slice(1)
const actualYear = getYearFromDate(new Date())
const years = getPastYears(120, actualYear)

// Validation
const validate = date => {
  if (date.day === 0 && date.month === 0 && date.year === 0) {
    return {} // <-- need a way to clear the errors since it is maintained in this component's state - we can fix this somehow later
  }
  const errors = {}
  if (date.day === 0) { errors.day = true }
  if (date.month === 0) { errors.month = true }
  if (date.year === 0) { errors.year = true }
  if (!isValidDate(date)) { errors.invalid = true }
  return errors
}

// Component
//  - Props:
//      - date :DateString (date='2017-05-03')
//      - monthBeforeDay :Boolean
//      - onChange :Func

class DateSelector extends Component {
  static propTypes = {
    allowReset: t.bool,
    date: t.string,
    dayString: t.string,
    errorString: t.string,
    monthBeforeDay: t.bool,
    monthNames: t.array,
    monthString: t.string,
    onChange: t.func.isRequired,
    yearString: t.string
  }

  static defaultProps = {
    date: '1999-12-31'
  }

  state = {
    date: {
      day: getDayFromDate(this.props.date),
      // Month is 0 based so we need to add 1 here
      month: getMonthFromDate(this.props.date) + 1,
      year: getYearFromDate(this.props.date)
    },
    errors: {}
  }

  handleInputChange = evt => {
    const date = this.state.date
    date[evt.target.id] = parseInt(evt.target.value, 10)
    const errors = validate(date)
    this.setState({date, errors}, () => this.props.onChange(this.state))
  }

  resetDate = () => {
    this.setState({
      date: {day: 0, month: 0, year: 0},
      errors: {}
    }, () => this.props.onChange(this.state))
  }

  // doing the onchange in the component lifecycle was causing some strange behavior
  // when the values changed - so we do it with the methods that change the date
  // componentDidUpdate () {
  //   this.props.onChange(this.state)
  // }

  render () {
    const day = (
      <Select
        name={this.props.dayString || 'Day'}
        id='day'
        options={days}
        selected={this.state.date.day}
        onOptionChange={this.handleInputChange}
        hasError={this.state.errors.day}
      />
    )
    const month = (
      <Select
        name={this.props.monthString || 'Month'}
        id='month'
        options={this.props.monthNames || MONTH_NAMES}
        values={[...Array(13).keys()].slice(1)}
        selected={this.state.date.month}
        onOptionChange={this.handleInputChange}
        hasError={this.state.errors.month}
      />
    )

    return (
      <div>
        <div {...styles.container}>
          { this.props.monthBeforeDay ? month : day }
          { this.props.monthBeforeDay ? day : month }
          <Select
            name={this.props.yearString || 'Year'}
            id='year'
            options={years}
            selected={this.state.date.year}
            onOptionChange={this.handleInputChange}
            hasError={this.state.errors.year}
            optionsAsValues
          />
          {this.props.allowReset && (
            <span {...styles.trash} onClick={this.resetDate}>
              <TrashIcon />
            </span>
          )}
        </div>
        {this.state.errors.invalid && (
          <div {...styles.error}>
            { this.props.errorString || 'Please provide a valid date' }
          </div>
        )}
      </div>
    )
  }
}

export default DateSelector
