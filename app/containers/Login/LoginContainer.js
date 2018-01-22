import React, { Component } from 'react'
import { Login } from 'components'

class LoginContainer extends Component {
  render() {
    return (
      <Login isFetching={false} onAuth={() => console.log('login')} />
    )
  }
}

export default LoginContainer
