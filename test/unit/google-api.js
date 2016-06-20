import nock from 'nock'
import getRestResponse from './test-helpers/getRest-response.json'
import getPhotoResponse from './test-helpers/getPhoto-response.json'
import getDetailResponse from './test-helpers/getDetail-response.json'

import queryString from 'query-string'
require('dotenv').config()

import getRestaurants from '../../lib/get-restaurants.js'
import getPhoto from '../../lib/get-detail.js'
import getDetail from '../../lib/get-restaurants.js'

import test from 'blue-tape'


const theRest = nock ('https://maps.googleapis.com')
				.get('/maps/api/place/nearbysearch/json?key=AIzaSyD6DGznHyitEPUBoWzNT2V85S1Fb1D-rNE&location=-41.29694%2C174.773897&radius=200&type=restaurant')
				.reply(200, getRestResponse)

const thePhoto = nock ('https://maps.googleapis.com')
				.get('/maps/api/place/photo?key=AIzaSyD6DGznHyitEPUBoWzNT2V85S1Fb1D-rNE&maxwidth=1000&photoreference=CoQBcwAAALIN3vToU8moYE8azNxpEhFZi2f32wqPEhl2gp2CYGSmYoZPX0yGwTAu8B8kq_H4cbJYUfuN1fwkLfB759DcronAznfgPD1_1h-_Korcu73czFeoGCHX9mEbOLZU2sXDf3UKBHIov_I1PEjJcnx9Ea_IS372TFk9UH6SXdnCj0-0EhANFEllF72KdhRTQHxavzOEGhTSedSLoOdRztVofp-6V58DrG00lw')
				.reply(200, getPhotoResponse)

const theDetail= nock ('https://maps.googleapis.com')
				.get('/maps/api/place/details/json?key=AIzaSyD6DGznHyitEPUBoWzNT2V85S1Fb1D-rNE&reference=CmRfAAAANHtMv2fuiFJlAI766cPrWCbvgnBg_1yFL3R3pqVaL5fgpC2-J9SzSQuz-CGThF9kaZ9bcR8ztg7F3swv7Yzn-WrZ6nzRtomkTyge530F8qW0aig4D34xPcCrZWnthD9LEhAuDN7LD_PR-Q-hkjeuMDR_GhTwdHxVYWadk82zruTrAki3L9jFGg')
				.reply(200, getDetailResponse)

test(' test get-restaurants returns restaurants', function(t) {
	return getRestaurants(-41.296940, 174.773897, 200).then((res) => {

		console.log(res)
		 t.ok(res.length > 0,  "rest array has restaurant objects")
		t.deepEqual(Object.keys(res[0]), [ 'id', 'name', 'photo', 'open_now', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')
		// t.deepEqual(res[0].photo.substring(0, 4), "http", "photo key has a string value begining http")

		let oldRest= res

	})
})

// test(' test get-restaurants witth next page token returns new restaurants', function(t) {
// 	return getRestaurants(-41.296940, 174.773897, 1000, 'CoQC_wAAAAemBqDi9Z5izBIEyurKn27az-op2RfC6cw8trEPdT8HB9J70tALQn2gISptkCWSiZtk-SAC8h_YOGZhvoYsbmngPoei3Frp3JjmdaZAIMCMjqbkRXnqGKbkxncv3FhjsDpsh9YGz_mkSU-YdNJPgzd3i7_2AOQ-n7f6vQ_01Ax-bLbjx4x81kHwkgDnqh4n5ZfrDvGawhhWeIiSKeuWuXgqL14Pw-xcc5_AuWouaby94e7ZQ7b26fYqKSOIcA1KCJ0yJqvXHbQHWejDbXM3gsDKPjucG-On2szk9P9UAJdc-GYaWfS5urxC8GxJ3xczntl5Dd6vk7WNjPGLJNVdKSsSEBmsY9ddZWOdQc-8IMQDj-MaFAfs9L8H8bhf-o6orRxMpFQ1VHm-').then((res) => {
// 		t.ok(res.length > 1,  "rest array has restaurant objects")
// 		t.deepEqual(Object.keys(res[0]), [ 'id', 'name', 'photo', 'open_now', 'phone', 'address', 'website', 'distance' ], 'keys of rest obs are correct')
// 		t.deepEqual(res[0].photo.substring(0, 4), "http", "photo key has a string value begining http")

// 	})
// })












