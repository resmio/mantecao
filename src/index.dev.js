import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles'
import TestComponent from './TestComponent'

// Create here the component you want to see
const component = <TestComponent text='mantecao'/>

function main () {
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(component, app)
}

main()
