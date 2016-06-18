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
  
  componentWillMount() {
    this.props.preferences.updated ? console.log('app sees user preferences: ', this.props.preferences) :
    console.log('no change in preferences')
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
    restaurant: state.Restaurant,
    preferences: state.Preferences
  }
}

export const AppContainer = connect(
  mapStateToProps, 
  actionCreators
  )(App)






        // <Navbar />
