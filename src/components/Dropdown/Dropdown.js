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
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      openDropdown: () => this.setState({isOpen: true}),
      closeDropdown: () => this.setState({isOpen: false})
    }
  }
  render () {
    const {children, triggerNode, keepOpenOnOutsideClick, disabled} = this.props
    const {openDropdown, closeDropdown, isOpen} = this[this.hasExternalControls() ? 'props' : 'state']

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
    const {closeDropdown} = this[this.hasExternalControls() ? 'props' : 'state']
    if (!e.target.closest('.dropdown__bubble')) { closeDropdown() }
  }
  hasExternalControls = () => {
    const {openDropdown, closeDropdown, isOpen} = this.props
    return (openDropdown !== undefined && closeDropdown !== undefined && openDropdown !== undefined)
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequred,
  closeDropdown: PropTypes.func,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  keepOpenOnOutsideClick: PropTypes.bool,
  openDropdown: PropTypes.func,
  triggerNode: PropTypes.node.isRequired
}

export default Dropdown
