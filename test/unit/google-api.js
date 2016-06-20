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


const theRest = nock ('https://maps.googleapis.com')
				.get('/maps/api/place/nearbysearch/json?')
				.query({
					key: process.env.GOOGLE_API_KEY,
					location: "-41.29694%2C174.773897",
					radius: 200,
					type: 'restaurant'
				})
				.reply(200, getRestResponse)

const thePhoto = nock ('https://maps.googleapis.com')
				.get('/maps/api/place/photo?')
				.query({
					maxwidth: '1000',
					photoreference: photoRef,		
					key: process.env.GOOGLE_API_KEY
				})
				.reply(200, getPhotoResponse)

const theDetail= nock ('https://maps.googleapis.com')
				.get('/maps/api/place/details/json?')
				.query({
					reference: placeRef,
					key: process.env.GOOGLE_API_KEY
				})
				.reply(200, getDetailResponse)

const theNextPage= nock ('https://maps.googleapis.com')
				.get('/maps/api/place/nearbysearch/json?')
				.query({
					key: process.env.GOOGLE_API_KEY,
					location: "-41.29694%2C174.773897",
					radius: 200,
					type: 'restaurant',
					pagetoken: moreRestsToken
				})
				.reply(200, getNextPageResponse)


test(' test get-restaurants returns restaurants', function(t) {
	return getRestaurants(-41.296940, 174.773897, 200).then((res) => {
		 console.log(res)
		t.ok(res.length > 0,  "rest array has restaurant objects")
		t.deepEqual(Object.keys(res[0]), [ 'id', 'name', 'photo', 'open_now', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')
		 t.deepEqual(res[0].photo.substring(0, 4), "http", "photo key has a string value begining http")

		let oldRest= res

	})
})

// test(' test get-restaurants returns restaurants', function(t) {
// 	return getRestaurants(-41.296940, 174.773897, 200).then((res) => {
// 		 console.log(res[0])
// 		t.ok(res.length > 0,  "rest array has restaurant objects")
// 		t.deepEqual(Object.keys(res[0]), [ 'id', 'name', 'photo', 'open_now', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')
// 		 t.deepEqual(res[0].photo.substring(0, 4), "http", "photo key has a string value begining http")

// 		let oldRest= res

// 	})
// })


// test(' test get-restaurants witth next page token returns new restaurants', function(t) {
// 	return getRestaurants(-41.296940, 174.773897, 1000, 'CoQC_wAAAAemBqDi9Z5izBIEyurKn27az-op2RfC6cw8trEPdT8HB9J70tALQn2gISptkCWSiZtk-SAC8h_YOGZhvoYsbmngPoei3Frp3JjmdaZAIMCMjqbkRXnqGKbkxncv3FhjsDpsh9YGz_mkSU-YdNJPgzd3i7_2AOQ-n7f6vQ_01Ax-bLbjx4x81kHwkgDnqh4n5ZfrDvGawhhWeIiSKeuWuXgqL14Pw-xcc5_AuWouaby94e7ZQ7b26fYqKSOIcA1KCJ0yJqvXHbQHWejDbXM3gsDKPjucG-On2szk9P9UAJdc-GYaWfS5urxC8GxJ3xczntl5Dd6vk7WNjPGLJNVdKSsSEBmsY9ddZWOdQc-8IMQDj-MaFAfs9L8H8bhf-o6orRxMpFQ1VHm-').then((res) => {
// 		t.ok(res.length > 1,  "rest array has restaurant objects")
// 		t.deepEqual(Object.keys(res[0]), [ 'id', 'name', 'photo', 'open_now', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')
// 		t.deepEqual(res[0].photo.substring(0, 4), "http", "photo key has a string value begining http")

// 	})
// })












