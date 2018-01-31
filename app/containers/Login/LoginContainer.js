import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActionCreators from 'redux/modules/user'
import { Login } from 'components'


class LoginContainer extends Component {
  render () {
    {return this.props.isAuthed
      ? <Redirect to='/feed' />
      : (
      <Login isFetching={this.props.isFetching} onAuth={this.props.fetchAndHandleUserLogin} />)
    }
  }
}

function mapStateToProps({user}) {
  return {
    isFetching: user.isFetching,
    error: user.error,
    isAuthed: user.isAuthed,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

LoginContainer.proptypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleUserLogin: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
