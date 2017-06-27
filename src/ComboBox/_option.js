import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import CheckIcon from '../icons/CheckIcon'
import BlankIcon from '../icons/BlankIcon'
import { colors } from '../variables'

// TODO: get the padding spaces from the theme
const StyledWrapper = styled.div`
  background-color: ${props => props.focused ? colors.alto : 'inherit'}
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-right: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${colors.alto}
  }
`

const PaddedText = styled.span`
  padding-left: 0.75rem;
`

const checkIconStyles = {
  // <-- inline styles, not styled-components
  strokeWidth: '3px',
  color: colors.pacificBlue
}

class ComboBoxOption extends Component {
  render() {
    const { text, selected, focused, onClick } = this.props
    return (
      <StyledWrapper onClick={onClick} focused={focused}>
        {selected
          ? <CheckIcon xsmall style={checkIconStyles} />
          : <BlankIcon xsmall />}
        <PaddedText>{text}</PaddedText>
      </StyledWrapper>
    )
  }
}

ComboBoxOption.propTypes = {
  focused: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default ComboBoxOption
