import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../variables'

const StyledSelect = styled.select`
  background-color: ${colors.white};
  flex: 1 1 30%;
  font-size: 1em;
  height: 2.4em;
  color: ${colors.dustyGray};
  border-color: ${props => (props.hasError ? colors.amaranth : colors.silver)};

  &:focus {
    outline-color: ${props => props.hasError && colors.amaranth};
  }
`

const Select = ({
  id,
  name,
  onOptionChange,
  options,
  selected,
  values,
  hasError
}) =>
  <StyledSelect
    hasError={hasError}
    name={name}
    value={selected}
    onChange={onOptionChange}
    id={id}
  >
    <option value={0}>{name}</option>
    {options.map((option, i) =>
      <option key={i} value={values ? values[i] : option}>{option}</option>
    )}
  </StyledSelect>

const { arrayOf, bool, func, number, oneOfType, string } = PropTypes

Select.propTypes = {
  hasError: bool,
  id: string,
  name: string,
  onOptionChange: func.isRequired,
  options: arrayOf(oneOfType([string, number])).isRequired,
  selected: oneOfType([string, number]),
  values: arrayOf(oneOfType([string, number]))
}

export default Select
