import React, { Component } from 'react'
import request from 'browser-request'

class Splash extends Component {

  handleClick() {
    
  }

  render() {
    return (
      <div className="pacman">
        <div className="pacman-top"><img src="http://www.clker.com/cliparts/E/z/u/z/s/x/bread-bun-hi.png" height="30" width="80"/></div>
        <div className="pacman-bottom"><img src="http://images.clipartpanda.com/bun-clipart-upside-down-bun-md.png" height="25" width="80"/></div>
        <div className="feed"></div>
        <img className="food sml top" src="https://lh5.ggpht.com/x3jSIgAZAwzUuoEpGCYXzfdUQgV64wCEQryldXAh_AaoqLGMKqKl8jfMNYtNBKlUZyM=w170" width="40" height="30"/>
        <img className="food med" src="https://pixabay.com/static/uploads/photo/2014/12/22/00/03/food-576689_960_720.png" width="50" height="30"/>
        <img className="food lrg" src="http://cliparts.co/cliparts/kiK/nxa/kiKnxa5RT.png" width="50" height="30"/>
      </div>
    )
  }
}

export default Splash