import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Slider from 'rc-slider'
import Navlink from './navlink.jsx'
import {PriceContainer} from './price.jsx'
import {DistanceContainer} from './distance.jsx'
import Navbar from './navbar.jsx'

class Filter extends Component {

  componentWillMount() {
    this.userPref = Object.assign({}, this.props.preferences)
  }

  handleClick() {
    const newPref = Object.assign({}, this.props.preferences)
    if ( this.userPref.distance !== newPref.distance) {
      newPref.updated = true
    } else {
      newPref.updated = false
    }
    this.props.changePreferences(newPref)
  }

  render() {
    return (
      <div>
        <Navbar />
        <DistanceContainer />
        <Navlink to='/' id="btn-done">
          <button id="done" onClick={ () => (this.handleClick()) }>
           <img id="SL-done-icon" src="./images/shortlist-icon.png" alt="shortlist"/>
          </button>
        </Navlink>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    preferences: state.Preferences
  }
}

export const FilterContainer = connect(
  mapStateToProps, 
  actionCreators
  )(Filter)

