import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ButtonGroupItem from './_ButtonGroupItem'

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class ButtonGroup extends Component {
  render() {
    const { options, optionValues, disabled, selected } = this.props
    return (
      <StyledDiv>
        {options.map((option, index) => {
          return (
            <ButtonGroupItem
              key={index}
              first={index === 0}
              last={index === options.length - 1}
              value={option}
              text={optionValues[index]}
              selected={selected.indexOf(option) > -1}
              onSelect={this._toggleOption}
              disabled={disabled}
            />
          )
        })}
      </StyledDiv>
    )
  }
  _toggleOption = option => {
    const { onChange, selected } = this.props
    let newArray = selected.slice()
    let index = selected.indexOf(option)
    if (index > -1) {
      newArray.splice(index, 1)
    } else {
      newArray.push(option)
    }
    onChange(newArray)
  }
}

ButtonGroup.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  optionValues: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired
}

export default ButtonGroup
