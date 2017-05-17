import React, {Component, PropTypes} from 'react'
import {colors} from '@resmio/rollico/dist'
import {css} from 'glamor'

import {CheckIcon, BlankIcon} from '../../icons'

const styles = {
  container: css({
    padding: '0.5rem 1rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: colors.silver
    }
  }),
  text: css({
    paddingLeft: '0.75rem'
  })
}

class ComboBoxOption extends Component {
  render () {
    const {text, selected, pseudoSelected, onClick} = this.props
    return (
      <div {...styles.container}>
        {selected
          ? <CheckIcon xsmall style={{strokeWidth: '3px', color: colors.pacificBlue}} />
          : <BlankIcon xsmall />
        }
        <span {...styles.text}>{text}</span>
      </div>
    )
  }
}

ComboBoxOption.propTypes = {
  onClick: PropTypes.func,
  pseudoSelected: PropTypes.bool,
  selected: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default ComboBoxOption
