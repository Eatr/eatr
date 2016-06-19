
export default (res, lat, lon) => {
	let restArray = res.body.results
	let nextPageToken = res.body.next_page_token
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
			}
		}
	})
	return cleanRestaurants

}