import React from 'react'

export default class YeahNahBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const r = this.props.restaurant
    return (
      <div id="yeahnah-container">

      <button onClick={ () => this.props.changeRestaurant(r.index + 1) } id="nope"><img className="yeahnah-button" src="./images/x.png" alt="nope"/></button>
      <button onClick={ () => [this.props.addToShortlist(r.restaurant), this.props.changeRestaurant(r.index + 1)].map((action) => action ) } id="yeah"><img className="yeahnah-button" src="./images/tick.png" alt="yeah"/></button>
      </div>
    )

  }
}



