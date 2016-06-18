import { Router, Route, hashHistory } from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app.jsx'
import Home from './components/home.jsx'
import Filter from './components/filter.jsx'
import Shortlist from './components/shortlist.jsx'
import Login from './components/modal-login.jsx'
import reducer from './reducer.js'


render((
	
		<Router history={hashHistory} >
			<Route path='/' component={App}/>
			<Route path='/filter' component={Filter} />
			<Route path='/shortlist' component={Shortlist} />
			<Route path='/login' component={Login} />
		</Router>
		), document.getElementById('main'))


