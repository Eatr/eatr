import request from 'browser-request'

export default (location) => {
	return new Promise ((resolve, reject) => {
		request(`/restaurants/${location[0]}/${location[1]}/${location[2]}`, (err, response) => {
			if (err) {
				console.log(err)
			} else {
				resolve(JSON.parse(response.responseText))
			}
		})
	})
}

export const getMoreRestaurants (nextPageToken) {
		return new Promise ((resolve, reject) => {
		request(`/nextpage/${nextPageToken}`, (err, response) => {
			if (err) {
				console.log(err)
			} else {
				resolve(JSON.parse(response.responseText))
			}
		})
	})


}