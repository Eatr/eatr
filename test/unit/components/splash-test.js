import React  from 'react'
import {shallow} from 'enzyme'
import {assert, expect} from 'chai'
import Splash from '../../../source/components/splash.jsx'

describe('basic splash component', function () {

	it('has a div component containing h4 and p tags', function () {
		const wrapper = shallow(<Splash />)
		expect(wrapper.find('div')).to.have.length(1)
		expect(wrapper.find('#done')).to.have.length(1)
		expect(wrapper.find('h4')).to.have.length(1)
		expect(wrapper.find('p')).to.have.length(2)
		expect(wrapper.text()).to.contain('Not your cup of tea? Swipe left.')
		expect(wrapper.text()).to.contain('Like what you see? Swipe right.')
	})
})