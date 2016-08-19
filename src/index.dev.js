import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles'
import Calendar from './Calendar'

// Create here the component you want to see
const component = <Calendar />

function main () {
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(component, app)
}

main()
