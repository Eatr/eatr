console.log('\n\n\n\n\n')
import redtape from 'redtape'
import { test as knexConfig } from '../../knexfile.js'
import Knex from 'knex'
const knex = Knex(knexConfig)

import User from '../../db/user-functions.js'
const {addUser, findUser, editUser} = User(knex)


const test = redtape({
	beforeEach: function(callback) {
		return knex.migrate.latest()
			// return knex.seed.run()
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

test('should see console log', (t) => {
	//act : 
	addUser(testUser)
		.then( (response) => {
			t.ok(response[0] === 1)
			findUser(Object.assign({id: response[0]}, testUser))
				// .then(console.log)
				.then((user) => {
					console.log('user is ', user[0])
					t.equal(user[0].passportId, testUser.passportId, 'correct passportId returned from db')
				})

		})
		t.end()
})