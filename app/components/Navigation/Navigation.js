import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { ModalContainer } from 'containers'

import { horizontal, container, navContainer } from './styles.css'

const ActionLinks = ({isAuthed}) => {
  return isAuthed
    ? (
      <ul>
        <li><Link to='/feed'>{'Home'}</Link></li>
      </ul>)
    : null
}
const NavLinks = ({isAuthed}) => {
  return isAuthed
    ? (
      <ul>
        <li><ModalContainer /></li>
        <li><Link to='/logout'>{'Logout'}</Link></li>
      </ul>)
    : (
      <ul>
        <li><Link to='/'>{'Home'}</Link></li>
        <li><Link to='/login'>{'Login'}</Link></li>
      </ul>)
}
const Navigation = ({isAuthed}) => (
  <div className={horizontal}>
    <ActionLinks isAuthed={isAuthed} />
    <NavLinks isAuthed={isAuthed} />
  </div>
)

Navigation.proptypes = {
  isAuthed: PropTypes.bool.isRequired,
}

export default Navigation
