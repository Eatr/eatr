import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Splash from './Splash.jsx'
import Navbar from './components/navbar.jsx'
import Restaurant from './components/restaurant.jsx'
import findLocation from './helpers/get-location'



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

  componentWillMount () {
    findLocation()
      .then((response) => {
        console.log(response)
      })
  }

   
  render() {

    return (
      <div>
          <Navbar/>
      {
        this.state.home ?
        <div>
          <Splash enterSite={ this.enterSite }/>
        </div> : <div>
        </div>
      }
      </div>
      )
  }
}

console.log('Foods up!')
ReactDOM.render(<App />, document.getElementById('app'))

