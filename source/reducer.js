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
			return newState

		case 'CHANGE_VIEW_DETAIL' :
			return newState

		case 'ADD_TO_SHORTLIST' :
			return newState

		case 'REMOVE_FROM_SHORTLIST' :
			return newState

		case 'CHANGE_RESTAURANT' :
			return newState

		default :
			return state

	}
}
