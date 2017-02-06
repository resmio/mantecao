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

const defaultTriggerStyle = {
  width: '100%'
}

class Dropdown extends Component {
  render () {
    const {openDropdown, closeDropdown, isOpen, children, triggerNode, keepOpenOnOutsideClick, disabled} = this.props

    const computedTriggerStyle = Object.assign({},
      defaultTriggerStyle,
      {cursor: disabled ? 'not-allowed' : 'pointer'}
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
        <div style={defaultChildrenStyle}>
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
  children: PropTypes.node.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  keepOpenOnOutsideClick: PropTypes.bool,
  openDropdown: PropTypes.func.isRequired,
  triggerNode: PropTypes.node.isRequired
}

export default Dropdown
