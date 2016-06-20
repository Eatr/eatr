import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {AppContainer} from './components/app.jsx'
import Home from './components/home.jsx'
import {FilterContainer} from './components/filter.jsx'
import {ShortlistContainer} from './components/shortlist.jsx'
import {LoginContainer} from './components/modal-login.jsx'
import reducer from './reducer.js'
import ReactDOM from 'react-dom'

const store = createStore(reducer)

const routes = <Route>
	  <Route path="/" component={AppContainer} />
		<Route path='/filter' component={FilterContainer} />
		<Route path='/shortlist' component={ShortlistContainer} />
		<Route path='/login' component={LoginContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('main')
)