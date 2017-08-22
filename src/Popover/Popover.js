import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../variables'
import Fullscreen from './_Fullscreen'
import Anchored from './_Anchored'
import KeyCodeListener from '../KeyCodeListener'

const StyledContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: relative;
`

const StyledBackdrop = styled.div`
  background-color: ${props =>
    props.show ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
`

class Popover extends Component {
  render() {
    const {
      show,
      showBackdrop,
      onClose,
      children,
      width,
      anchorEl
    } = this.props
    return (
      <StyledContainer show={show}>
        <KeyCodeListener onEsc={onClose} />
        <StyledBackdrop show={showBackdrop} onClick={this._onBackdropClick} />
        {anchorEl
          ? <Anchored>{children}</Anchored>
          : <Fullscreen width={width}>{children}</Fullscreen>}

      </StyledContainer>
    )
  }
  _onBackdropClick = () => {
    const { onClose } = this.props
    onClose()
  }
}

Popover.propTypes = {
  anchorEl: PropTypes.element,
  show: PropTypes.bool.isRequired,
  showBackdrop: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  width: PropTypes.number
}

export default Popover
