import React, { Component }  from 'react'
import {connect}             from 'react-redux'
import { createStore }       from 'redux'
import * as actionCreators   from '../action-creators'
import Navbar                from './navbar.jsx'
import Logo                  from './logo.jsx'
import {RestaurantContainer} from './restaurant.jsx'
import getLocation           from '../helpers/get-location.js'
import getRestaurants        from '../helpers/get-restaurants.js'
import Splash                from './splash.jsx'
import simulate              from '../../lib/simulate-get-restaurants'

export class App extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    const { 
      nextPage, 
      user, 
      preferences, 
      restaurant, 
      updateRestaurants,
      updateLocation } = this.props
  
    if (preferences.updated) {
      getLocation(preferences.distance)
        .then((location) => {
          updateLocation(location)
          getRestaurants(location)
            .then(updateRestaurants)})

     return (
        <div>
          <Logo />
          <Splash />
        </div>
      )
    } else {
      return (
        <div id="app-container">
          <Navbar />
          <RestaurantContainer />
        </div>
      )
    }
 }
}

function mapStateToProps (state) {
  return {
    preferences: state.Preferences
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
  )(App)

