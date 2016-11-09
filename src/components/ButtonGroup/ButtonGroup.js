import React, {PropTypes, Component} from 'react'

import ButtonGroupItem from './_ButtonGroupItem'

class ButtonGroup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: props.selected || []
    }
  }
  render () {
    const {options, optionValues, disabled} = this.props
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          options.map((option, index) => {
            return (
              <ButtonGroupItem
                key={index}
                first={index === 0}
                last={index === (options.length - 1)}
                value={option}
                text={optionValues[index]}
                selected={this.state.selected.indexOf(option) > -1}
                onSelect={this._toggleOption}
                disabled={disabled ? disabled.indexOf(option) > -1 : undefined}
              />
            )
          })
        }
      </div>
    )
  }
  _toggleOption = (option) => {
    const {onChange} = this.props
    let newArray = this.state.selected.slice()
    let index = this.state.selected.indexOf(option)
    if (index > -1) {
      newArray.splice(index, 1)
    } else {
      newArray.push(option)
    }
    this.setState({selected: newArray}, () => onChange(this.state.selected))
  }
}

ButtonGroup.propTypes = {
  disabled: PropTypes.array,
  onChange: PropTypes.func,
  optionValues: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired
}

export default ButtonGroup
