
export const updateRestaurants = (newRestaurants) => {
	return {
		type: 'UPDATE_RESTAURANTS',
		state: newRestaurants
	}
}

export const updateUser = (user = {restaurants: [], user: {name: null}}) => {
	console.log('update user sees', user)
	return {
		type: 'UPDATE_USER',
		state: {
			restaurants: user.restaurants,
			user: {name: user.name}
		}
	}
}

export const changePreferences = (newPreferences) => {
	return {
		type: 'CHANGE_PREFERENCES',
		state: newPreferences
	}
}

export const changeViewDetail = () => {
	return {
		type: 'CHANGE_VIEW_DETAIL'
	}
}


export const addToShortlist = (restaurant) => {
	console.log("Restaurant added to shortlist")
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

export const showRestaurant = (restaurant) => {
	return {
		type: 'SHOW_RESTAURANT',
		restaurant: restaurant
	}
}




