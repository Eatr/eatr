
export default () => {
	return new Promise ((resolve, reject) => {
		if (!navigator.geolocation) {
			reject('Geolocation not supported in this browser')
		} else {
			navigator.geolocation.getCurrentPosition(
				(location) => { resolve([location.coords.latitude, location.coords.longitude])}, 
				() => {reject('nope')}
			)
		}
	})
}
