import React  					from 'react'
import {shallow, mount} 				from 'enzyme'
import {assert, expect} from 'chai'
import {Shortlist} 			from '../../../source/components/shortlist.jsx'

describe('The Shortlist component', () => {

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

describe('The empty Shortlist component', () => {
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

