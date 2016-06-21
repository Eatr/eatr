import request from 'browser-request'

export default (location, nextPageToken) => {

	console.log(location,"wednesday")

	return new Promise ((resolve, reject) => {

		
		request(`/nextpage/${location[0]}/${location[1]}/${nextPageToken}`, (err, response) => {
			if (err) {
				console.log(err)
			} else {
				resolve(JSON.parse(response.responseText))
			}
		})
	})


}