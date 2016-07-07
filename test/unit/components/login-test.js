import React 						from 'react'
import {shallow} 				from 'enzyme'
import {assert, expect}	from 'chai'
import {Login} 					from '../../../source/components/modal-login.jsx'
import Navbar 					from '../../../source/components/navbar.jsx'

describe('The login component', () => {
	it('renders login details when there is no user in props', () => {
		const wrapper = shallow(<Login user={{name: null}} />)
		assert.equal(wrapper.containsMatchingElement(Navbar), true)
		expect(wrapper.find('a')).to.have.length(2)
		assert.equal(wrapper.find('a').nodes[0].props.href, '/auth/facebook')
		assert.equal(wrapper.find('a').nodes[1].props.href, '/auth/twitter')
		expect(wrapper.text()).to.contain(
			'Login to keep your shortlist for next time, and share with friends')
	})
})