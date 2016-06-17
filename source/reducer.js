import clone from 'clone';
import { connect } from 'react-redux'


const initialState = {
	Restaurants: [{}, {}, {}],
	Preferences: { 
		Price: 0, 
		distance:0, 
		cuisine:[]
	},
	ShowDetail: false,
	ShortList: {
		restaurants: [{}, {}, {}],
	},
	Restaurant: {},
	User: {

	}
}


export default (state = initialState, action) => {
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
			newState.ShortList.restraurants.filter((restaurant) => {
				if(restaurant.id !== action.id) {
					return restaurant
				} 
			})  
					return newState

		case 'CHANGE_RESTAURANT' :
			newState.Restaurant = action.state 
			return newState

		default :
			return state

	}
}
