import React  					from 'react'
import {shallow} 				from 'enzyme'
import {assert, expect} from 'chai'
import Navbar 					from '../../../source/components/navbar.jsx'
import YeahNahBar					from '../../../source/components/yeah-nah-bar.jsx'
import {Link} 						from 'react-router'

describe('The yeah-nah-bar component', () => {

	const wrapper = shallow(<YeahNahBar/>)

	it('renders 2 buttons with correct properties', () =>{
		expect(wrapper.find('button')).to.have.length(2)
		
		//first button
		assert.equal(
			wrapper.find('button').nodes[0].props.children.props.src,
			'./images/nope.png'
		)
		assert.typeOf(
			wrapper.find('button').nodes[0].props.onClick,
			'function'
		)
		//2nd button
		assert.equal(
			wrapper.find('button').nodes[1].props.children.props.src,
			'./images/like.png'
		)
		assert.typeOf(
			wrapper.find('button').nodes[1].props.onClick,
			'function'
		)
	})

	it('renders a Navlink to the shortlist', () =>{
		expect(wrapper.find('Navlink')).to.have.length(1)
		assert.equal(
			wrapper.find('Navlink').node.props.to, 
			'/shortlist')
		expect(wrapper.find('Navlink').find('img')).to.have.length(1)
		assert.equal(
			wrapper.find('Navlink').find('img').node.props.src, 
			'./images/shortlist-icon.png')
	})


})