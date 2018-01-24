import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, Redirect } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { authUser, fetchingUserSuccess, removeFetchingUser } from 'redux/modules/user'
import { firebaseAuth } from 'config/constants'
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
const PrivateRoute = ({component: C, ...rest}) => {
  const isAuthed = store.getState().user.isAuthed
  return (
    <Route {...rest} render={(props) => (
      isAuthed
        ? <C {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

class App extends Component {
//  componentDidMount() {
//    firebaseAuth().onAuthStateChanged((user) => {
//      if (user) {
//        const userData = user.providerData[0]
//        const userInfo = {
//          name: userData.displayName,
//          uid: user.uid
//        }
//        store.dispatch(authUser(user.uid))
//        store.dispatch(fetchingUserSuccess(user.uid, userInfo, Date.now()))
//        return <Redirect to='/feed' />
//      }
//      else store.dispatch(removeFetchingUser())
//    })
//  }
  
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Navigation isAuthed={false}/>

            <Route exact path='/' component={HomeContainer} />
            <Route path='/login' component={LoginContainer} />
            <PrivateRoute path='/feed' component={FeedContainer} />        
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
