import React, { Component } from 'react'
import Navbar from './navbar.jsx'
import {connect} from 'react-redux'
import * as actionCreators from '../action-creators.js'

export class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {name, picture} = this.props.user
   
    if (!name) {
      return (
        <div>
          <Navbar/>
          <div id='login-box'>
            <section>
              <p>Login to keep your shortlist for next time, and share with friends</p>
            </section>
            <section>
              <a id='facebook-link' class='login-button' href="/auth/facebook" alt='Login with Facebook'>
                <button>
                  <img className="login-with" src='./images/sign-in-with-facebook.png' />
                </button>
              </a>
              <a  src='./images/sign-in-with-twitter-link.png' id='Twitter-link' class='login-button' href="/auth/twitter" alt='Login with Twitter'>
                <button>
                <img className="login-with" src='./images/sign-in-with-twitter.png' />
                </button>
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
              <div id='user-image'>
                <img id="user-image" src={picture} alt='profile pic'/>
              </div>
              <p>Hey {name}, where are you eating tonight?</p>
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

