import request from 'browser-request'

export default (location, nextPageToken) => {
	const [lat, lon] = location
	return new Promise ((resolve, reject) => {
		request(`/nextpage/${lat}/${lon}/${nextPageToken}`, (err, response) => {
			if (err) {
				console.log(err)
			} else {
				resolve(JSON.parse(response.responseText))
			}
		})
	})


}