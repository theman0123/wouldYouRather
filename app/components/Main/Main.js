import React, { Component } from 'react'
import { HomeContainer, LoginContainer, FeedContainer, LogoutContainer, PostDetailsContainer } from 'containers'
import { Route, Redirect, Switch } from 'react-router-dom'

import * as styles from 'sharedStyles/styles.css'

const Main = (props) => {
  const OutOfBounds = () => (
    <div>
      <p>{'hmmm... you found a secret!'}</p>
      <p> {'nevermind... there\'s just nothing here!!!'}</p>
    </div>
  )
  
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
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/logout' component={LogoutContainer} />

        <PrivateRoute path='/feed' component={FeedContainer} isAuthed={props.isAuthed} />
        <PrivateRoute path='/post/:postId' component={PostDetailsContainer} isAuthed={props.isAuthed} />
        
        <Route component={OutOfBounds} />
      </Switch>
    </div>
  )
}


export default Main
