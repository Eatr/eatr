import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App.jsx'
import reducer from './reducer.js'

import { createStore } from 'redux'

const store = createStore(reducer)

const render = () => {
  console.log('Foods up!')
  ReactDOM.render(
    <Provider store={ store } >
      <App />
    </Provider>,
    document.getElementById('app')
  )
}

store.subscribe(render)

render()
