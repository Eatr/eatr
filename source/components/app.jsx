import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action-creators';
import { createStore } from 'redux'

import Navbar from './navbar.jsx'
import Restaurant from './restaurant.jsx'

export class App extends Component {

  constructor (props) {
    super(props)
  }
  
  handleClick () {
   console.log("button has been clicked - app.jsx")

  }
   
  render() {
    return (
      <div>
        <Navbar />
        <Restaurant {...this.props} /> 
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    restaurant: state.Restaurant
  }
}

export const AppContainer = connect(
  mapStateToProps, 
  actionCreators
  )(App)






        // <Navbar />
