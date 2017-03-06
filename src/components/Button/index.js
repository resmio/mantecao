import React, {Component, PropTypes} from 'react'
import styled from 'styled-components';

import {colors} from '../../variables'
import {colorLuminance} from '../../utils/colorUtils'

const Button = styled.button`
  padding: 0.8rem 2rem;
  color: ${props => props.color || colors.white};
  background-color: ${props => props.background || colors.alto};
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  border: ${props => props.border ? '3px solid ' + props.border : 'none'};
  border-radius: 4px;
  box-sizing: border-box;
  vertical-align: middle;

  &:hover {
    color: ${props => props.background || colors.alto};
    background-color: ${props => props.background ? colorLuminance(props.background, -0.5) : colors.white};
  }
`

Button.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string
}

export default Button
