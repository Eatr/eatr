import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action-creators';
import { createStore } from 'redux'
import Navbar from './navbar.jsx'
import Logo from './logo.jsx'
import {RestaurantContainer} from './restaurant.jsx'
import getLocation from '../helpers/get-location.js'
import getRestaurants from '../helpers/get-restaurants.js'

import Splash from './splash.jsx'
import simulate from '../../lib/simulate-get-restaurants'


export class App extends Component {

  constructor (props) {
    super(props)
  }

  render() {
  
    if (this.props.preferences.updated) {
    console.log('once in client')
      getLocation(this.props.preferences.distance)
        .then(getRestaurants)
        .then((restaurants) => {
          this.props.updateRestaurants(restaurants)
        })

     return (
        <div>
          <Logo />
          <Splash />
        </div>
      )
    } else {
      return (
        <div>
          <Navbar />
          <RestaurantContainer />

        </div>
      )
    }
 }
}

function mapStateToProps (state) {
  return {
    //restaurant: state.Restaurant,
    preferences: state.Preferences,
    //user: state.User,
    //shortlist: state.ShortList
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
  )(App)






        // <Navbar />
