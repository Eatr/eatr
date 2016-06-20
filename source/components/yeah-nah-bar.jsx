import React from 'react'

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
        id="nope">
          <img className="yeahnah-button" src="./images/x.png" alt="nope"/>
      </button>
      <button 
        onClick={() => add(restaurant.index+1,restaurant.restaurant)} 
        id="yeah">
          <img className="yeahnah-button" src="./images/tick.png" alt="yeah"/>
      </button>
      </div>
    )

  }
}



