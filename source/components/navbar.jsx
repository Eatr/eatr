import React from 'react'
import { Link } from 'react-router'
import Logo from './logo.jsx'
import Navlink from './navlink.jsx'

export default () => {

	return (
    <header>
      
      <nav id='navbar'>
    		<Navlink to='/filter'>
          <img className="nav-icon" src="./images/preferences-icon.png" alt="filter"/>
        </Navlink>
    		<Logo />
    		<Navlink to='/login'>
          <img className="nav-icon" src="./images/login-icon.png" alt="login"/>
        </Navlink>
    	</nav>
    </header>
  )

}