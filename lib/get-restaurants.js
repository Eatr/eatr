import request from 'superagent'
require('dotenv').config()
import queryString from 'query-string'

const jennyLauren =  (lat = -41.2865, long = 174.7762, radius = 100) => {
	let query = queryString.stringify({		
			location: lat + ',' + long,
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
			  			// console.log(restArray.results[0].photos[0]["photo_reference"])

			  	let nextPageToken = res.body.next_page_token
			  	let openingHours 
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
					resolve(cleanRestaurants)	      
		    }
	   })	
		
	})
	.then((restArray) => {
		restArray.map( (restaurant) => {
			return new Promise ((resolve, reject) => {
				if (restaurant['photo'] === undefined) {
					console.log('nope')
					reject() 
				} else {
					let query = queryString.stringify({
							maxwidth: '1000',
							photoreference: restaurant['photo'],		
							key: process.env.GOOGLE_API_KEY,
						},false)

					request
					  .get('https://maps.googleapis.com/maps/api/place/photo?' + query )
					  .end((err,res) => {
					  	if(err) {
					  		console.log('there has been an error in superagent')
			  				reject(err)
					  	} else {
					  		// let photoUrl = res
					  		restaurant.photo = res.redirects[0]
					  		resolve(restaurgit ant)
					  	}
					  })
				}
			})
			.then((arrayofurls) =>{
				console.log(arrayofurls)
			})
		})
		
	})
	.catch(handleError)
}

function handleError (error) {
	console.log("Error happened somewhere in get-restaurants: ")
}

jennyLauren()
