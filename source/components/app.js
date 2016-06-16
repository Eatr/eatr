import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Splash from './splash.jsx'
import Navbar from './navbar.jsx'
import Restaurant from './restaurant.jsx'


class App extends Component {
  constructor(props) {
    super(props)
    this.enterSite = this.enterSite.bind(this)
    this.state = {
      home: true,
      user: null
    }
  }
  enterSite() {
    this.setState({ home: false})
  }
   
  render() {

    return (
      <div id="app">
      {
        this.state.home ?
        <div>
          <Splash enterSite={ this.enterSite }/>
        </div> : <div>
          <Navbar/>
        </div>
      }
      </div>
      )
  }
}

export default App