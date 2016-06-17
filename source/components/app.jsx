import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducer from '../reducer.js'
import { createStore } from 'redux'
import findLocation from '../helpers/get-location.js'
import Navbar from './navbar.jsx'
import Splash from './splash.jsx'
import request from 'browser-request'

const store = createStore(reducer)

export default class App extends Component {
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
      .then((loc) => {
        console.log(loc)


        request({method: 'GET', url:`/restaurants/${loc[0]}/${loc[1]}`, body: '{"relaxed":true}', json: true}, function(err, res) {
          if (err) {
            console.log("this didn't work", err)
          } else {
            console.log(JSON.parse(res.response))
            //these results need to be added to the state
          }
        })
      })
  }

   
  render() {

    return (
      <div>
        <Navbar />
        <Splash />
      </div>
    )
  }
}


// store.subscribe(render)


