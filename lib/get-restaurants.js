import request from 'superagent'
import dotenv from 'dotenv'
import queryString from 'query-string'

const key = process.env.GOOGLE_API_KEY


export default (lat = -41.2865, long = 174.7762) => {
	return new Promise ((resolve, rej) => {
		request
		  .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=key')
		  .end(function(err, res){
		  	if(err) {
		  		console.log('there has been an error in superagent', err)
		  		rej(err)
		  	} else {
		  		console.log(res)
					resolve(res)	      
		    }
	   })	

		
	})
}


