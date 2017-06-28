import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EventListener from 'react-event-listener'

class KeyCodeListener extends Component {
  render() {
    return (
      <div>
        <EventListener target={window} onKeyDown={this._onKeyDown} />
      </div>
    )
  }
  _onKeyDown = e => {
    switch (e.keyCode) {
      case 9: // TAB
        if (this.props.onTab) {
          this.props.onTab()
        }
        break
      case 13: // ENTER
        e.preventDefault() // prevent default behavior
        if (this.props.onEnter) {
          this.props.onEnter()
        }
        break
      case 27: // ESCAPE
        if (this.props.onEsc) {
          this.props.onEsc()
        }
        break
      case 37: // LEFT
        if (this.props.onLeft) {
          this.props.onLeft()
        }
        break
      case 38: // UP
        if (this.props.onUp) {
          this.props.onUp()
        }
        break
      case 39: // RIGHT
        if (this.props.onRight) {
          this.props.onRight()
        }
        break
      case 40: // DOWN
        if (this.props.onDown) {
          this.props.onDown()
        }
        break
    }
  }
}

KeyCodeListener.propTypes = {
  onDown: PropTypes.func,
  onEnter: PropTypes.func,
  onEsc: PropTypes.func,
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
  onTab: PropTypes.func,
  onUp: PropTypes.func
}

export default KeyCodeListener
