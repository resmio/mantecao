import React, { Component, PropTypes } from 'react'

import { CheckIcon, BlankIcon } from '../icons'
import { styles } from './styles'

class ComboBoxOption extends Component {
  render() {
    const { text, selected, focused, onClick } = this.props
    return (
      <div
        {...Object.assign(
          {},
          styles.option.wrapper,
          focused ? styles.option.focused : {}
        )}
        onClick={onClick}
      >
        {selected
          ? <CheckIcon xsmall style={styles.option.checkIcon} />
          : <BlankIcon xsmall />}
        <span {...styles.option.text}>{text}</span>
      </div>
    )
  }
}

ComboBoxOption.propTypes = {
  focused: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default ComboBoxOption
