import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFullscreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  margin: 1em;
  z-index: 101;
  pointer-events: none;
`

const StyledCentered = styled.div`
  margin: auto;
  pointer-events: none;
  overflow-y: auto;
  max-height: 100%;
`

const StyledContent = styled.div`
  pointer-events: auto;
`

class Fullscreen extends Component {
  render() {
    const { children } = this.props
    return (
      <StyledFullscreen>
        <StyledCentered>
          <StyledContent>
            {children}
          </StyledContent>
        </StyledCentered>
      </StyledFullscreen>
    )
  }
}

Fullscreen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Fullscreen
