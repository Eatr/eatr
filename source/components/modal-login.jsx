import React, { Component } from 'react'
import Navbar from './navbar.jsx'
import {connect} from 'react-redux'
import * as actionCreators from '../action-creators.js'

export class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const name = this.props.user.name
    if (name === undefined || name=== null) {
      return (
        <div>
          <Navbar/>
          <div id='login-box'>
            <section>
              <p>Login to keep your shortlist for next time, and share with friends</p>
            </section>
            <section>
              <a id='facebook-link' class='login-button' href="/auth/facebook" alt='Login with Facebook'>
                <button>Login with Facebook</button>
              </a>
              <a  id='Twitter-link' class='login-button' href="/auth/twitter" alt='Login with Twitter'>
                <button>Login with Twitter</button>
              </a>
            </section>
          </div>
      </div>)
    } else {
      return (
        <div>
          <Navbar/>
          <div id='login-box'>
            <section id='user-details'>
              <p>Hey {name}, we are you eating tonight?</p>
            </section>
          </div>
        </div>)
    }
  }
}


function mapStateToProps (state) {
  return {
    user: state.User
  }
}

export const LoginContainer = connect(
  mapStateToProps,
  actionCreators
  )(Login)

