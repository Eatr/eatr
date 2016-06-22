
export default (radius) => {
	return new Promise ((resolve, reject) => {
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
