import React 												from 'react'
import {shallow, mount} 						from 'enzyme'
import {expect, assert}							from 'chai'
import RestaurantDetails						from '../../../source/components/restaurant-details.jsx'
import {Restaurant}									from '../../../source/components/restaurant.jsx'

describe('The Restaurant component', () => {
	const props = {
		restaurant: {
			restaurant: { 
				name: "The Duck and Fox",
				website: "http://www.duckfox.com",
				phone: "123 456 789",
				address: "address",
				photo: "abc"
			},
			index: 0,
			ShowDetail: false
		},	
		user: {name: null},
		shortlist: [],
		location: []
	}
	const wrapper = mount(<Restaurant {...props}/>)
})
