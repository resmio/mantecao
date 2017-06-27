import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { colors } from '../variables'

// TODO: get the padding spaces from the theme
const Empty = styled.div`
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-right: 1rem;
  font-style: italic;
  color: ${colors.silver};
`

const ComboBoxEmpty = ({ emptyResultString }) =>
  <Empty>
    {emptyResultString || 'Nothing matches'}
  </Empty>

ComboBoxEmpty.propTypes = {
  emptyResultString: PropTypes.string
}

export default ComboBoxEmpty
