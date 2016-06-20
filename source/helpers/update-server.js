import request from 'browser-request'
import qs from 'query-string'

const options = {
	url: '/update-shortlist/',
	method: 'POST',
	json: true
}

export default (shortlist, restaurant) => {
	var newShortlist = shortlist.restaurants.concat(restaurant)
	options.headers = {data: JSON.stringify(newShortlist)}

	return new Promise ((resolve, reject) => {
		request(options, (err, response) => {
			if (err) {
				console.log(err)
			} else {
				resolve(JSON.parse(response.responseText))
			}
		})
	})
}