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




var oldRests 

	var locationLat 
	var locationLon 
	var locationRadius 

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


// const theNextPage= nock ('https://maps.googleapis.com')
// 				.get('/maps/api/place/nearbysearch/json?key=' + key + '&location='+ locationLat +'%2C' + locationLon + '&pagetoken=def' + '&radius=' + locationRadius + '&type=restaurant')
// 				.reply(200, getNextPageResponse)

const theNewNextPage= nock ('https://maps.googleapis.com')
				.get('/maps/api/place/nearbysearch/json?key=' + key + '&location=-41.29694%2C174.773897&pagetoken=def&radius&type=restaurant')
				.reply(200, getNextPageResponse)



// const theRest = nock ('https://maps.googleapis.com')
// 				.get('/maps/api/place/nearbysearch/json?key=' + key +'&location=-41.29694%2C174.773897&radius=200&type=restaurant')
// 				.reply(200, getRestResponse)

// const thePhoto = nock ('https://maps.googleapis.com')
// 				.get('/maps/api/place/photo?key=' + key + '&maxwidth=1000&photoreference=abc')
// 				.reply(200, getPhotoResponse)

// const theNextPhoto = nock ('https://maps.googleapis.com')
// 				.get('/maps/api/place/photo?key=' + key + '&maxwidth=1000&photoreference=poop')
// 				.reply(200, getPhotoResponse)

// const theDetail= nock ('https://maps.googleapis.com')
// 				.get('/maps/api/place/details/json?key=' + key + '&reference=ghi')
// 				.reply(200, getDetailResponse)

// const theNextDetail= nock ('https://maps.googleapis.com')
// 				.get('/maps/api/place/details/json?key=' + key + '&reference=toilet')
// 				.reply(200, getDetailResponse)


// const theNextPage= nock ('https://maps.googleapis.com')
// 				.get('/maps/api/place/nearbysearch/json?key=' + key + '&location=-41.29694%2C174.773897&pagetoken=def&radius=200&type=restaurant')
// 				.reply(200, getNextPageResponse)

var oldRests 

test(' test get-restaurants returns restaurants', function(t) {
	
	var locationLat = -41.296940
	var locationLon = 174.773897
	var locationRadius = 200

	return getRestaurants(locationLat, locationLon, locationRadius).then((res) => {
		
		t.ok(res.restaurantObjects.length > 0,  "rest array has restaurant objects")
		t.deepEqual(Object.keys(res.restaurantObjects[0]), [ 'id', 'name', 'photo', 'open_now', 'next_page', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')

		oldRests = res.restaurantObjects

	})
})

test(' get-restaurants returns new restaurants when given a new page token', function(t) {
	
	var locationLat = -41.296940
	var locationLon = 174.773897
	var locationRadius = null

	return getRestaurants(locationLat, locationLon, locationRadius, moreRestsToken).then((res) => {
	var newRests = res.restaurantObjects

	t.ok(res.restaurantObjects.length > 0,  "rest array has restaurant objects")
	t.deepEqual(Object.keys(res.restaurantObjects[0]), [ 'id', 'name', 'photo', 'open_now', 'next_page', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')
  t.notDeepEqual(oldRests, newRests, "next page of restaurants dooes not equal the old page of rests")

	})
})












