import clone from 'clone';
import { connect } from 'react-redux'
import {restaurantArray} from './helpers/restaurant-test-array.js'

const INITIALSTATE = {
	Restaurants: restaurantArray,
	Preferences: { 
		Price: 0, 
		distance:0, 
		cuisine:[]
	},
	ShowDetail: false,
	ShortList: {
		restaurants: [],
	},
	Restaurant: {
		restaurant: restaurantArray[0],
		index: 0
	},
	User: {

	}
}

const changeRestaurant = (state) => {
	return {
		restaurant: state.Restaurants[state.Restaurant.index ++ ],
		index: state.Restaurant.index ++
	}

}


export default (state = INITIALSTATE, action) => {
	
	let newState = clone(state)

	switch (action.type) {
		case 'UPDATE_RESTAURANTS' :
			newState.Restaurants = action.state
			return newState

		case 'CHANGE_PREFERENCES' :
			newState.Preferences = action.state
			return newState

		case 'CHANGE_VIEW_DETAIL' :
			newState.ShowDetail = action.state
			return newState

		case 'ADD_TO_SHORTLIST' :
			newState.ShortList.restaurants.push(action.state)
			return newState

		case 'REMOVE_FROM_SHORTLIST' :
			newState.ShortList.restaurants.filter((restaurant) => {
				if(restaurant.id !== action.id) {
					return restaurant
				} 
			})  
					return newState

		case 'CHANGE_RESTAURANT' :
			newState.Restaurant = {
				index: action.index,
				restaurant: newState.Restaurants[action.index]
			}
 
			return newState

		default :
			return state

	}
}
