import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Slider from 'rc-slider'


class Filter extends Component {

  handleClick() {
    console.log('User has changed preferences: ', this.userPref)
  }

  componentWillMount() {
    this.userPref = { 
      price: 0, 
      distance:500, 
      cuisine:[]
    }
  }

  prefHandler(pref,value) {
    this.userPref[pref] = value
    console.log(this.userPref)
  }

  render() {
    console.log('state preferences: ', this.props.preferences)
    return (
      <div>
        <h4>Price:</h4>
        <Slider id='price' step={20} defaultValue={20}
          onChange={(val) =>{this.prefHandler('price',val)}}/>
        <h4>Cuisine:</h4>
        <p>Italian</p>
        <p>Indian</p>
        <h4>Distance (m):</h4>
        <Slider id='distance' step={100} min={200} defaultValue={500} max={1000} 
          onChange={(val) =>{this.prefHandler('distance',val)}}/>
        <button id='btn-done' onClick={ this.handleClick }>Done</button>
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


