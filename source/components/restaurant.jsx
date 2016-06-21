import React from 'react'
import YeahNahBar from './yeah-nah-bar.jsx'
import Details from './restaurant-details.jsx'
var Swipeable = require('react-swipeable')
import updateServer from '../helpers/update-server.js'
import getUser from '../helpers/get-user.js'

import {connect} from 'react-redux'

import * as actionCreators from '../action-creators';


class Restaurant extends React.Component {

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

  componentWillMount () {
  	if (this.props.user.name === 'none') {
	  	console.log('get user in restaurant')
	    getUser()
	      .then(this.props.updateUser)
    }
  }

	render  () {
		const {restaurant, index, ShowDetail } = this.props.restaurant
		const {changeViewDetail} = this.props
		  
		  return (<Swipeable 
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


function mapStateToProps (state) {
  return {
    restaurant: state.Restaurant,
    // preferences: state.Preferences,
    user: state.User,
    shortlist: state.ShortList
  }
}

export const RestaurantContainer = connect(
  mapStateToProps,
  actionCreators
  )(Restaurant)
