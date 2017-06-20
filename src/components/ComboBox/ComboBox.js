import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import { TextField } from '../TextField'
import { Dropdown } from '../Dropdown'
import { KeyCodeListener } from '../KeyCodeListener'

import ComboBoxOptions from './_options'
import ComboBoxEmpty from './_empty'

class ComboBox extends Component {
  state = {
    filterText: '',
    isOpen: false,
    openDropdown: () => this.setState({ isOpen: true }),
    closeDropdown: () => this.setState({ isOpen: false, focusedIndex: -1 }),
    focusedIndex: -1
  }
  componentDidUpdate(prevProps, prevState) {
    const { focusedIndex } = this.state
    // only scroll into view if the focusedItem item changed last render
    if (focusedIndex !== prevState.focusedIndex) {
      this._scrollFocusedIntoView()
    }
  }
  render() {
    const {
      selectedOptions,
      onSelect,
      placeHolder,
      emptyResultString
    } = this.props
    const { isOpen, openDropdown, closeDropdown, focusedIndex } = this.state
    const TriggerNode = (
      <TextField
        style={{ margin: '0rem' }}
        placeHolder={placeHolder}
        onChange={e => this.setState({ filterText: e.target.value })}
        value={this.state.filterText}
      />
    )
    const Listener = (
      <KeyCodeListener
        onEsc={closeDropdown}
        onTab={closeDropdown}
        onUp={this._decFocusedIndex}
        onDown={this._incFocusedIndex}
        onEnter={this._selectFocusedOption}
      />
    )
    const filteredOptions = this._getFilteredOptions()
    return (
      <Dropdown
        fullWidth
        triggerNode={TriggerNode}
        isOpen={isOpen}
        closeDropdown={closeDropdown}
        openDropdown={openDropdown}
        lockWidth
      >
        {isOpen && Listener}
        {this._shouldShowEmptyResults()
          ? <ComboBoxEmpty emptyResultString={emptyResultString} />
          : <ComboBoxOptions
              ref={'comboBoxOptions'}
              emptyResultString={emptyResultString}
              options={filteredOptions}
              selectedOptions={selectedOptions}
              focusedIndex={focusedIndex}
              onSelect={onSelect}
            />}
      </Dropdown>
    )
  }
  _shouldShowEmptyResults = () => {
    const filteredOptions = this._getFilteredOptions()
    const { options } = this.props
    return filteredOptions.length === 0 && options.length !== 0
  }
  _incFocusedIndex = () => {
    const filteredOptions = this._getFilteredOptions()
    if (this.state.focusedIndex < filteredOptions.length - 1) {
      this.setState({ focusedIndex: this.state.focusedIndex + 1 })
    }
  }
  _decFocusedIndex = () => {
    if (this.state.focusedIndex > 0) {
      this.setState({ focusedIndex: this.state.focusedIndex - 1 })
    }
  }
  _selectFocusedOption = () => {
    const { onSelect } = this.props
    const { focusedIndex } = this.state
    const filteredOptions = this._getFilteredOptions()
    onSelect(filteredOptions[focusedIndex])
  }
  _scrollFocusedIntoView = () => {
    const { focusedIndex } = this.state
    const options = this.refs.comboBoxOptions
    const optionsNode = ReactDOM.findDOMNode(options)
    const node = options && ReactDOM.findDOMNode(options.refs[focusedIndex])
    if (node && optionsNode) {
      const optionPos = node.offsetTop + node.clientHeight
      const height = optionsNode.clientHeight
      const scrollHeight = optionsNode.scrollHeight
      if (optionPos > height) {
        optionsNode.scrollTop = optionPos - height
      } else if (scrollHeight > height) {
        optionsNode.scrollTop = 0
      }
    }
  }
  _getFilteredOptions = () => {
    const { options } = this.props
    const { filterText } = this.state
    const filteredOptions = options.filter(option => {
      return option.toLowerCase().includes(filterText.toLowerCase())
    })
    return filteredOptions.length ? filteredOptions : []
  }
}

ComboBox.propTypes = {
  emptyResultString: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeHolder: PropTypes.string,
  selectedOptions: PropTypes.array.isRequired
}

export default ComboBox
