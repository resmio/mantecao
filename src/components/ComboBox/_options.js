import React, {Component, PropTypes} from 'react'

import Option from './_option'

class ComboBoxOptions extends Component {
  render () {
    const {options, selectedOptions, pseudoSelectedIndex, onSelect} = this.props
    return (
      <div>
        {
          options.map((option, i) => {
            return (
              <Option
                key={i}
                selected={selectedOptions.includes(option)}
                onClick={() => onSelect(option)}
                psuedoSelected={i === pseudoSelectedIndex}
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
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  pseudoSelectedIndex: PropTypes.number,
  selectedOptions: PropTypes.array.isRequired
}

export default ComboBoxOptions
