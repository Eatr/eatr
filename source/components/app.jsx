import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action-creators';
import { createStore } from 'redux'
import Navbar from './navbar.jsx'
import Restaurant from './restaurant.jsx'
import getLocation from '../helpers/get-location.js'
import getRestaurants from '../helpers/get-restaurants.js'
import getUser from '../helpers/get-user.js'
import Splash from './splash.jsx'
import simulate from '../../lib/simulate-get-restaurants'

export class App extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    getUser()
      .then((response) => {
        console.log(response)
      })
  }

  render() {
 
    if (this.props.preferences.updated) {
      getLocation(this.props.preferences.distance)
        .then(getRestaurants)
        .then((restaurants) => {
          this.props.updateRestaurants(restaurants)
        })

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
