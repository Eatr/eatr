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
    this.props.user.name ? 
    	updateServer(this.props.shortlist, restaurant) : 
    	null
    this.props.addToShortlist(restaurant)
  	this.props.changeRestaurant(index)
  }


	render  () {
		const {restaurant, index, ShowDetail } = this.props.restaurant
		const {changeViewDetail} = this.props

		return (
		  <Swipeable 
			  delta={50} 
			  onSwipedLeft={() => this.swipeLeft(index+1)}
		  	onSwipedRight={() => this.swipeRight(index+1,restaurant)}>
				<div id="restaurant-container" >
					<div id="restaurant-card" onClick={() => changeViewDetail() }>
						<img id="restaurant-image" src={restaurant.photo}/>
						<h3 className="restaurant-details-short">{restaurant.name}</h3>
						<ul>
							<li>{restaurant.distance}m away from your location</li>
						</ul>
							{(ShowDetail)? 
								<Details 
									website={restaurant.website} 
									phone={restaurant.phone} 
									address={restaurant.address}/> : 
								null
							}
					</div>
					<YeahNahBar 
						reject={index => this.swipeLeft(index)} 
						add={(index, restaurant) => this.swipeRight(index, restaurant)} 
						{...this.props}/>
				</div>
			</Swipeable>
		)

	}

}