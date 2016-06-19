import test from 'blue-tape'

import getRestaurants from '../../lib/get-restaurants.js'

test(' test get-restaurants returns restaurants', function(t) {
	return getRestaurants(-41.2865, 174.7762, 500).then((res) => {
		t.ok(res.length > 1,  "rest array has restaurant objects")
		
		t.deepEqual(Object.keys(res[0]), [ 'id', 'name', 'photo', 'place_reference', 'open_now' ], 'keys of rest obs are correct')
		// console.log(res, "****************")
		t.ok(res[0]['place_reference'], "place reference is a thing")
		t.deepEqual(res[0].photo.substring(0, 4), "http", "photo key has a string value begining http")
		t.ok(typeof res[0]['place_reference'], "string", "place reference is a string")

		console.log(res[0], "-----end of tests-----")

	})
})