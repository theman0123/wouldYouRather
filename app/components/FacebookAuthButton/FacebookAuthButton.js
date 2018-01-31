import React from 'react'
import PropTypes from 'prop-types'

import { button } from './styles.css'
const FacebookAuthButton = ({isFetching, onAuth}) => {
  return isFetching
    ? (
    <div className={button}>
      {'loading...'}
    </div>)
    : (
    <div className={button} onClick={onAuth}>
      {'Login With Facebook'}
    </div>)
    
}

FacebookAuthButton.proptypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default FacebookAuthButton
