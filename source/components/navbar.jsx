import React from 'react'
import { Link } from 'react-router'
import Navlink from './navlink.jsx'

export default () => {
	return ( <nav id='navbar'>

		<Navlink to='/filter'><img src="http://placehold.it/50x50" alt=""/></Navlink>
		<Navlink to='/shortlist'><img src="http://placehold.it/50x50" alt=""/></Navlink>
		<Navlink to='/login'><img src="http://placehold.it/50x50" alt=""/></Navlink>
	</nav>)
}