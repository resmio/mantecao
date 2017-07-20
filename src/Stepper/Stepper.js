import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ArrowIcon } from '../icons'

import {
  StyledDiv,
  StyledStepperButton,
  StyledExpander,
  StyledControls,
  StyledChildren
} from './_Styled'

const Stepper = ({
  children,
  icon,
  increaseIcon,
  decreaseIcon,
  disabled,
  onClick,
  onDecreaseClick,
  onIncreaseClick
}) => {
  return (
    <StyledDiv disabled={disabled}>

      <StyledChildren onClick={disabled ? () => false : onClick}>
        {children}
      </StyledChildren>

      <StyledExpander
        disabled={disabled}
        onClick={disabled ? () => false : onClick}
      >
        {icon ||
          <ArrowIcon
            width="1em"
            height="1em"
            style={{ strokeWidth: '2.5px' }}
          />}
      </StyledExpander>

      <StyledControls>
        <StyledStepperButton onClick={onIncreaseClick} disabled={disabled}>
          {increaseIcon ||
            <ArrowIcon
              width="1em"
              height="1em"
              style={{ strokeWidth: '2.5px' }}
              mirrorX
            />}
        </StyledStepperButton>
        <StyledStepperButton onClick={onDecreaseClick} disabled={disabled}>
          {increaseIcon ||
            <ArrowIcon
              width="1em"
              height="1em"
              style={{ strokeWidth: '2.5px' }}
            />}
        </StyledStepperButton>
      </StyledControls>

    </StyledDiv>
  )
}

Stepper.PropTypes = {
  children: PropTypes.node.isRequired,
  decreaseIcon: PropTypes.node,
  icon: PropTypes.node,
  increaseIcon: PropTypes.node,
  onClick: PropTypes.function,
  onDecreaseClick: PropTypes.function,
  onIncreaseClick: PropTypes.function
}

export default Stepper
