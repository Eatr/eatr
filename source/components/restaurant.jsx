import React from 'react'

export default class Restaurant extends React.Component {

	constructor(props) {
		super(props)
	}

	
	render  () {
		console.log(this.props, "state in restaurant")
		const r = this.props.restaurant.restaurant
		return (
			<div id="restaurant-container" >
				<img src={r.photo} />
				<div className="restaurant-details-container">
				 	<button onClick={ () => this.props.changeRestaurant(r.index + 1) } id="nope">NOPE</button>
				 	<button onClick={ () => this.props.changeRestaurant(r.index + 1) } id="yeah">YEAH</button>
					<h3 className="restaurant-details-short">{r.name}</h3>
					<p className="restaurant-details-long"></p>
				</div>
		</div>
		)
		
	}

} 