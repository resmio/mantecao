import React from 'react'
import PropTypes from 'prop-types'
import { darken } from 'polished'

import { colors } from '../variables'
import Button from '../Button'

const ButtonGroupItem = ({
  text,
  onSelect,
  disabled,
  first,
  last,
  selected,
  value
}) => {
  const style = {
    borderTopLeftRadius: first ? '4px' : '0px',
    borderBottomLeftRadius: first ? '4px' : '0px',
    borderTopRightRadius: last ? '4px' : '0px',
    borderBottomRightRadius: last ? '4px' : '0px',
    boxShadow: 'inset 0 1px rgba(0,0,0,.05)',
    padding: '.5em 1.5em',
    borderLeft: `1px solid ${selected
      ? darken(0.1, colors.blueBayoux)
      : darken(0.1, colors.silver)}`
  }

  return (
    <Button
      onClick={() => onSelect(value)}
      color={selected ? colors.blueBayoux : colors.silver}
      disabled={disabled}
      style={style}
    >
      {text}
    </Button>
  )
}

const { bool, func, number, string, oneOfType } = PropTypes
ButtonGroupItem.propTypes = {
  disabled: bool,
  first: bool.isRequired,
  last: bool.isRequired,
  onSelect: func.isRequired,
  selected: bool.isRequired,
  text: oneOfType([string, number]).isRequired,
  value: oneOfType([string, number, func]).isRequired
}

export default ButtonGroupItem
