import React, { Component } from 'react'
import request from 'browser-request'

class Splash extends Component {

  handleClick() {
    request('/restaurants', function(err, res) {
      if (err) {
        console.log("this didn't work", err)
      } else {
        console.log(JSON.parse(res.response).text)
        //these results need to be added to the state
      }
    })
  }

  render() {
    console.log(this.props, "these are props")
    return (
      <div id='splash'>
        <h1>Eatr</h1>
        <button id='home-btn' onClick={ this.handleClick }>Burger Pacman Animation!</button>
      </div>
      )
  }
}

export default Splash