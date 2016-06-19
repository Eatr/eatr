import request from 'superagent'
require('dotenv').config()
import queryString from 'query-string'

export default (restArray) => {
		// console.log('sat', restArray)
		return Promise.all(
			restArray.map( (restaurant) => {
				return new Promise ((resolve, reject) => {
					if (restaurant['photo'] === undefined) {
						restaurant.photo = 'http://s.huffpost.com/contributors/steve-harvey/headshot.jpg'
						// console.log('pre first resolve', restaurant)
						resolve(restaurant) 
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
						  		console.log('there has been an error in superagent', err)
						  	} else {
						  		restaurant.photo = res.redirects[0]
						  		// console.log('pre 2nd resolve ', restaurant)
						  		resolve(restaurant)
						  	}
						  })
					}
				})
			}))
		.then((restaurantObjects) =>{
			return restaurantObjects
		})

	}