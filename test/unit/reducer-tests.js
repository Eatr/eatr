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
		restaurants: [],
	},
	Restaurant: {},
	User: {

	}
}

//---------UPDATE_RESTAURANTS--------
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
			restaurants: [],
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

//---------AAD_TO_SHORTLIST--------
test('add to shortlist', function (t) {
	//arrange
	let restaurantAddShortlist = 
	{
			name: 'shortlist1',
			website: 'http://shortlist1.com',
			phone: '346346',
			distance: 421
		}

	let testActionObj = {
			type: 'ADD_TO_SHORTLIST',
			state: restaurantAddShortlist,
			id: 1
	}

	let expectedNewState = {
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
			restaurants: [
			{
				name: 'shortlist1',
				website: 'http://shortlist1.com',
				phone: '346346',
				distance: 421
			}
			],
		},
		Restaurant: {},
		User: {

		}
	}
	//action
	let actualNewState = reducer(testInitialState, testActionObj)
	//assert
	t.ok(actualNewState, "something is returned")
	t.deepEqual(expectedNewState, actualNewState, "new restaurant added to shortlist")
	t.true(actualNewState.ShortList.restaurants.length > testInitialState.ShortList.restaurants.length, "shortlist increases in length")
	t.end()

//---------CHANGE_PREFERENCES--------
test('preferences changed', function (t) {
	//arrange
	let preferencesChanged = {
		Price: 2, 
		distance:20, 
		cuisine:['italian', 'chinese']
	}
	//action
	let testActionObj = {
			type: 'CHANGE_PREFERENCES',
			state: preferencesChanged,
			id: 1
	}

	let actualNewState = reducer(testInitialState, testActionObj)
	//assert
	t.ok(actualNewState, "something is returned")
	t.notDeepEqual(actualNewState.Preferences === testInitialState.Preferences, "preferences has changed")
	t.end()
})


//---------CHANGE_VIEW_DETAIL--------
test('change view detail', function (t) {
	//arrange
	let viewDetailsChanged = {
		ShowDetail: true,
	}
	//action
	let testActionObj = {
			type: 'CHANGE_VIEW_DETAIL',
			state: viewDetailsChanged,
			id: 1
	}
	let actualNewState = reducer(testInitialState, testActionObj)
	//assert
	t.ok(actualNewState, "something is returned")
	t.notDeepEqual(actualNewState === testInitialState, "view has changed")
	t.deepEqual(actualNewState.ShowDetail, {
		ShowDetail: true,
	})

	t.end()
})


})