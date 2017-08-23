import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import KeyCodeListener from '../KeyCodeListener'
import { colors } from '../variables'
import Fullscreen from './_Fullscreen'
import Anchored from './_Anchored'

const StyledContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  background-color: ${props => props.showBackdrop ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
`

class Popover extends Component {
  render() {
    const {anchorEl, children, show, showBackdrop} = this.props
    return (
      <StyledContainer
        show={show}
        showBackdrop={showBackdrop}
        onClick={this._requestClose}>
        {show && <KeyCodeListener onEsc={this._requestClose} />}
        {anchorEl
          ? <Anchored show={show} anchorEl={anchorEl}>{children}</Anchored>
          : <Fullscreen>{children}</Fullscreen>
        }
      </StyledContainer>
    )
  }
  _requestClose = () => {
    const { onClose } = this.props
    onClose()
  }
}

Popover.propTypes = {
  anchorEl: PropTypes.object,
  show: PropTypes.bool,
  showBackdrop: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Popover
