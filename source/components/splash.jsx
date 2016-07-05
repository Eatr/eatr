import React, { Component } from 'react'
import request from 'browser-request'

class Splash extends Component {

  handleClick() {
    
  }

  render() {
    return (
      <div id="done">
       <h4>Finding restaurants...</h4>
       <p>Not your cup of tea? Swipe left.</p>
       <p>Like what you see? Swipe right.</p>
      </div>
    )
  }
}

export default Splash