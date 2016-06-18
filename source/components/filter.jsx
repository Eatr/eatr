import React, { Component } from 'react'
import Slider from 'rc-slider'


class Filter extends Component {


  handleClick() {
    console.log('User has changed preferences, and click SAVE / DONE')
  }

  render() {
    return (
      <div>
        <h4>Price:</h4>
        <Slider id='price' step={20} defaultValue={20}/>
        <h4>Cuisine:</h4>
        <p>Italian</p>
        <p>Indian</p>
        <button id='btn-done' onClick={ this.handleClick }>Done</button>
        <h4>Distance:</h4>
        <Slider id='distance' step={20} defaultValue={20}/>
      </div>
    )
  }
}

export default Filter