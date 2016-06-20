import React from 'react'

export default class YeahNahBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const r = this.props.restaurant
    return (
      <div id="yeahnah-container">

      <button onClick={() => this.props.reject} id="nope"><img className="yeahnah-button" src="./images/x.png" alt="nope"/></button>
      <button onClick={() => this.props.add} id="yeah"><img className="yeahnah-button" src="./images/tick.png" alt="yeah"/></button>
      </div>
    )

  }
}



