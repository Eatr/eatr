
export default (res, lat, lon) => {

	let nextPage = res.body['next_page_token'] ? res.body['next_page_token'] : undefined
	let restArray = res.body.results
	
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
			},
			"next_page": nextPage
		}
	})
	return cleanRestaurants

}