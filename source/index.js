import { Router, Route, hashHistory } from 'react-router'
import React from 'react'
import { render } from 'react-dom'

import App from './client.js'
import Home from './components/home.jsx'
import Filter from './components/filter.jsx'
import Shortlist from './components/shortlist.jsx'
import Login from './components/modal-login.jsx'

render((
	<Router history={hashHistory} >
		<Route path='/' component={App}/>
			<Route path='/filter' component={Filter} />
			<Route path='/shortlist' component={Shortlist} />
			<Route path='/login' component={Login} />
	</Router>
	), document.getElementById('app'))
