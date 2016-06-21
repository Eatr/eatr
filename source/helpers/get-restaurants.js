import request from 'browser-request'

export default (location) => {
	const [lat, lon, rad] = location
	return new Promise ((resolve, reject) => {
		request(`/restaurants/${lat}/${lon}/${rad}`, (err, response) => {
			if (err) {
				console.log(err)
			} else {
				resolve(JSON.parse(response.responseText))
			}
		})
	})
}

