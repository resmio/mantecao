import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFullscreen = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledContent = styled.div`
  max-height: 100%;
  overflow-y: auto;
`

class Fullscreen extends Component {
  render() {
    const { children } = this.props
    return (
      <StyledFullscreen  onClick={this._onFullscreenClick}>
        <StyledContent onClick={this._onContentClick}>
          {children}
        </StyledContent>
      </StyledFullscreen>
    )
  }
  _onContentClick = (e) => {
    e.stopPropagation()
  }
  _onFullscreenClick = () => {
    const { onClose } = this.props
    onClose()
  }
}

Fullscreen.propTypes = {
  anchorEl: PropTypes.object,
  show: PropTypes.bool.isRequired,
  showBackdrop: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Fullscreen
