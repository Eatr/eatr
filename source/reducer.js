import clone from 'clone';
import { connect } from 'react-redux'
import {restaurantArray} from './helpers/restaurant-test-array.js'

const INITIALSTATE = {
	Restaurants: [],
	Preferences: { 
		price: 30, 
		distance:1000, 
		cuisine:[],
		updated: true
	},
	ShowDetail: false,
	ShortList: {
		restaurants: [],
	},
	Restaurant: {
		restaurant: {},
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

const removeRestaurant =(restArray, id) => {
	return restArray.filter((restaurant) => {
				if(restaurant.id !== id) {
					return restaurant
				} 
			})
}


export default (state = INITIALSTATE, action) => {
	
	let newState = clone(state)

	switch (action.type) {
		case 'UPDATE_RESTAURANTS' :
			newState.Restaurants = action.state
			newState.Preferences.updated = false
			newState.Restaurant.restaurant = newState.Restaurants[0]
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
			newState.ShortList.restaurants = removeRestaurant(newState.ShortList.restaurants, action.id)
			console.log(newState.ShortList)
			return newState

		case 'CHANGE_RESTAURANT' :
			newState.Restaurant = {
				index: action.index,
				restaurant: newState.Restaurants[action.index]
			}
 
			return newState

		case 'SHOW_RESTAURANT' :
			newState.Restaurant = {
				index: 0,
				restaurant: action.restaurant
			}
		
			return newState
		default :
			return state

	}
}
