import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tag from '../Tag'

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
