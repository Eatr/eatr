import request from 'superagent'
require('dotenv').config()
import { getDistance } from 'geolib'
import queryString from 'query-string'

export default (restArray) => {
		return Promise.all(
			restArray.map( (restaurant) => {
				return new Promise ((resolve, reject) => {
						let query = queryString.stringify({
								reference: restaurant['place_reference'],
								key: process.env.GOOGLE_API_KEY,
							},false)
						request
						  .get('https://maps.googleapis.com/maps/api/place/details/json?' + query )
						  .end((err,res) => {
						  	if(err) {
						  		console.log('there has been an error in get-detail function, superagent', err)
						  	} else {

						  		let r = res.body.result
						  		restaurant['phone'] = r['international_phone_number']
						  		restaurant['address'] = r['formatted_address']
						  		restaurant['website'] = r['website']
						  		restaurant['location'] = r['geometry']['location']
						  		restaurant['distance'] = getDistance(restaurant['my_location'], restaurant['location'])
						  	
						  		delete restaurant["place_reference"]
						  		delete restaurant["my_location"]
						  		delete restaurant["location"]

						  		resolve(restaurant)
						  	}
						  })
				})
			}))

	}