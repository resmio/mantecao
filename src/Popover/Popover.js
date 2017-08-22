import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
`

class Popover extends Component {
  render() {
    const {anchorEl} = this.props
    return (
      <StyledContainer {...this.props}>
        {anchorEl
          ? <Anchored {...this.props} />
          : <Fullscreen {...this.props} />
        }
      </StyledContainer>
    )
  }
}

Popover.propTypes = {
  anchorEl: PropTypes.object,
  show: PropTypes.bool.isRequired,
  showBackdrop: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Popover
