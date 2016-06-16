import clone from 'clone';

const initialState = {

}

export default (state = initialState, action) => {
	let newState = clone(state)

	switch (action.type) {
		case 'UPDATE_RESTAURANTS' :
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