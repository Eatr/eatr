import React 									from 'react'
import {Provider}							from 'react-redux'
import {createStore} 					from 'redux'
import {shallow, mount} 			from 'enzyme'
import {expect, assert}				from 'chai'
import sinon 									from 'sinon'
import Swipeable 							from 'react-swipeable'
import reducer 								from '../../../source/reducer.js'
import {updateRestaurants}			from '../../../source/action-creators'
import {restaurantArray} 				from '../../../source/helpers/restaurant-test-array'
import RestaurantDetails			from '../../../source/components/restaurant-details.jsx'
import {
	Restaurant, 
	RestaurantContainer}				from '../../../source/components/restaurant.jsx'
import restaurantsArray				from '../../../source/helpers/restaurant-test-array.js'
import Details 								from '../../../source/components/restaurant-details.jsx'
describe('The basic Restaurant component', () => {
	const props = {
		restaurant: {
			restaurant: restaurantArray[0],
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

describe('The Restaurant component actions', () => {
	const store = createStore(reducer)
	
	store.dispatch({
		type: 'UPDATE_RESTAURANTS',
		state: {restaurantObjects: restaurantArray}})

	const wrapper = mount(
		<Provider store={store}>
			<RestaurantContainer />
	  </Provider>)
	// console.log(wrapper.find(RestaurantContainer).node.stateProps)
	it('renders toggles Details component on click',() => {
		expect(wrapper.find('#rest-details')).to.have.length(0)
		wrapper.find('#restaurant-card').simulate('click')
		expect(wrapper.find('#rest-details')).to.have.length(1)
		wrapper.find('#restaurant-card').simulate('click')
		expect(wrapper.find('#rest-details')).to.have.length(0)
	})

	const rest1 = restaurantArray[0].name
	const rest2 = restaurantArray[1].name
	const rest3 = restaurantArray[2].name
	it('adds restaurant to the shortlist when clicked right', () => {
		assert.equal(store.getState().ShortList.restaurants.length, 0)
		expect(wrapper.text()).to.contain(rest1)
		expect(wrapper.text()).to.not.contain(rest2)
		wrapper.find('#yeah').simulate('click')
		expect(wrapper.text()).to.not.contain(rest1)
		expect(wrapper.text()).to.contain(rest2)
		assert.equal(store.getState().ShortList.restaurants.length, 1)

	})

	it('changes the restaurant when clicked left', () => {
		expect(wrapper.text()).to.contain(rest2)
		wrapper.find('#nah').simulate('click')
		expect(wrapper.text()).to.not.contain(rest2)
		expect(wrapper.text()).to.contain(rest3)
		assert.equal(store.getState().ShortList.restaurants.length, 1)
	})
})
