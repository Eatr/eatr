import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import Splash from './Splash.jsx'
// import Navbar from './components/navbar.jsx'
// import Restaurant from './components/restaurant.jsx'
import findLocation from './helpers/get-location'
import {Link} from 'react-router'



export default () => {
  return (
    <div>
    hello
      <ul role="nav">
       <li><Link to="/filter">Filter</Link></li>
       <li><Link to="/shortlist">Shortlist</Link></li>
       <li><Link to="/login">Login</Link></li>
      </ul>

      <div>
        splash
      </div>    
    </div>
  )
}
      
  // constructor(props) {
  //   super(props)
  //   this.enterSite = this.enterSite.bind(this)
  //   this.state = {
  //     home: true,
  //     user: null
  //   }
  // }
  
  // enterSite() {
  //   this.setState({ home: false})
  // }

  // componentWillMount () {
  //   findLocation()
  //     .then((response) => {
  //       console.log(response)
  //     })
  // }




console.log('Foods up!')
// ReactDOM.render(<App />, document.getElementById('app'))

