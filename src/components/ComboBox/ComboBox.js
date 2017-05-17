import React, {Component, PropTypes} from 'react'

import {TextField} from '../TextField'
import {Dropdown} from '../Dropdown'

import ComboBoxOptions from './_options'

class ComboBox extends Component {
  state = {
    filterText: '',
    isOpen: false,
    openDropdown: (e) => this.setState({isOpen: true}),
    closeDropdown: () => this.setState({isOpen: false})
  }
  render () {
    const {selectedOptions, onSelect, placeHolder} = this.props
    const {isOpen, openDropdown, closeDropdown} = this.state
    const TriggerNode = (
      <TextField
        placeHolder={placeHolder}
        onChange={(e) => this.setState({filterText: e.target.value})}
        value={this.state.filterText}
      />
    )
    const filteredOptions = this._getFilteredOptions()
    return (
      <Dropdown
        triggerNode={TriggerNode}
        isOpen={isOpen}
        closeDropdown={closeDropdown}
        openDropdown={openDropdown}
      >
        <ComboBoxOptions
          options={filteredOptions}
          selectedOptions={selectedOptions}
          pseudoSelectedIndex={undefined}
          onSelect={onSelect}
        />
      </Dropdown>
    )
  }
  _getFilteredOptions = () => {
    const {options} = this.props
    const {filterText} = this.state
    return options.filter((option) => {
      return option.toLowerCase().includes(filterText.toLowerCase())
    })
  }
}

ComboBox.propTypes = {
  emptyResults: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeHolder: PropTypes.string,
  selectedOptions: PropTypes.array.isRequired
}

export default ComboBox
