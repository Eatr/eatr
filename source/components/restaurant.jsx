import React from 'react'
import YeahNahBar from './yeah-nah-bar.jsx'
var Swipeable = require('react-swipeable')

export default class Restaurant extends React.Component {

	constructor(props) {
		super(props)
	}


	render  () {
		const r = this.props.restaurant

		return (
		  <Swipeable onSwipingLeft={	() => this.props.changeRestaurant(r.index + 1)  }
		  	onSwipingRight={() => [this.props.addToShortlist(r.restaurant), this.props.changeRestaurant(r.index + 1)].map((action) => action ) }>
				<div id="restaurant-container" >
					<div id="restaurant-card">
						<img id="restaurant-image" src={r.restaurant.photo} />
						<div className="restaurant-details-container">
							<h3 className="restaurant-details-short">{r.restaurant.name}</h3>
							<p className="restaurant-details-long"></p>
						</div>
					</div>
					<YeahNahBar {...this.props}/>
				</div>
			</Swipeable>
		)

	}

}