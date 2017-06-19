import {
  isValidDate,
  getPastYears,
  getDayFromDate,
  getMonthFromDate,
  getYearFromDate,
  MONTH_NAMES
} from './dates'

describe('MONTH_NAMES', () => {
  it('Ouputs an array with the month names in english', () => {
    const expected = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ]
    expect(MONTH_NAMES).toEqual(expected)
  })
})

describe('getPastYears', () => {
  it('Takes a year and number of years and returns an array of numbers ranging from the passed year to the years in the past specified', () => {
    const actual = getPastYears(5, 2012)
    const expected = [2012, 2011, 2010, 2009, 2008, 2007]

    expect(actual).toEqual(expected)
  })

  it('works with 0 years in the past', () => {
    const actual = getPastYears(0, 1995)
    const expected = [1995]

    expect(actual).toEqual(expected)
  })

  it('does not break due to Y2K bug 📼', () => {
    const actual = getPastYears(4, 2001)
    const expected = [2001, 2000, 1999, 1998, 1997]

    expect(actual).toEqual(expected)
  })
})

describe('getDayFromDate', () => {
  it('returns the day of the month for a given date string YYYY-MM-DD', () => {
    const actual = getDayFromDate('2028-12-31')
    const expected = 31

    expect(actual).toEqual(expected)
  })
})

describe('getMonthFromDate', () => {
  it('returns the month number (January = 0) for a given date string YYYY-MM-DD', () => {
    const actual = getMonthFromDate('2028-12-31')
    const expected = 11

    expect(actual).toEqual(expected)
  })
})

describe('getYearFromDate', () => {
  it('returns the year for a given date string YYYY-MM-DD', () => {
    const actual = getYearFromDate('2028-12-31')
    const expected = 2028

    expect(actual).toEqual(expected)
  })
})

describe('isValidDate', () => {
  it('returns false for 31 November 2012', () => {
    const actual = isValidDate({day: 31, month: 11, year: 2012})
    const expected = false

    expect(actual).toEqual(expected)
  })

  it('returns false for 32 December 1999', () => {
    const actual = isValidDate({day: 32, month: 12, year: 1999})
    const expected = false

    expect(actual).toEqual(expected)
  })

  it('returns false for 29 February 2017', () => {
    const actual = isValidDate({day: 29, month: 2, year: 2017})
    const expected = false

    expect(actual).toEqual(expected)
  })

  it('returns true for 29 February 2016 (leap year)', () => {
    const actual = isValidDate({day: 29, month: 2, year: 2016})
    const expected = true

    expect(actual).toEqual(expected)
  })

  it('returns true for 27 April 1937', () => {
    const actual = isValidDate({day: 27, month: 4, year: 1937})
    const expected = true

    expect(actual).toEqual(expected)
  })
})
