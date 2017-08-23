import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import EventListener from 'react-event-listener'
import styled from 'styled-components'

const StyledAnchoredContent = styled.div`
  position: fixed;
`

class Anchored extends Component {
  componentDidMount() {
    this._setPosition()
  }
  componentDidUpdate() {
    this._setPosition()
  }
  render() {
    const { children, show } = this.props
    return (
      <div>
        {show && <EventListener target='window' onResize={this._setPosition} />}
        {show && <EventListener target='window' onScroll={this._setPosition} />}
        <StyledAnchoredContent ref='anchored'>
          {children}
        </StyledAnchoredContent>
      </div>
    )
  }
  _setPosition = () => {
    const { anchorEl } = this.props
    const { bottom, left, width, height } = this._getPosition()
    const el = findDOMNode(this.refs.anchored)
    el.style.top = bottom + 'px'
    el.style.left = left + 'px'
    el.style.width = width + 'px'
    el.style.height = height + 'px'
  }
  _getPosition = () => {
    const { anchorEl } = this.props
    const rect = anchorEl.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
      width: anchorEl.clientWidth,
      right: anchorEl.clientHeight
    }
  }
}

Anchored.propTypes = {
  anchorEl: PropTypes.object,
  show: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Anchored
