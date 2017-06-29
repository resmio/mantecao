import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tag from '../Tag'

// We need this on every component to apply our minimal base
// This runs on top of normalize.css which is included here in the storybook
// template, we don't want to call it from here since we don't want it included
// on every component
import globalStyles from '../styles.global'
globalStyles()

const ItemStyled = styled.div`
  display: inline-block;
  margin: 0.4em 0.4em 0.4em 0;
`

const TagCloud = ({ names, onClickAction }) =>
  <div>
    {names.map((name, i) =>
      <ItemStyled key={i}>
        {onClickAction
          ? <Tag name={name} onClickAction={name => onClickAction(name)} />
          : <Tag name={name} />}
      </ItemStyled>
    )}
  </div>

TagCloud.propTypes = {
  names: PropTypes.array,
  onClickAction: PropTypes.func
}

export default TagCloud
