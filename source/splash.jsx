import React, { Component } from 'react'

class Splash extends Component {



  handleClick() {
    this.props.enterSite()
  }

  render() {
    return (
      <div id='splash'>
        <h1>Eatr</h1>
        <button id='home-btn' onClick={ this.handleClick.bind(this) }>Burger Pacman Animation!</button>
      </div>
      )
  }
}

export default Splash