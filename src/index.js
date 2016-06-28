/*eslint no-undef: "error"*/

 // export TestComponent from './TestComponent'
 import React from 'react'
 import ReactDOM from 'react-dom'
 import TestComponent from './TestComponent'

 function main () {
   const app = document.createElement('div')
   document.body.appendChild(app)

   ReactDOM.render(<TestComponent text='mantecao'/>,
     app)
 }

 main()
