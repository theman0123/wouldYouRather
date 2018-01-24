import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  Link
} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import * as reducers from 'redux/modules'
import { Navigation } from 'components'
import { HomeContainer, LoginContainer, FeedContainer } from 'containers'
import * as styles from 'sharedStyles/styles.css'

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

function App () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Navigation isAuthed={false}/>

          <Route exact path='/' component={HomeContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/feed' component={FeedContainer} />        
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
