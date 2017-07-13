import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from '../variables'
import { media } from '../utils/style'

const getHoverColor = props => {
  return props.hollow ? props.color : darken(0.1, props.color)
}

const StyledButton = styled.button`
  background-color: ${props => (props.hollow ? colors.white : props.color)};
  border: 1px solid ${props => props.color};
  border-radius: 4px;
  color: ${props => (props.hollow ? props.color : colors.white)};
  cursor: pointer;
  font-size: 14px;
  padding: 11px 22px;
  position: relative;
  white-space: normal;

  &:hover {
    background-color: ${props => getHoverColor(props)};
    border-color: ${props => getHoverColor(props)};
    color: ${colors.white};
  }

  &:focus {
    background-color: ${props => getHoverColor(props)};
    border-color: ${props => getHoverColor(props)};
    color: ${colors.white};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background-color: ${props =>
        props.hollow ? colors.white : darken(0.1, props.color)};
      border-color: ${props => getHoverColor(props)};
      color: ${props => (props.hollow ? props.color : props.white)};
    }
  }

  ${media.medium`
    font-size: 16px;
    padding: 11px 30px;
  `}
`

const Button = props => <StyledButton {...props} />

Button.defaultProps = {
  color: colors.blueBayoux,
  hollow: false
}

Button.propTypes = {
  color: PropTypes.string,
  hollow: PropTypes.bool
}

export default Button
