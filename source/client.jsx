import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Splash from './Splash.jsx'
import Navbar from './components/navbar.jsx'
import Restaurant from './components/restaurant.jsx'

import getRestaurants from './get-restaurants.js'

getRestaurants(-41.2865, 174.7762)
console.log("test to see it's working")

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

  ComponentWillMount () {
    console.log('app.jsx componentWillMount called')
    $.ajax({
      type: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.2865,174.7762&radius=500&type=restaurant&key=AIzaSyAGDxdzzLm0__nfcD7I4Bg2oD4aYyEbePA',
      async: true,
      success: (response) => {
        console.log('app.jsx componentWillMount ajax products response recieved')
        this.setState(response)
      },
      error: (response) => {
        console.log('app.jsx componentWillMount ajax products error recieved')
        console.log(response)
      }
    })
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

