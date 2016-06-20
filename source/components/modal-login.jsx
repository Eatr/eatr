import React, { Component } from 'react'
import Navbar from './navbar.jsx'

class Login extends Component {

  handleClick() {
    
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div id='login-box'>
          <a id='facebook-link' class='login-button' href="/auth/facebook" alt='Login with Facebook'>
            <button>Login with Facebook</button>
          </a>
          <a  id='Twitter-link' class='login-button' href="/auth/twitter" alt='Login with Twitter'>
            <button>Login with Twitter</button>
          </a>
        </div>
    </div>

    )
  }
}

export default Login