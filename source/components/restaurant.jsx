import React from 'react'

export default class Restaurant extends React.Component {

	constructor(props) {
		super(props)
	}

	
	render  () {
		const r = this.props.restaurant
		
		return (
			<div id="restaurant-container" >
				<img src={r.restaurant.photo} />
				<div className="restaurant-details-container">
				 	<button onClick={ () => this.props.changeRestaurant(r.index + 1) } id="nope">NOPE</button>
				 	<button onClick={ () => [this.props.addToShortlist(r.restaurant), this.props.changeRestaurant(r.index + 1)].map((action) => action ) } id="yeah">YEAH</button>
					<h3 className="restaurant-details-short">{r.restaurant.name}</h3>
					<p className="restaurant-details-long"></p>
				</div>
		</div>
		)
		
	}

} 