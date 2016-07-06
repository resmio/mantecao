import React, {Component, PropTypes} from 'react'
import styles from './_TestComponentBis.scss'

class TestComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render () {
    return (
      <h1 className={styles.testimon}>Soy el 2 {this.props.text}</h1>
    )
  }
}

export default TestComponent
