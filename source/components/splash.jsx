import React, { Component } from 'react'
import request from 'browser-request'

class Splash extends Component {

  handleClick() {
    
  }

  render() {
    return (
      <div id="spash-page">
       <h4>Finding restaurants...</h4>
       <p>Not your cup of tea? Swipe left.</p>
       <p>Like what you see? Swipe right.</p>
       
        <div className="pacman">
          <div className="pacman-top"><img src="./images/bread-bun-hi.png" height="30" width="80"/></div>
          <div className="pacman-bottom"><img src="./images/down-bun.png" height="25" width="80"/></div>
          <div className="feed"></div>
          <img className="food sml top" src="./images/burger.png" width="40" height="30"/>
          <img className="food med" src="./images/food.png" width="50" height="30"/>
          <img className="food lrg" src="./images/pizza.png" width="50" height="30"/>
      </div>
      </div>

    )
  }
}

export default Splash