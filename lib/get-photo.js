import request from 'superagent'
require('dotenv').config()
import queryString from 'query-string'
import getDetail from './get-detail.js'

export default (restArray) => {
		return Promise.all(
			[restArray.pop()].map( (restaurant) => {
				return new Promise ((resolve, reject) => {
					if (restaurant['photo'] === undefined) {
						restaurant.photo = 'http://s.huffpost.com/contributors/steve-harvey/headshot.jpg'
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
						  		console.log('there has been an error in get photo function, superagent', err)
						  	} else {

						  		restaurant.photo = res.redirects[0] //!!!!!!!!!! res.redirects[0]
						  		resolve(restaurant)
						  	}
						  })
					}
				})
			}))	

	

	}

