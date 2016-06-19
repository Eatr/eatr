import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Slider from 'rc-slider'
import Navlink from './navlink.jsx'


class Price extends Component {

  prefHandler(value) {
    const newPrefs = Object.assign({}, this.props.preferences)
    newPrefs.price = value
    this.props.changePreferences(newPrefs)
  }

  render() {
    return (
      <div>
        <h4>Price: {this.props.preferences.price}</h4>
        <Slider id='price' step={10} min={20} max={100} defaultValue={this.props.preferences.price}
          onChange={(val) =>{this.prefHandler(val)}}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    preferences: state.Preferences
  }
}

export const PriceContainer = connect(
  mapStateToProps, 
  actionCreators
  )(Price)

