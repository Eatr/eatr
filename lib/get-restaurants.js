import request from 'superagent'

// const dotenv = Dotenv.config();

// const key = {
// 	google_api_key: process.env.GOOGLE_API_KEY
// }

export default (lat = -41.2865, long = 174.7762) => {
	return new Promise ((resolve, rej) => {
		request
		  .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.2865,174.7762&radius=500&type=restaurant&key=')
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