import { Router, Route, hashHistory } from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {AppContainer} from './components/app.jsx'
import Home from './components/home.jsx'
import Filter from './components/filter.jsx'
import Shortlist from './components/shortlist.jsx'
import Login from './components/modal-login.jsx'
import reducer from './reducer.js'
import ReactDOM from 'react-dom'

const store = createStore(reducer)

// render((
	
// 		<Router history={hashHistory} >
// 			<Route path='/' component={App}/>
// 			<Route path='/filter' component={Filter} />
// 			<Route path='/shortlist' component={Shortlist} />
// 			<Route path='/login' component={Login} />
// 		</Router>
// 		), document.getElementById('main'))


const routes = <Route>
	  <Route path="/" component={AppContainer} />
		<Route path='/filter' component={Filter} />
		<Route path='/shortlist' component={Shortlist} />
		<Route path='/login' component={Login} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('main')
)