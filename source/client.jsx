import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app.js'
import reducer from './reducer.js'
import { createStore } from 'redux'


const store = createStore(reducer)

const render = () => {
  console.log('Foods up!')
  ReactDOM.render(
    <App store={ store }/>,
    document.getElementById('main')
  )
}

store.subscribe(render)

render()
