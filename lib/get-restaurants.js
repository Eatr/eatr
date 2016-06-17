import request from 'superagent'
require('dotenv').config()
import queryString from 'query-string'



export default (lat = -41.2865, long = 174.7762, radius = 1000) => {
	let query = queryString.stringify({		
			location: lat + '\,' + long,
			radius: radius,
			types: 'cafe|restaurant|food|bakery',
			key: process.env.GOOGLE_API_KEY,

		},false)
	
console.log(query, "this is query")
console.log("----------------------")


	return new Promise ((resolve, rej) => {
		request
		  .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + query )
		  .end(function(err, res){
		  	if(err) {
		  		console.log('there has been an error in superagent', err)
		  		rej(err)
		  	} else {
		  		
					resolve(res)	      
		    }
	   })	

		
	})
}


