import React from 'react'
import { Link } from 'react-router'
import Navlink from './navlink.jsx'

export default () => {
	return (
    <nav id='navbar'>
  		<Navlink to='/filter'>
        <img className="nav-icon" src="http://placehold.it/50x50" alt="filter"/>
      </Navlink>
  		<Navlink to='/shortlist'>
        <img className="nav-icon" src="http://placehold.it/50x50" alt="shortlist"/>
      </Navlink>
  		<Navlink to='/login'>
        <img className="nav-icon" src="http://placehold.it/50x50" alt="login"/>
      </Navlink>
  	</nav>
  )
}