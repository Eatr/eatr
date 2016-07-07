import React 												from 'react'
import {shallow, mount} 						from 'enzyme'
import {expect, assert}							from 'chai'
import {Filter} 		from '../../../source/components/filter.jsx'
import Navbar 											from '../../../source/components/navbar.jsx'
import {DistanceContainer} 					from '../../../source/components/distance.jsx'

describe('The Filter component', () => {
	const wrapper = shallow(<Filter />)
	it('renders Navbar, Distance Container and done button with onClick prop', () => {
		expect(wrapper.find('button')).to.have.length(1)
		assert.typeOf(wrapper.find('button').props().onClick, 'function')
		expect(wrapper.find('img')).to.have.length(1)
		assert.equal(wrapper.containsAllMatchingElements([
			<Navbar />,
			<DistanceContainer />],
			), true)
	})

})







 
