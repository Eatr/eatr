import request from 'superagent'
require('dotenv').config()
import queryString from 'query-string'
import getPhoto from './get-photo.js'

export default (lat, lon, radius = 200) => {
	
	let query = queryString.stringify({		
			location: lat + ',' + lon,
			radius: radius,
			type: 'restaurant',
			key: process.env.GOOGLE_API_KEY,
		},false)

	return new Promise ((resolve, rej) => {
		request
		  .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + query )
		  .end(function(err, res){
		  	if(err) {
		  		console.log('there has been an error in superagent', err)
		  		rej(err)
		  	} else {
		  			  	// console.log(res)
		  		let restArray = res.body.results
			  			// console.log(restArray.results[0].photos[0]["photo_reference"])

			  	let nextPageToken = res.body.next_page_token
			  	let openingHours 
			  	// console.log('restArray pre cleaning', restArray)
			  	let cleanRestaurants = restArray.map( function ( restObj ) {
			  		let photoRef = restObj.photos !== undefined ? restObj.photos[0]['photo_reference']: undefined
			  		// console.log('\n\n', photoRef)
			  			if(restObj['opening_hours']){
			  				openingHours = restObj['opening_hours']['open_now']
			  			} else {
			  				openingHours = 'unknown'
			  			} 
			  		return {
			  			"id": restObj.id,
			  			"name": restObj.name,
			  			"photo": photoRef,
			  			"open_now": openingHours
			  		}
			  	})
			  	// console.log('restArray pre cleaning', cleanRestaurants)
					resolve(cleanRestaurants)	      
		    }
	   })	
		
	})
	.then(getPhoto)
	.catch(handleError)
}

function handleError (error) {
	console.log("Error happened somewhere in get-restaurants: ", error)
}


