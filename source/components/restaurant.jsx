import React from 'react'
import YeahNahBar from './yeah-nah-bar.jsx'
import Details from './restaurant-details.jsx'
var Swipeable = require('react-swipeable')

export default class Restaurant extends React.Component {

	constructor(props) {
		super(props)
	}


	render  () {
		const r = this.props.restaurant

		return (

		  <Swipeable delta={50} onSwipedLeft={	() => this.props.changeRestaurant(r.index + 1)  }
		  	onSwipedRight={() => [this.props.addToShortlist(r.restaurant), this.props.changeRestaurant(r.index + 1)].map((action) => action ) }>
				<div id="restaurant-container" >
					<div id="restaurant-card" onClick={() => this.props.changeViewDetail() }>
						<img id="restaurant-image" src={r.restaurant.photo}/>
						<h3 className="restaurant-details-short">{r.restaurant.name}</h3>
							<h6 id="rest-dist">Distance {r.restaurant.distance}m.</h6>
						{(r.ShowDetail)? <Details website={r.restaurant.website} phone={r.restaurant.phone} address={r.restaurant.address}/> : ""}
					</div>
					<YeahNahBar {...this.props}/>
				</div>
			</Swipeable>
		)

	}

}