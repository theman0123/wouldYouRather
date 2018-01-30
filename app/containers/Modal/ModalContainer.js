import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as modalActionCreators from 'redux/modules/modal'
import { Modal } from 'components'

function mapStateToProps ({modal, user}) {
  const disabled1 = modal.option1 <= 0 || modal.option1 > 140
  const disabled2 = modal.option2 <= 0 || modal.option2 > 140

  return {
    isOpen: modal.isOpen,
    openModal: modal.openModal,
    closeModal: modal.closeModal,
    title: modal.title,
    option1: modal.option1,
    option2: modal.option2,
    user: user[user.authedId] ? user[user.authedId].info : {},
    isSubmitDisabled: disabled1 && disabled2,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(modalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
