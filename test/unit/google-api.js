import nock from 'nock'
import getRestResponse from './test-helpers/getRest-response.json'
import getPhotoResponse from './test-helpers/getPhoto-response.json'
import getDetailResponse from './test-helpers/getDetail-response.json'
import getNextPageResponse from './test-helpers/getNextPage-response.json'

import queryString from 'query-string'
require('dotenv').config()

import getRestaurants from '../../lib/get-restaurants.js'
import getPhoto from '../../lib/get-detail.js'
import getDetail from '../../lib/get-restaurants.js'

import test from 'blue-tape'

const moreRestsToken = "def"
const photoRef = 'abc'
const placeRef = 'ghi'
const key =process.env.GOOGLE_API_KEY


const theRest = nock ('https://maps.googleapis.com')
				.get('/maps/api/place/nearbysearch/json?key=' + key +'&location=-41.29694%2C174.773897&radius=200&type=restaurant')
				.reply(200, getRestResponse)

const thePhoto = nock ('https://maps.googleapis.com')
				.get('/maps/api/place/photo?key=' + key + '&maxwidth=1000&photoreference=abc')
				.reply(200, getPhotoResponse)

const theNextPhoto = nock ('https://maps.googleapis.com')
				.get('/maps/api/place/photo?key=' + key + '&maxwidth=1000&photoreference=poop')
				.reply(200, getPhotoResponse)

const theDetail= nock ('https://maps.googleapis.com')
				.get('/maps/api/place/details/json?key=' + key + '&reference=ghi')
				.reply(200, getDetailResponse)

const theNextDetail= nock ('https://maps.googleapis.com')
				.get('/maps/api/place/details/json?key=' + key + '&reference=toilet')
				.reply(200, getDetailResponse)


const theNextPage= nock ('https://maps.googleapis.com')
				.get('/maps/api/place/nearbysearch/json?key=' + key + '&location=-41.29694%2C174.773897&pagetoken=def&radius=200&type=restaurant')
				.reply(200, getNextPageResponse)


test(' test get-restaurants returns restaurants', function(t) {
	return getRestaurants(-41.296940, 174.773897, 200).then((res) => {
		 console.log(res)
		t.ok(res.restaurantObjects.length > 0,  "rest array has restaurant objects")
		t.deepEqual(Object.keys(res.restaurantObjects[0]), [ 'id', 'name', 'photo', 'open_now', 'next_page', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')
		 t.deepEqual(res.restaurantObjects[0].photo.substring(0, 4), "http", "photo key has a string value begining http")

		let oldRest= res

	})
})

test(' test get-restaurants witth next page token returns new restaurants', function(t) {
	return getRestaurants(-41.296940, 174.773897, 200, moreRestsToken).then((res) => {
	t.ok(res.restaurantObjects.length > 0,  "rest array has restaurant objects")
	t.deepEqual(Object.keys(res.restaurantObjects[0]), [ 'id', 'name', 'photo', 'open_now', 'next_page', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')
	 t.deepEqual(res.restaurantObjects[0].photo.substring(0, 4), "http", "photo key has a string value begining http")
	})
})












