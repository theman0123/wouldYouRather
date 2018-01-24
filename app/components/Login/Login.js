import React from 'react'
import { FacebookAuthButton } from 'components'
import { container, largeHeader } from 'sharedStyles/styles.css'

const Login = ({isFetching, onAuth}) => (
  <div className={container}>
    <div className={largeHeader}>{'Login'}</div>
    <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
  </div>
)

export default Login
