import React from 'react'
import YeahNahBar from './yeah-nah-bar.jsx'
import Details from './restaurant-details.jsx'
var Swipeable = require('react-swipeable')
import updateServer from '../helpers/update-server.js'
import getMoreRestaurants from '../helpers/get-more-restaurants.js'

export default class Restaurant extends React.Component {


	constructor(props) {
		super(props)
	}

  swipeLeft (index) {
  	this.props.changeRestaurant(index)

  	this.getNewPage(this.props.restaurant)
  }

  swipeRight(index, restaurant) {
    updateServer(this.props.shortlist, restaurant)
    this.props.addToShortlist(restaurant)
  	this.props.changeRestaurant(index)

  	this.getNewPage(this.props.restaurant)

  }

  getNewPage(restaurant){
  	
  	if(restaurant.index === 19) {
  		console.log("-------- Index is at 19 ---------")
  		getMoreRestaurants(this.props['my_location'], restaurant.restaurant['next_page'])

  	}
  	
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