import React 			from 'react'
import {shallow, mount} 	from 'enzyme'
import {Filter, FilterContainer} 		from '../../../source/components/filter.jsx'
import Navbar 		from '../../../source/components/navbar.jsx'
import {DistanceContainer} 			from '../../../source/components/distance.jsx'
import {expect, assert}		from 'chai'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../../source/reducer.js'

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

describe('The Filter component', () => {
	const store = createStore(reducer)
	const wrapper = mount(
		<Provider store={store}>
	    <Filter />
	  </Provider>)
	it('renders subcomponents: Navbar, Distance Container', () => {
		assert.equal(wrapper.containsAllMatchingElements([
			<Navbar />,
			<DistanceContainer />],
			), true)
	})

})






 
