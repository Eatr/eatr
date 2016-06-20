import React, { Component } from 'react'
import Navbar from './navbar.jsx'

class Login extends Component {

  handleClick() {
    
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="fb-login-button" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="true"></div>
    </div>

    )
  }
}

export default Login