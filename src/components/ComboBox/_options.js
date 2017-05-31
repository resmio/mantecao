import React, {Component, PropTypes} from 'react'

import Option from './_option'
import {styles} from './styles'

class ComboBoxOptions extends Component {
  render () {
    const {options, selectedOptions, focusedIndex, onSelect} = this.props
    return (
      <div {...styles.options.wrapper}>
        {
          options.map((option, i) => {
            return (
              <Option
                key={i}
                ref={i}
                selected={selectedOptions.includes(option)}
                onClick={() => onSelect(option)}
                focused={i === focusedIndex}
                text={option}
              />
            )
          })
        }
      </div>
    )
  }
}

ComboBoxOptions.propTypes = {
  focusedIndex: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired
}

export default ComboBoxOptions
