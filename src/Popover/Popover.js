import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../variables'
import KeyCodeListener from '../KeyCodeListener'

const StyledContainer = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
`

const StyledBackdrop = styled.div`
  background-color: ${props => props.show ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
`

const StyledContent = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 101;
`

class Popover extends Component {
  render () {
    const {show, showBackdrop, onClose, children, width} = this.props
    return (
      <StyledContainer show={show}>
        <KeyCodeListener onEsc={onClose} />
        <StyledBackdrop show={showBackdrop} onClick={this._onBackdropClick}>
          <StyledContent>
            {children}
          </StyledContent>
        </StyledBackdrop>
      </StyledContainer>
    )
  }
  _onBackdropClick = () => {
    const {onClose} = this.props
    onClose()
  }
}

Popover.propTypes = {
  show: PropTypes.bool.isRequired,
  showBackdrop: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  width: PropTypes.number
}

export default Popover
