import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
  return isAuthed === true
    ? (
      <ul>
        <li>{'New Decision'}</li>
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

export default Navigation
