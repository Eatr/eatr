import request from 'browser-request'
import qs from 'query-string'

const options = {
	url: '/update-shortlist/',
	method: 'POST',
	json: true
}

export default (shortlist, restaurant, type = 'add') => {

	var newShortlist = type === 'add' ?
		shortlist.restaurants.concat(restaurant) :
		shortlist.restaurants.filter( r => r.id !== restaurant.id)
		console.log(newShortlist)
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