import {shallow} 				from 'enzyme'
import React 						from 'react'
import {assert, expect} from 'chai'
import Logo 						from '../../../source/components/logo.jsx'
import Navlink					from '../../../source/components/navlink.jsx'

describe('Logo component', () => {
	it('renders an image with a link', () => {
		const wrapper = shallow(<Logo />)
		expect(wrapper.find(Navlink)).to.have.length(1)
		expect(wrapper.find('img')).to.have.length(1)
		assert(wrapper.containsMatchingElement(
			<Navlink><img/></Navlink>))
	})
})