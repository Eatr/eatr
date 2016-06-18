import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Slider from 'rc-slider'
import Navlink from './navlink.jsx'


class Filter extends Component {


  componentWillMount() {
    this.userPref = Object.assign({}, this.props.preferences)
  }

  handleClick(prefs) {
    const statePref = this.props.preferences
    if (prefs.price !== statePref.price | prefs.distance !== statePref.distance) {
      this.userPref.updated = true
    } else {
      this.userPref.updated= false
    }
    this.props.changePreferences(prefs)
  }

  prefHandler(pref,value) {
    this.userPref[pref] = value
    console.log('New user preferences not in state: ', this.userPref)
  }

  render() {
    return (
      <div>
        <h4>Price:</h4>
        <Slider id='price' step={10} min={20} max={100} defaultValue={this.userPref.price}
          onChange={(val) =>{this.prefHandler('price',val)}}/>
        <h4>Cuisine:</h4>
        <p>Italian</p>
        <p>Indian</p>
        <h4>Distance (m):</h4>
        <Slider id='distance' step={100} min={200} defaultValue={this.userPref.distance} max={1000} 
          onChange={(val) =>{this.prefHandler('distance',val)}}/>
        <Navlink to='/'>
          <button id='btn-done' onClick={ () => (this.handleClick(this.userPref)) }>
            Done
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

