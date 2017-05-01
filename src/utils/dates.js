
// () : Array<Number>
export const MONTH_NAMES = (
  'January February March April May June July August September October November December'
  .split(' ')
)

// (Number, Number) : Array<Number>
export const getPastYears = (yearsBack, startYear) => {
  const years = [...Array(yearsBack + 1).keys()].map(num => startYear - num)
  return years
}

// (String) : Number
export const getDayFromDate = date => new Date(date).getDate()

// (String) : Number
export const getMonthFromDate = date => new Date(date).getMonth()

// (String) : Number
export const getYearFromDate = date => new Date(date).getFullYear()

// ({Number, Number, Number}) : Boolean
export const isValidDate = date => {
  const testDate = new Date(date.year, date.month - 1, date.day)
  return (
    testDate.getDate() === date.day
    && testDate.getMonth() === date.month - 1
    && testDate.getFullYear() === date.year
  )
}
