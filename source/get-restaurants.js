import Promise from 'promise'
import Dotenv from 'dotenv'
import superagent from 'superagent'

const dotenv = Dotenv.config();

const key = {
	google_api_key: process.env.GOOGLE_API_KEY
}

export default function (lat, long) {
	return new Promise (function(resolve, reject) {
		request
		  .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.2865,174.7762&radius=500&type=restaurant&key=AIzaSyAGDxdzzLm0__nfcD7I4Bg2oD4aYyEbePA')
		  .end(function(err, res){
        console.log(res)
      })	
	})


}