import React from 'react'

export default class Restaurant extends React.Component {

	constructor(props) {
		super(props)
	}


	render  () {
		const r = this.props.restaurant

		return (
			<div id="restaurant-container" >
				<img id="restaurant-image" src={r.restaurant.photo} />
				<div className="restaurant-details-container">

					<h3 className="restaurant-details-short">{r.restaurant.name}</h3>
					<p className="restaurant-details-long"></p>
				</div>
		</div>
		)

	}

}