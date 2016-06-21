
export default (radius) => {
	return new Promise ((resolve, reject) => {
		return resolve([-41.2865, 174.7762])   /// development only
		if (!navigator.geolocation) {
			reject('Geolocation not supported in this browser')
		} else {
			navigator.geolocation.getCurrentPosition(
				(location) => { 
					resolve([
						location.coords.latitude, 
						location.coords.longitude, 
						radius])}, 
				() => {reject('nope')}
			)
		}
	})
}
