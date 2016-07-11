import React from 'react'
import Navlink from './navlink.jsx'

export default class YeahNahBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {restaurant, reject, add} = this.props
    return (
      <div id="yeahnah-container">
      <button 
        onClick={() => reject(restaurant.index+1)} 
        id="nah">
          <img className="yeahnah-button" src="./images/nope.png" alt="nope"/>
      </button>
      <Navlink to='/shortlist'>
        <img id="SL-nav-icon" src="./images/shortlist-icon.png" alt="shortlist"/>
      </Navlink>
      <button 
        onClick={() => add(restaurant.index+1,restaurant.restaurant)} 
        id="yeah">
          <img className="yeahnah-button" src="./images/like.png" alt="yeah"/>
      </button>
      </div>
    )

  }
}



