import React 								from 'react'
import YeahNahBar 					from './yeah-nah-bar.jsx'
import Details 							from './restaurant-details.jsx'
import Swipeable 						from 'react-swipeable'
import updateServer 				from '../helpers/update-server.js'
import getUser 							from '../helpers/get-user.js'
import {connect} 						from 'react-redux'
import getMoreRestaurants 	from '../helpers/get-more-restaurants.js'
import * as actionCreators 	from '../action-creators';


class Restaurant extends React.Component {

	constructor(props) {
		super(props)
		this.nextPage = false
	}

  swipeLeft (index) {
  	const {location, restaurant, updateRestaurants} = this.props
	  if(this.nextPage){
			this.nextPage = false
	  	getMoreRestaurants(location, restaurant['next_page'])
				.then(newRestaurants => { 
					console.log(newRestaurants)
					updateRestaurants})
	  } else {
	  		this.props.changeRestaurant(index)
  	}
 	}

  swipeRight(index, restaurant) {
  	const {
  		location, 
  		updateRestaurants,
	  	changeRestaurant,
	  	user,
	  	shortlist,
		  addToShortlist} = this.props
	    
	  if(this.nextPage){
			  this.nextPage = false
		    user.name ? updateServer(shortlist, restaurant) : null
		    addToShortlist(restaurant)

		  	getMoreRestaurants(location, restaurant['next_page'])
		  		.then(updateRestaurants)
	  	} else {
	  		user.name ? updateServer(shortlist, restaurant) : null
		    addToShortlist(restaurant)
  	}
  }

  componentWillMount () {
  	if (this.props.user.name === 'none') {
	    getUser()
	      .then(this.props.updateUser)
    }
  }

	componentDidUpdate () {
		const {index, restaurant} = this.props.restaurant
  	if(index === 19 && restaurant['next_page'] ) {
  		this.nextPage = true
  	} 
	}

 	render  () {
		const {restaurant, index, ShowDetail } = this.props.restaurant
		const {changeViewDetail} = this.props
		console.log(restaurant)
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
    user: state.User,
    shortlist: state.ShortList,
    location: state.Location
  }
}

export const RestaurantContainer = connect(
  mapStateToProps,
  actionCreators
  )(Restaurant)

