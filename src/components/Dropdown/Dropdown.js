import React, {Component, PropTypes} from 'react'
import EventListener from 'react-event-listener'

const defaultContainerStyle = {
  position: 'relative',
  display: 'inline-block'
}

const defaultChildrenStyle = {
  position: 'absolute',
  background: 'white',
  zIndex: 1000
}
const centerChildren = {left: '50%', transform: 'translate(-50%, 0)'}
const leftChildren = {left: 0}
const rightChildren = {right: 0}

const defaultTriggerStyle = {
  width: '100%'
}

class Dropdown extends Component {
  render () {
    const {openDropdown, closeDropdown, isOpen, children, triggerNode, keepOpenOnOutsideClick, disabled, left, right, center} = this.props

    const computedTriggerStyle = Object.assign({},
      defaultTriggerStyle,
      {cursor: disabled ? 'not-allowed' : 'pointer'}
    )

    const computedChildrenStyle = Object.assign({},
      defaultChildrenStyle,
      left ? leftChilren : {},
      right ? rightChildren : {},
      center ? centerChildren : {}
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
        <div style={computedChildrenStyle}>
          {/* remount the children when openning */
            isOpen ? children : null
          }
        </div>
      </div>
    )
  }
  onOutsideClick = (e) => {
    const {closeDropdown} = this.props
    if (!e.target.closest('.dropdown__bubble')) { closeDropdown() }
  }
}

Dropdown.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  keepOpenOnOutsideClick: PropTypes.bool,
  left: PropTypes.bool,
  openDropdown: PropTypes.func.isRequired,
  right: PropTypes.bool,
  triggerNode: PropTypes.node.isRequired
}

export default Dropdown
