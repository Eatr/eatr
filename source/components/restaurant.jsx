import React from 'react'
import YeahNahBar from './yeah-nah-bar.jsx'
import Details from './restaurant-details.jsx'
var Swipeable = require('react-swipeable')
import updateServer from '../helpers/update-server.js'
export default class Restaurant extends React.Component {

	constructor(props) {
		super(props)
	}

  swipeLeft (index) {
  	this.props.changeRestaurant(index)
  }

  swipeRight(index, restaurant) {
    updateServer(this.props.shortlist, restaurant)
    this.props.addToShortlist(restaurant)
  	this.props.changeRestaurant(index)
  }


	render  () {
		const r = this.props.restaurant

		return (
		  <Swipeable 
			  delta={50} 
			  onSwipedLeft={() => this.swipeLeft(r.index+1)}
		  	onSwipedRight={() => this.swipeRight(r.index+1,r.restaurant)}>
				<div id="restaurant-container" >
					<div id="restaurant-card" onClick={() => this.props.changeViewDetail() }>
						<img id="restaurant-image" src={r.restaurant.photo}/>
						<h3 className="restaurant-details-short">{r.restaurant.name}</h3>
						<ul>
							<li>{r.restaurant.distance}m away from your location</li>
						</ul>
						{(r.ShowDetail)? <Details website={r.restaurant.website} phone={r.restaurant.phone} address={r.restaurant.address}/> : ""}
					</div>
					<YeahNahBar reject={this.swipeLeft} add={this.swipeRight} {...this.props}/>
				</div>
			</Swipeable>
		)

	}

}