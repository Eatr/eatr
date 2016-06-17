import test from 'tape'
import reducer from '../source/reducer.js'

const testInitialState = {
	Restaurants: [
		{
			name: 'testname',
			website: 'http://testwebsiteurl.com',
			phone: '08008888',
			distance: 100
		},
		{
			name: 'testname1',
			website: 'http://testwebsiteurl1.com',
			phone: '080088881',
			distance: 101
		},
		{
			name: 'testname2',
			website: 'http://testwebsiteurl2.com',
			phone: '080088882',
			distance: 102
		}
	],
	Preferences: { 
		Price: 0, 
		distance:0, 
		cuisine:['indian', 'italian', 'chinese']
	},
	ShowDetail: false,
	ShortList: {
		restaurants: [{}, {}, {}],
	},
	Restaurant: {},
	User: {

	}
}

test('update restaurants', function (t) {
	//arrange
	//action
	let newRestaurants = [
			{
				name: 'newrest1',
				website: 'http://newrest1.com',
				phone: '346346',
				distance: 421
			},
			{
				name: 'newrest2',
				website: 'http://newrest2.com',
				phone: '3463456',
				distance: 345
			},
	]
	
	let testActionObj = {
			type: 'UPDATE_RESTAURANTS',
			state: newRestaurants,
			id: 1
	}

	let expectedNewState = {
		Restaurants: [
				{
					name: 'newrest1',
					website: 'http://newrest1.com',
					phone: '346346',
					distance: 421
				},
				{
					name: 'newrest2',
					website: 'http://newrest2.com',
					phone: '3463456',
					distance: 345
				},
		],
		Preferences: { 
			Price: 0, 
			distance:0, 
			cuisine:['indian', 'italian', 'chinese']
		},
		ShowDetail: false,
		ShortList: {
			restaurants: [{}, {}, {}],
		},
		Restaurant: {},
		User: {

		}
	}
	let actualNewState = reducer(testInitialState, testActionObj)
	
	//assert
	t.ok(actualNewState, "something is returned")
	t.deepEqual(expectedNewState, actualNewState)
	t.end()

})

test('update restaurants', function (t) {
	//arrange
	//action
	let testActionObj = {
			type: 'CHANGE_PREFERENCES',
			state: testInitialState,
			id: 1
		}
	let testNewState = reducer(testInitialState, testActionObj)
	
	//assert
	t.ok(testNewState, "something is returned")
	t.end()

})