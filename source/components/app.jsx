import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action-creators';
import { createStore } from 'redux'

import Navbar from './navbar.jsx'
import Restaurant from './restaurant.jsx'
import Splash from './splash.jsx'
import simulate from '../../lib/simulate-get-restaurants'

export class App extends Component {

  constructor (props) {
    super(props)
  }
  
  componentWillMount() {
    this.props.preferences.updated ? console.log('app sees user preferences: ', this.props.preferences) :
    console.log('no change in preferences')
  }

  render() {
    if (this.props.preferences.updated) {
     setTimeout(() => {
        const newprefs = Object.assign({}, this.props.preferences)
        newprefs.updated = false
        console.log('simulating')
        return this.props.changePreferences(newprefs)},
      2000)
       
     return (
        <div>
          <Navbar />
          <Splash />
        </div>
      )
    } else {
      return (
        <div>
          <Navbar />
          <Restaurant {...this.props} /> 
        </div>
      )
    }
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
