import React  							from 'react'
import {shallow, mount} 		from 'enzyme'
import {assert, expect} 		from 'chai'
import {
	Shortlist, 
	ShortlistContainer} 			from '../../../source/components/shortlist.jsx'
import {Provider}						from 'react-redux'
import {createStore} 				from 'redux'
import reducer 							from '../../../source/reducer.js'
import {updateRestaurants}	from '../../../source/action-creators'
import {restaurantArray} 		from '../../../source/helpers/restaurant-test-array'

describe('The basic Shortlist component', () => {

	var props = {
			restaurants: [
				{name: "restaurant 1"},
				{name: "restaurant 2"}
			]
	}
	const wrapper = mount(<Shortlist shortlist={props}/>)

	it('renders restaurant divs for each item in shortlist', () => {
		expect(wrapper.find('#shortlist'))
		.to.have.length(1)
		expect(wrapper.find('.shortlist-restaurant'))
		.to.have.length(props.restaurants.length)
		expect(wrapper.find('Swipeable'))
		.to.have.length(props.restaurants.length)
	})

	it('renders restaurant names', () => {
		expect(wrapper.text()).to.contain(props.restaurants[0].name)
		expect(wrapper.text()).to.contain(props.restaurants[1].name)
	})

})

describe('The basic empty Shortlist component', () => {
	var props = {
			restaurants: []
	}
	const wrapper = mount(<Shortlist shortlist={props}/>)
	
	it('shows message when there are no restaurants in shortlist', () => {
		props.restaurants =[]	
		expect(wrapper.find('#shortlist'))
		.to.have.length(1)
		expect(wrapper.find('Swipeable'))
		.to.have.length(0)
		expect(wrapper.text()).to.contain('Nothing in your shorty yet')
	})
})

describe('The Shortlist component actions', () => {
	const store = createStore(reducer)
	store.dispatch({
		type: 'UPDATE_RESTAURANTS',
		state: {restaurantObjects: restaurantArray}})
		store.dispatch({
			type: 'ADD_TO_SHORTLIST',
			state: restaurantArray[5]
		})
	
	const wrapper = mount(
		<Provider store={store}>
			<ShortlistContainer history={[]}/>
	  </Provider>)
	
	it('change the restaurant view in state and updates history prop when user clicks to see restaurant', () => {
		//history prop test
		expect(wrapper.find(ShortlistContainer).props().history)
			.to.have.length(0)
		assert.equal(
			store.getState().Restaurant.restaurant.name,
			restaurantArray[0].name)

		wrapper.find('.SL-detail').simulate('click')
		assert.equal(
			store.getState().Restaurant.restaurant.name,
			restaurantArray[5].name)
		expect(wrapper.find(ShortlistContainer).props().history)
			.to.have.length(1)
	})


	it('remove a restaurant from the shortlist when clicked', () => {
		assert.equal(
			store.getState().ShortList.restaurants.length,1)
		expect(wrapper.find('.shortlist-restaurant'))
		.to.have.length(1)
		wrapper.find('#nope').simulate('click')
		assert.equal(
			store.getState().ShortList.restaurants.length,0)
		expect(wrapper.find('.shortlist-restaurant'))
		.to.have.length(0)
	})
	

	

})

