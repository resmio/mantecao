import React, { Component, PropTypes } from 'react'

import { styles } from './styles'

const ComboBoxEmpty = ({ emptyResultString }) =>
  <div {...styles.options.empty}>
    {emptyResultString || 'Nothing matches'}
  </div>

ComboBoxEmpty.propTypes = {
  emptyResultString: PropTypes.string
}

export default ComboBoxEmpty
