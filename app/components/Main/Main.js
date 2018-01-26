import React, { Component } from 'react'
import { HomeContainer, LoginContainer, FeedContainer, LogoutContainer } from 'containers'
import { Route, Redirect } from 'react-router-dom'

import * as styles from 'sharedStyles/styles.css'

const Main = (props) => {
  const PrivateRoute = ({component: C, isAuthed, ...rest}) => {
    return (
      <Route {...rest} render={(props) => (
        isAuthed
          ? <C {...props} />
          : <Redirect to='/login' />
      )} />
    )
  }
  return (
    <div>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/login' component={LoginContainer} />
      <Route exact path='/logout' component={LogoutContainer} />

      <PrivateRoute path='/feed' component={FeedContainer} isAuthed={props.isAuthed}/>
    </div>
  )
}


export default Main
