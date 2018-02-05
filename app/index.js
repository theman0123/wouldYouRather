import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from 'redux/modules'
import { MainContainer } from 'containers'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(combineReducers({
  ...reducers,
  router: routerReducer,
  }),
  compose(
    applyMiddleware(thunk, middleware),
    window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <Route path='/' component={MainContainer} />
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('app')
)
