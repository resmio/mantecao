import React, { Component } from 'react'
import * as t from 'prop-types'
import styled from 'styled-components'
import { colors } from '../variables'

import {
  isValidDate,
  getDayFromDate,
  getMonthFromDate,
  getPastYears,
  getYearFromDate,
  MONTH_NAMES
} from '../utils/dates'

import Select from './Select'
import TrashIcon from '../icons/TrashIcon'

// We need this on every component to apply our minimal base
// This runs on top of normalize.css which is included here in the storybook
// template, we don't want to call it from here since we don't want it included
// on every component
import globalStyles from '../styles.global'
globalStyles()

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & select:first-of-type + select {
    margin-right: 0.3em;
    margin-left: 0.3em;
  }
`

const StyledError = styled.div`
  font-size: 0.9em;
  color: ${colors.amaranth};
`

const StyledTrash = styled.span`
  cursor: pointer;
  color: ${colors.dustyGray};
  padding-top: 0.2em;

  &:hover {
    color: ${colors.emperor};
  }
`

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
  if (date.day === 0) {
    errors.day = true
  }
  if (date.month === 0) {
    errors.month = true
  }
  if (date.year === 0) {
    errors.year = true
  }
  if (!isValidDate(date)) {
    errors.invalid = true
  }
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
    this.setState({ date, errors }, () => this.props.onChange(this.state))
  }

  resetDate = () => {
    this.setState(
      {
        date: { day: 0, month: 0, year: 0 },
        errors: {}
      },
      () => this.props.onChange(this.state)
    )
  }

  // doing the onchange in the component lifecycle was causing some strange behavior
  // when the values changed - so we do it with the methods that change the date
  // componentDidUpdate () {
  //   this.props.onChange(this.state)
  // }

  render() {
    const day = (
      <Select
        name={this.props.dayString || 'Day'}
        id="day"
        options={days}
        selected={this.state.date.day}
        onOptionChange={this.handleInputChange}
        hasError={this.state.errors.day}
      />
    )
    const month = (
      <Select
        name={this.props.monthString || 'Month'}
        id="month"
        options={this.props.monthNames || MONTH_NAMES}
        values={[...Array(13).keys()].slice(1)}
        selected={this.state.date.month}
        onOptionChange={this.handleInputChange}
        hasError={this.state.errors.month}
      />
    )

    return (
      <div>
        <StyledWrapper>
          {this.props.monthBeforeDay ? month : day}
          {this.props.monthBeforeDay ? day : month}
          <Select
            name={this.props.yearString || 'Year'}
            id="year"
            options={years}
            selected={this.state.date.year}
            onOptionChange={this.handleInputChange}
            hasError={this.state.errors.year}
            optionsAsValues
          />
          {this.props.allowReset &&
            <StyledTrash onClick={this.resetDate}>
              <TrashIcon style={{ width: '2em', height: '2em' }} />
            </StyledTrash>}
        </StyledWrapper>
        {this.state.errors.invalid &&
          <StyledError>
            {this.props.errorString || 'Please provide a valid date'}
          </StyledError>}
      </div>
    )
  }
}

export default DateSelector
