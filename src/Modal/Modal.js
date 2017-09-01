import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Popover from '../Popover'
import { colors } from '../variables'

class Modal extends Component {
  render() {
    const { children, show, onClose } = this.props
    return (
      <Popover show={show} showBackdrop onClose={onClose}>
        {children}
      </Popover>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Modal
