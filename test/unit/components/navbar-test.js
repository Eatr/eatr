import React  					from 'react'
import {shallow} 				from 'enzyme'
import {assert, expect} from 'chai'
import Navbar 					from '../../../source/components/navbar.jsx'
import Navlink					from '../../../source/components/navlink.jsx'
import {Link} 						from 'react-router'

describe('The Navbar compnent', () => {
	it('renders Navlinks with images', () => {
		const wrapper = shallow(<Navbar />)
		expect(wrapper.find('img')).to.have.length(2)
		expect(wrapper.find(Navlink)).to.have.length(2)
		expect(wrapper.containsMatchingElement(
				<Navlink><img/></Navlink>
			)).to.equal(true)
	})
})