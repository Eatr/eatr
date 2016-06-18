import React, { Component } from 'react'
import request from 'browser-request'

class Splash extends Component {

  handleClick() {
    
  }

  render() {
    return (
      <div id='splash'>
        <button id='home-btn' onClick={ this.handleClick }>Burger Pacman Animation!</button>
      </div>
    )
  }
}

export default Splash