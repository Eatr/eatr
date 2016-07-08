import React 												from 'react'
import {shallow, mount} 						from 'enzyme'
import {expect, assert}							from 'chai'
import RestaurantDetails						from '../../../source/components/restaurant-details.jsx'

describe('The restaurant-details component', () => {
	it('renders restaurant\'s details from props', () => {
		const props ={
			name: "The Duck and Fox",
			website: "http://www.duckfox.com",
			phone: "123 456 789",
			address: "address"
		}
		const wrapper = shallow(<RestaurantDetails {...props}/>)
		assert(wrapper.is('#rest-details'))
		expect(wrapper.text()).to.contain(props.name)
		expect(wrapper.text()).to.contain(props.phone)
		expect(wrapper.text()).to.contain('Website')
		expect(wrapper.text()).to.contain(props.address)
		expect(wrapper.find('a').node.props.href).to.equal(props.website)
	})
})

