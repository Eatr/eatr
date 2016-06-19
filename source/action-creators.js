
// export const updateRestaurants = (newRestaurants) => {
// 	return {
// 		type: 'UPDATE_RESTAURANTS',
// 		state: newRestaurants
// 	}
// }

export const changePreferences = (newPreferences) => {
	return {
		type: 'CHANGE_PREFERENCES',
		state: newPreferences
	}
}

// export const changeViewDetail = (bool) => {
// 	return {
// 		type: 'CHANGE_VIEW_DETAIL',
// 		state: bool
// 	}
// }


export const addToShortlist = (restaurant) => {
	return {
		type: 'ADD_TO_SHORTLIST',
		state: restaurant
	}
}

export const removeFromShortList = (restaurantId) => {
	return {
		type: 'REMOVE_FROM_SHORTLIST',
		id: restaurantId
	}
}

export const changeRestaurant = (index) => {
	console.log('action creator, ', index)
	return {
		type: 'CHANGE_RESTAURANT',
		index: index
	}
}




