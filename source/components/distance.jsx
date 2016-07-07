import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Slider from 'rc-slider'


export class Distance extends React.Component {
 distanceChange(value) {
    const newPrefs = Object.assign({}, this.props.preferences)
    newPrefs.distance = value
    this.props.changePreferences(newPrefs)
  }

  render() {
    return (
      <div id="filter">
        <h1 id="dist-header">Distance:</h1>
        <p id="dist-meter">{this.props.preferences.distance} meters</p>
        <Slider id='distance' step={100} min={200} max={1000} defaultValue={this.props.preferences.distance}
          onChange={(val) =>{this.distanceChange(val)}}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    preferences: state.Preferences
  }
}

export const DistanceContainer = connect(
  mapStateToProps, 
  actionCreators
  )(Distance)

