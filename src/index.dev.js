import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles'
import Alert from './components/Alert'

// Create here the component you want to see
const component = <Alert isOpen={true} type='error' heading='some heading' message='yeah?' />

function main () {
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(component, app)
}

main()
