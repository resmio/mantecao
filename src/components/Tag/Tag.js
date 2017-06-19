import React, { Component, PropTypes } from 'react'
import { merge } from 'glamor'

import { CloseIcon } from '../../icons'

import { styles } from './styles'

const AdjustedCloseIcon = (
  <CloseIcon
    style={{
      height: '1.3rem',
      width: '1.3rem',
      strokeWidth: '2.5px',
      marginBottom: '0.2rem'
    }}
  />
)

class Tag extends Component {
  state = {
    hovered: false
  }

  render() {
    const { name, onClickAction } = this.props

    return (
      <div {...merge(styles.tag, this.state.hovered && styles.hover)}>
        <span {...styles.text}>{name}</span>
        {onClickAction &&
          <span
            {...styles.close}
            onClick={() => onClickAction(name)}
            onMouseEnter={() => {
              this.setState({ hovered: true })
            }}
            onMouseLeave={() => {
              this.setState({ hovered: false })
            }}
          >
            {AdjustedCloseIcon}
          </span>}
      </div>
    )
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onClickAction: PropTypes.func
}

export default Tag
