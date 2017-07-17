import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, theme } from '../variables'
import { ArrowIcon } from '../icons'

// TODO: move to utils
const _emptyFunction = () => {}

const stopPropagation = fn => e => {
  if (e) {
    e.stopPropagation()
  }
  fn()
}

const emptyFunctionWithNoPropagation = stopPropagation(_emptyFunction)

// TODO: Move line-heigth to theme
const StyledDiv = styled.div`
  border: 1px solid ${colors.pacificBlue};
  border-radius: ${theme.borderRadius};
  display: flex;
  max-width: 13em;
  padding-left: ${theme.baseSpace};
  color: ${theme.fontColor};
  align-items: center;
  line-height: 2.5;
`

const StyledChildren = styled.div`
  flex: 1;
`

const StyledExpander = styled.div`
  color: ${colors.alto};
  max-width: 5em;
  margin-left: auto;
  margin-right: ${theme.smallSpace};
`

const StyledControls = styled.div`
  color: ${colors.alto};
  display: flex;
  flex-direction: column;
  flex-basis: 1.8em;
`

const StyledButton = styled.div`
  border-left: 1px solid ${colors.pacificBlue};
  line-height: 1.25;
  align-self: center;
`

const Stepper = ({
  children,
  customIcon,
  disabled,
  onClickAction,
  onDecreaseClick,
  onIncreaseClick
}) => {
  let clickAction
  let increaseAction
  let decreaseAction

  if (!disabled) {
    clickAction = onClickAction
    increaseAction = stopPropagation(onIncreaseClick)
    decreaseAction = stopPropagation(onDecreaseClick)
  } else {
    clickAction = _emptyFunction
    increaseAction = emptyFunctionWithNoPropagation
    decreaseAction = emptyFunctionWithNoPropagation
  }

  return (
    <StyledDiv onClick={clickAction}>

      <StyledChildren>
        {children}
      </StyledChildren>

      <StyledExpander>
        {customIcon ? customIcon : <ArrowIcon width="1em" />}
      </StyledExpander>

      <StyledControls>
        <StyledButton id="mantecao-stepper-inc" onClick={increaseAction}>
          <ArrowIcon width="1em" mirrorX />
        </StyledButton>
        <StyledButton id="mantecao-stepper-dec" onClick={decreaseAction}>
          <ArrowIcon width="1em" />
        </StyledButton>
      </StyledControls>

    </StyledDiv>
  )
}

Stepper.PropTypes = {
  children: PropTypes.node.isRequired,
  customIcon: PropTypes.node,
  onClickAction: PropTypes.function,
  onIncreaseClick: PropTypes.function,
  onDecreaseClick: PropTypes.function
}

export default Stepper
