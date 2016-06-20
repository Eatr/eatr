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
        const r = response[0]
        
        r ? this.props.updateUser(r.shortlist, r.name) : ""
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
        <p>{this.props.user.name}</p>
          <Navbar />
          <Splash />
        </div>
      )
    } else {
      return (
        <div>
        <p>{this.props.user.name}</p>
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
    preferences: state.Preferences,
    user: state.User
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
  )(App)






        // <Navbar />
