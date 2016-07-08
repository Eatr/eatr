import React 												from 'react'
import {shallow, mount} 						from 'enzyme'
import {expect, assert}							from 'chai'
import RestaurantDetails						from '../../../source/components/restaurant-details.jsx'
import {Restaurant}									from '../../../source/components/restaurant.jsx'
import Swipeable 										from 'react-swipeable'

describe('The basic Restaurant component', () => {
	const props = {
		restaurant: {
			restaurant: { 
				name: "The Duck and Fox",
				website: "http://www.duckfox.com",
				phone: "123 456 789",
				address: "address",
				photo: "abc",
				distance: 300
			},
			index: 0,
			ShowDetail: false
		},	
		user: {name: null},
		shortlist: [],
		location: []
	}
	const wrapper = mount(<Restaurant {...props}/>)
	const {restaurant, index, ShowDetail } = props.restaurant
	const {changeViewDetail} = props

	it('renders restaurant photo, restaurant name and distance', () => {
		expect(wrapper.text()).to.contain(restaurant.name)
		expect(wrapper.text()).to.contain(`${restaurant.distance}m `)
		expect(wrapper.find('#restaurant-image')).to.have.length(1)
		assert(wrapper.containsMatchingElement(
			<img id="restaurant-image" src={restaurant.photo}/>
		))
	})

	it('renders the yeah nah bar', () => {
		expect(wrapper.find('YeahNahBar')).to.have.length(1)
	})

	it('is a Swipe-able component', () => {
		expect(wrapper.find('Swipeable')).to.have.length(1)
		assert.typeOf(wrapper.find('Swipeable').node.props.delta, 'number')
		assert.typeOf(wrapper.find('Swipeable').node.props.onSwipedLeft, 'function')
		assert.typeOf(wrapper.find('Swipeable').node.props.onSwipedRight, 'function')

	})

	it('swipeable component is the parent component', () => {
		expect(wrapper.find('Swipeable').children()
			.find('#restaurant-image')).to.have.length(1)

		expect(wrapper.find('Swipeable').children()
			.text()).to.contain(restaurant.name)

		expect(wrapper.find('Swipeable').children()
			.text()).to.contain(`${restaurant.distance}m `)
	})
})
