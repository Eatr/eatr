import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Slider from 'rc-slider'


class Distance extends React.Component {
 distanceChange(value) {
    const newPrefs = Object.assign({}, this.props.preferences)
    newPrefs.distance = value
    this.props.changePreferences(newPrefs)
  }

  render() {
    return (
      <div>
        <h4>Distance: {this.props.preferences.distance} meters</h4>
        <Slider vertical id='distance' step={100} min={200} max={1000} defaultValue={this.props.preferences.distance}
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

