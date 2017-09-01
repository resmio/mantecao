import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFullscreen = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`

const StyledContent = styled.div`
  max-height: 100%;
  overflow-y: auto;
`

class Fullscreen extends Component {
  render() {
    const { children } = this.props
    return (
      <StyledFullscreen>
        <StyledContent onClick={this._onContentClick}>
          {children}
        </StyledContent>
      </StyledFullscreen>
    )
  }
  _onContentClick = e => {
    e.stopPropagation()
  }
}

Fullscreen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Fullscreen
