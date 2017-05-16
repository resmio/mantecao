import React, {Component, PropTypes} from 'react'

import {TextField} from '../TextField'
import {Dropdown} from '../Dropdown'

class ComboBox extends Component {
  state = {
    filterText: ''
  }
  render () {
    const {options, selected, onSelect, placeHolder} = this.props
    const TriggerNode = (
      <TextField
        placeHolder={placeHolder}
        onChange={(e) => this.setState({filterText: e.target.value})}
        value={this.state.filterText}
      />
    )
    return (
      <Dropdown triggerNode={TriggerNode}>
        {
          options.filter((option) => {
            return option.toLowerCase().includes(this.state.filterText.toLowerCase())
          }).map((option, i) => {
            return selected.includes(option)
              ? <div key={i} onClick={() => onSelect(option)}>{option} selected</div>
              : <div key={i} onClick={() => onSelect(option)}>{option} not selected</div>
          })
        }
      </Dropdown>
    )
  }
}

ComboBox.propTypes = {
  emptyResults: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeHolder: PropTypes.string,
  selected: PropTypes.array.isRequired
}

export default ComboBox
