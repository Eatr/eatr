import React 			from 'react'
import {shallow} 	from 'enzyme'
import {Filter} 		from '../../../source/components/filter.jsx'
import {expect, assert}		from 'chai'

describe('The Filter component', () => {
	const wrapper = shallow(<Filter />)
	it('renders done button with onClick prop', () => {
		expect(wrapper.find('button')).to.have.length(1)
		assert.typeOf(wrapper.find('button').props().onClick, 'function')
	})

	it('renders an icon in the button', () => {
		expect(wrapper.find('img')).to.have.length(1)
	})
})