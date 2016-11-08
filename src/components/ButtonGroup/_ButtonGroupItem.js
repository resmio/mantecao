import React, {PropTypes, Component} from 'react'
import {Button} from '../Button'

import {colors} from '../../variables'

const itemStyle = {
  display: 'inline-block',
  borderRadius: '0px',
  border: '1px solid',
  boxShadow: 'inset 0 1px rgba(0,0,0,.05)'
}
const firstItemStyle = {
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px'
}
const middleItemStyle = {
  borderLeft: 'none'
}
const lastItemStyle = {
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px'
}
const selectedItemStyle = {
  backgroundColor: colors.pacificBlue,
  borderColor: colors.deepCerulean
}
const unselectedItemStyle = {
  borderColor: colors.silver
}

class ButtonGroupItem extends Component {
  render () {
    const {text, value, onSelect, first, last, selected, disabled} = this.props
    const baseStyle = Object.assign({},
      itemStyle,
      first ? firstItemStyle : middleItemStyle,
      last ? lastItemStyle : {},
      selected ? selectedItemStyle : unselectedItemStyle
    )
    return (
      <Button
        style={baseStyle}
        onClick={() => onSelect(value)}
        disabled={disabled}
      >
        {text}
      </Button>
    )
  }
}

const {bool, func, number, string, oneOfType} = PropTypes
ButtonGroupItem.propTypes = {
  text: oneOfType([string, number]),
  value: oneOfType([string, number]),
  first: bool,
  last: bool,
  selected: bool,
  disabled: bool,
  onSelect: func
}

export default ButtonGroupItem
