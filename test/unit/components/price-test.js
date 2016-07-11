import React  					from 'react'
import {shallow} 				from 'enzyme'
import {assert, expect} from 'chai'
import {Price} 			from '../../../source/components/price.jsx'

describe('The Price component', () => {
	const preferences = {price: 50}
	const wrapper = shallow(<Price preferences={preferences}/>)

	it('renders price text elements', () => {
		expect(wrapper.text()).to.contain('Price: $50')
	})
	
	it('renders price slider', () => {
		expect(wrapper.find('Slider')).to.have.length(1)
		assert.equal(wrapper.find('Slider').node.props.step, 10)
		assert.equal(wrapper.find('Slider').node.props.min, 20)
		assert.equal(wrapper.find('Slider').node.props.max, 100)
		assert.equal(wrapper.find('Slider').node.props.defaultValue, preferences.price)
		assert.typeOf(wrapper.find('Slider').node.props.onChange, 'function')
	})

})