import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Splash from './Splash.jsx'
import Navbar from './components/navbar.jsx'
import Restaurant from './components/restaurant.jsx'


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
      <div>
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

console.log('Foods up!')
ReactDOM.render(<App />, document.getElementById('app'))



// import getRestaurants from './get-restaurants.js'

// getRestaurants(-41.2865,174.7762)

// console.log("test to see it's working")

