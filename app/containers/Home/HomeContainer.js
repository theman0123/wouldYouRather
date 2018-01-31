import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-redux'
import { Home } from 'components'
import { push } from 'react-router-redux'

class HomeContainer extends Component{
  render() {
    {return this.props.isAuthed
      ? (this.props.dispatch(push('/feed')), null)
      : <Home />
    }
  }
}

export default connect(
  (({user}) => ({isAuthed: user.isAuthed}))
)(HomeContainer)
