import React, { Component, PropTypes } from 'react'

import Option from './_option'
import styled from 'styled-components'
import { colors } from '../variables'

const StyledWrapper = styled.div`
  max-height: 16rem;
  overflow-x: hidden;
  overflow-y: scroll;
`

class ComboBoxOptions extends Component {
  render() {
    const { options, selectedOptions, focusedIndex, onSelect } = this.props
    return (
      <StyledWrapper>
        {options.map((option, i) => {
          return (
            <Option
              key={i}
              ref={i}
              selected={selectedOptions.includes(option)}
              onClick={() => onSelect(option)}
              focused={i === focusedIndex}
              text={option}
            />
          )
        })}
      </StyledWrapper>
    )
  }
}

ComboBoxOptions.propTypes = {
  focusedIndex: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired
}

export default ComboBoxOptions
