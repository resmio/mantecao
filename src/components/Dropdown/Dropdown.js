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
  boxShadow: '0px 2px 7px rgba(0,0,0,.25)',
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
  state = {
    isOpen: false,
    openDropdown: () => this.setState({isOpen: true}),
    closeDropdown: () => this.setState({isOpen: false})
  }
  render () {
    const {children, triggerNode, disabled, left, right, center, arrow, lockWidth, fullWidth, borderColor, backgroundColor, closeOnClick} = this.props
    const {isOpen, openDropdown} = this._getControls()

    const computedContainerStyle = Object.assign({},
      defaultContainerStyle,
      fullWidth ? {width: '100%'} : {}
    )

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
      center ? centerChildren : {},
      lockWidth ? {maxWidth: '100%'} : {}
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
    return (
      <div
        ref='container'
        onClick={this._onContainerClick}
        style={computedContainerStyle}
      >
        {isOpen
          ? <EventListener target={window} onClick={this._onWindowClick} />
          : null
        }
        <div style={computedTriggerStyle}>
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
  _onWindowClick = (e) => {
    const {closeOnClick, disabled} = this.props
    const {closeDropdown} = this._getControls()
    if (!this.refs.container.contains(e.target)) {
      closeDropdown()
    }
  }
  _onContainerClick = (e) => {
    const {closeOnClick, disabled} = this.props
    const {isOpen, openDropdown, closeDropdown} = this._getControls()
    // then explicitly call an action based on state/prop conditions
    if (isOpen && (closeOnClick || disabled)) {
      closeDropdown()
    } else if (!isOpen && !disabled) {
      openDropdown()
    }
  }
  _getControls = () => {
    const {openDropdown, closeDropdown, isOpen} = this[this._hasExternalControls() ? 'props' : 'state']
    return {openDropdown, isOpen, closeDropdown}
  }
  _hasExternalControls = () => {
    // only if we have full controll from outside can use use props
    const {openDropdown, closeDropdown, isOpen} = this.props
    return (openDropdown !== undefined && closeDropdown !== undefined && isOpen !== undefined)
  }
}

Dropdown.propTypes = {
  arrow: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  closeOnClick: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  left: PropTypes.bool,
  lockWidth: PropTypes.bool,
  right: PropTypes.bool,
  triggerNode: PropTypes.node.isRequired
}

export default Dropdown
