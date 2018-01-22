import React from 'react'
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

export default FacebookAuthButton
