import React  					from 'react'
import {shallow} 				from 'enzyme'
import {assert, expect} from 'chai'
import {Distance} 			from '../../../source/components/distance.jsx'

describe('The distance component', () => {
	const preferences = {distance: 1000}
	const wrapper = shallow(<Distance preferences={preferences}/>)

	it('renders correct elements', () => {
		expect(wrapper.find('#filter')).to.have.length(1)
		expect(wrapper.find('#dist-header')).to.have.length(1)
		expect(wrapper.find('#dist-meter')).to.have.length(1)
		expect(wrapper.find('#distance')).to.have.length(1)
		expect(wrapper.find('h1')).to.have.length(1)
		expect(wrapper.find('p')).to.have.length(1)
		expect(wrapper.text()).to.contain('Distance:')
		expect(wrapper.text()).to.contain('1000 meters')
	})

	it('renders slider component correctly', () => {
		expect(wrapper.find('Slider')).to.have.length(1)
		expect(wrapper.find('Slider').node.props.step).to.equal(100)
		expect(wrapper.find('Slider').node.props.min).to.equal(200)
		expect(wrapper.find('Slider').node.props.max).to.equal(1000)
		expect(wrapper.find('Slider').node.props.defaultValue).to.equal(preferences.distance)
	})

})