import request from 'superagent'
require('dotenv').config()
import queryString from 'query-string'



export default (lat = -41.2865, long = 174.7762, radius = 1000) => {
	let query = queryString.stringify({		
			location: lat + ',' + long,
			radius: radius,
			types: 'cafe|restaurant|food|bakery',
			key: process.env.GOOGLE_API_KEY,

		},false)

	return new Promise ((resolve, rej) => {
		request
		  .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + query )
		  // .then((res) => {
		  	// let restArray = res.body.results
		  	// let nextPageToken = res.body.next_page_token
		  	// let cleanRestaurants = restArray.map( function ( restObj ) {
		  	// 	console.log("in map function", restObj)
		  		
		  	// 	return {
		  	// 		"id": restObj.id,
		  	// 		"name": restObj.name,
		  	// 		"open_now": restObj.opening_hours.open_now,
		  	// 	}
		  	// })
		  	// console.log(cleanRestaurants, "please be a nice clean object ")
		  	// console.log("------------------------------------------------")

		  // })
		  .end(function(err, res){
		  	if(err) {
		  		console.log('there has been an error in superagent', err)
		  		rej(err)
		  	} else {
		  		let restArray = res.body.results
		  	let nextPageToken = res.body.next_page_token
		  	let cleanRestaurants = restArray.map( function ( restObj ) {
		  		console.log("in map function", restObj.geometry)
		  		
		  		return {
		  			"id": restObj.id,
		  			"name": restObj.name//,
		  			// "open_now": restObj["opening_hours"]["open_now"]
		  		}
		  	})
		  	console.log(cleanRestaurants, "please be a nice clean object ")
		  	console.log("------------------------------------------------")
		  		
					resolve(cleanRestaurants)	      
		    }
	   })	

		
	})
}


