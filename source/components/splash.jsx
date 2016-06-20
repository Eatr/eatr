import React, { Component } from 'react'
import request from 'browser-request'

class Splash extends Component {

  handleClick() {
    
  }

  render() {
    return (
      <div className="pacman">
        <div className="pacman-top"><img src="images/bunTop.png" height="40" width="100"/></div>
        <div className="pacman-bottom"><img src="images/bunBot.png" height="35" width="100"/></div>
        <div className="feed"></div>
        <img className="food sml" src="https://lh5.ggpht.com/x3jSIgAZAwzUuoEpGCYXzfdUQgV64wCEQryldXAh_AaoqLGMKqKl8jfMNYtNBKlUZyM=w170" width="40" height="30"/>
        <img className="food med" src="https://pixabay.com/static/uploads/photo/2014/12/22/00/03/food-576689_960_720.png" width="50" height="30"/>
        <img className="food lrg" src="http://cliparts.co/cliparts/kiK/nxa/kiKnxa5RT.png" width="50" height="30"/>
      </div>
    )
  }
}

export default Splash