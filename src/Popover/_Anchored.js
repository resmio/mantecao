import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAnchoredContent = styled.div`
  position: fixed;
  z-index: 101;
`

class Anchored extends Component {
  componentDidMount() {
    this._setPosition()
  }
  render() {
    return (
      <StyledAnchoredContent ref="anchored">
        {children}
      </StyledAnchoredContent>
    )
  }
  _setPosition = () => {
    const { anchorEl } = this.props
    const { top, left, right, bottom } = this._getPosition()
    const el = findDOMNode(this.refs.anchored)
    el.styles.top = top
    el.styles.botom = bottom
    el.styles.left = left
    el.styles.right = right
  }
  _getPosition = () => {
    const { anchorEl } = this.props
    const rect = anchorEl.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      right: rect.right
    }
  }
}

Anchored.propTypes = {
  anchorEl: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Anchored
