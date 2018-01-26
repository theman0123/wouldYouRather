import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { firebaseAuth } from 'config/constants'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/user'

import { Main, Navigation } from 'components'

class MainContainer extends Component {

  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = {
          name: userData.displayName,
          uid: user.uid
        }
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
      }
      else this.props.removeFetchingUser()
    })
  }
  
  render() {
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed} />
        <Main isAuthed={this.props.isAuthed} />
      </div>
    )
  }
}

export default connect(
  ({user}) => ({isAuthed: user.isAuthed}), (dispatch) => bindActionCreators(
  userActionCreators,
  dispatch
))(MainContainer)
