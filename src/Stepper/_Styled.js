import React from 'react'
import styled from 'styled-components'

import { colors, theme } from '../variables'

export const StyledStepperButton = styled.button`
  background-color: ${colors.white};
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-radius: 0;
  border-left: 1px solid currentColor;
  color: currentColor;
  cursor: pointer;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-size: ${theme.fontSize};
  justify-content: center;
  opacity: 1;
  padding: ${theme.smallSpace} ${theme.baseSpace};
  white-space: normal;

  &:hover,
  &:focus,
  &:disabled,
  &:disabled:hover {
    background-color: ${colors.whiteSand};
    color: currentColor;
    opacity: 1;
  }

  &:first-of-type {
    border-top-right-radius: ${theme.borderRadius};
    border-bottom: 1px solid currentColor;
  }

  &:last-of-type {
    border-bottom-right-radius: ${theme.borderRadius};
  }
`

export const StyledDiv = styled.div`
  border: 1px solid ${colors.pacificBlue};
  border-radius: ${theme.borderRadius};
  color: ${theme.fontColor};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'inherit')};
  display: flex;
  font-size: ${theme.fontSize};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding-left: ${theme.baseSpace};
`

export const StyledChildren = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`

export const StyledExpander = styled.div`
  color: ${colors.silver};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.baseSpace};
`

export const StyledControls = styled.div`
  color: ${colors.silver};
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
`
