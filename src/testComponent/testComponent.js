import React, {Component, PropTypes} from 'react'
import styles from './_TestComponent.scss'

class TestComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render () {
    return (
      <h1 className='testimon'>Holo {this.props.text}</h1>
    )
  }
}

export default TestComponent
