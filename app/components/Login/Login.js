import React from 'react'
import PropTypes from 'prop-types'

import { FacebookAuthButton } from 'components'
import { container, largeHeader } from 'sharedStyles/styles.css'

const Login = ({isFetching, onAuth}) => (
  <div className={container}>
    <div className={largeHeader}>{'Login'}</div>
    <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
  </div>
)

Login.proptypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default Login
