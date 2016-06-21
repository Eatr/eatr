
export const updateRestaurants = (newRestaurants) => {
		console.log("in action create update rests")
	return {
		type: 'UPDATE_RESTAURANTS',
		state: newRestaurants
	}
}

export const updateUser = (user = {shortlist: [], name: null}) => {
	return {
		type: 'UPDATE_USER',
		state: {
			restaurants: user.shortlist,
			user: {name: user.name, picture: user.picture}
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

export const toggleNextPage = () => {

	return {
		type: 'TOOGLE_NEXTPAGE'
	}
}





