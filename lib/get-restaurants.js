import request from 'superagent'
require('dotenv').config()
import queryString from 'query-string'

import getPhoto from './get-photo.js'
import getDetail from './get-detail.js'

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
		  		let restArray = res.body.results
			  	let nextPageToken = res.body.next_page_token
			  	let openingHours 
			  	let cleanRestaurants = restArray.map( function ( restObj ) {
			  		let photoRef = restObj.photos !== undefined ? restObj.photos[0]['photo_reference']: undefined
			  			if(restObj['opening_hours']){
			  				openingHours = restObj['opening_hours']['open_now']
			  			} else {
			  				openingHours = 'unknown'
			  			} 
			  		return {
			  			"id": restObj.id,
			  			"name": restObj.name,
			  			"photo": photoRef,
			  			"place_reference":restObj.reference,
			  			"open_now": openingHours,
			  			"location": {},
			  			"my_location":{
			  				"lat":lat,
			  				"lng":lon
			  			}
			  		}
			  	})
					resolve(cleanRestaurants)	      
		    }
	   })	
		
	})
	.then(getPhoto)
	.then(getDetail)
	.then((restaurantObjects) =>{
			return restaurantObjects
	})
	.catch(handleError)
}

function handleError (error) {
	console.log("Error happened somewhere in get-restaurants ", error)
}


