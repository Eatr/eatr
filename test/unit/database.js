console.log('\n\n\n\n\n')
import redtape from 'redtape'
import { test as knexConfig } from '../../knexfile.js'
import Knex from 'knex'
const knex = Knex(knexConfig)

import User from '../../db/user-functions.js'
const {addUser, findUser, editUser, isUser} = User(knex)


const test = redtape({
	beforeEach: function(callback) {
		return knex.migrate.latest()
			.then( function () {
				console.log('test db migrated')
				callback()
			})
			
	},

	afterEach: function (callback) {
		return knex.migrate.rollback()
			.then(function () {
				console.log('test db rolled-back')
				callback()
			})
	}
})
//assert 
const testUser = {
	passportId: 12321654987954653216548,
	name: 'Oliver Stigley',
	shortlist: JSON.stringify({"geometry" : {"location" : {"lat" : -41.2837453,"lng" : 174.776866}},"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png","id" : "799330f3aa653f0acb27666bd5893592abc48a5f","name" : "Hotel ibis Wellington","opening_hours" : {"open_now" : true,"weekday_text" : []}})
}

test('Should add and receive user', (t) => {
	//act : 
	addUser(testUser)
		.then( (response) => {
			t.ok(response[0] === 1, 'user added')
			findUser(Object.assign({id: response[0]}, testUser))
				.then((user) => {
					t.equal(user[0].passportId, testUser.passportId, 'correct passportId returned from db')
				})

		})
		t.end()
})

test('Should add, edit and find user', (t) => {
	//act : 
	addUser(testUser)
		.then( (response) => {
			t.ok(response[0] === 1, 'user added')
			let user = Object.assign({id: response[0]}, testUser)
			let newShortlist = {shortlist: "abc"}
			editUser(user, newShortlist)
			findUser(user)
				.then((found) => {
					t.equal(found[0].passportId, testUser.passportId, 'correct passportId returned from db')
					t.equal(found[0].shortlist, newShortlist.shortlist, 'shortlist updated with new data')
				})

		})
		t.end()

})

test('Should check a user exists, and return the user or false', (t) => {
	addUser(testUser)
		.then( (userId) => {
			isUser(testUser.passportId)
			.then((response) => {
				t.ok(response.exist, 'user check returns true')
				t.equal(response.passportId, testUser.passportId, "returns correct passport id")
				t.equal(response.id, userId[0], "returns correct user id")
			})
		})
		t.end()

})

test('Should check a user exists, and return it or false', (t) => {
	isUser(1324656)
	.then((response) => {
		t.notOk(response.exist, 'user check returns false')
	})
	t.end()
})

