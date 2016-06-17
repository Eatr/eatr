// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import App from './components/app.js'
// import reducer from './reducer.js'
// import { createStore } from 'redux'


// const store = createStore(reducer)

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.enterSite = this.enterSite.bind(this)
//     this.state = {
//       home: true,
//       user: null
//     }
//   }
  
//   enterSite() {
//     this.setState({ home: false})
//   }

//   componentWillMount () {
//     findLocation()
//       .then((response) => {
//         console.log(response)
//       })
//   }

   
//   render() {

//     return (
//       <div>
//         <Navbar/>
//         <Splash />
//       </div>
//     )
//   }
// const render = () => {
//   console.log('Foods up!')
//   ReactDOM.render(
//     <App store={ store }/>,
//     document.getElementById('main')
//   )
// }

// store.subscribe(render)

// render()
