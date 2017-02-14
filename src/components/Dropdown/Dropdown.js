import React, {Component, PropTypes} from 'react'
import EventListener from 'react-event-listener'
import {colors} from '../../variables'

const defaultContainerStyle = {
  position: 'relative',
  display: 'inline-block'
}

const defaultChildrenStyle = {
  position: 'absolute',
  background: colors.white,
  border: '1px solid',
  borderColor: colors.pacificBlue,
  minWidth: '100%',
  zIndex: 1000
}
const centerChildren = {left: '50%', transform: 'translate(-50%, 0)'}
const leftChildren = {left: 0}
const rightChildren = {right: 0}

const defaultTriggerStyle = {
  width: '100%'
}

const defaultBorderArrow = {
  bottom: '-6px',
  left: '50%',
  border: 'solid transparent',
  height: '0px',
  width: '0px',
  position: 'absolute',
  pointerEvents: 'none',
  borderBottomColor: colors.pacificBlue,
  borderWidth: '6px',
  marginLeft: '-6px',
  zIndex: 1001
}

const defaultBackgroundArrow = {
  bottom: '-6px',
  left: '50%',
  border: 'solid transparent',
  height: '0px',
  width: '0px',
  position: 'absolute',
  pointerEvents: 'none',
  borderBottomColor: colors.white,
  borderWidth: '5px',
  marginLeft: '-5px',
  zIndex: 1002
}

class Dropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      openDropdown: () => this.setState({isOpen: true}),
      closeDropdown: () => this.setState({isOpen: false})
    }
  }
  render () {
    const {children, triggerNode, keepOpenOnOutsideClick, disabled, left, right, center, arrow, borderColor, backgroundColor} = this.props
    const {openDropdown, closeDropdown, isOpen} = this[this.hasExternalControls() ? 'props' : 'state']

    const computedTriggerStyle = Object.assign({},
      defaultTriggerStyle,
      {cursor: disabled ? 'not-allowed' : 'pointer'}
    )

    const computedChildrenStyle = Object.assign({},
      defaultChildrenStyle,
      borderColor ? {borderColor} : {},
      backgroundColor ? {backgroundColor} : {},
      arrow ? {marginTop: '5px'} : {},
      left ? leftChildren : {},
      right ? rightChildren : {},
      center ? centerChildren : {}
    )

    const computedBackgroundArrow = Object.assign({},
      defaultBackgroundArrow,
      backgroundColor ? {borderBottomColor: backgroundColor} : {},
    )

    const computedBorderArrow = Object.assign({},
      defaultBorderArrow,
      borderColor ? {borderBottomColor: borderColor} : {},
    )

    const ArrowThing = (
      <div>
        <div style={computedBorderArrow}></div>
        <div style={computedBackgroundArrow}></div>
      </div>
    )

    const toggleFunc = isOpen ? closeDropdown : openDropdown
    const computedToggleFunc = disabled ? () => false : toggleFunc

    return (
      <div className='dropdown__bubble' style={defaultContainerStyle}>
        {isOpen && !keepOpenOnOutsideClick
          ? <EventListener target={window} onClick={this.onOutsideClick} />
          : null
        }
        <div onClick={computedToggleFunc} style={computedTriggerStyle}>
          {triggerNode}
        </div>
        {arrow && isOpen ? ArrowThing : null}
        {isOpen
          ? <div style={computedChildrenStyle}>{children}</div>
          : null
        }
      </div>
    )
  }
  onOutsideClick = (e) => {
    const {closeDropdown} = this[this.hasExternalControls() ? 'props' : 'state']
    if (!e.target.closest('.dropdown__bubble')) { closeDropdown() }
  }
  hasExternalControls = () => {
    const {openDropdown, closeDropdown, isOpen} = this.props
    return (openDropdown !== undefined && closeDropdown !== undefined && openDropdown !== undefined)
  }
}

Dropdown.propTypes = {
  arrow: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  closeDropdown: PropTypes.func,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  keepOpenOnOutsideClick: PropTypes.bool,
  left: PropTypes.bool,
  openDropdown: PropTypes.func,
  right: PropTypes.bool,
  triggerNode: PropTypes.node.isRequired
}

export default Dropdown
