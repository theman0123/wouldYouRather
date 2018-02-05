import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postsActionCreators from 'redux/modules/posts'

import { Post } from 'components'

class PostContainer extends Component {
  render() {
    return (
      <Post {...this.props} />
    )
  }
}

PostContainer.propTypes = {
  postId: PropTypes.string.isRequired,
}

function mapStateToProps ({user, posts, userVoted}, props) {
  const postId = props.postId
  const uid = user.authedId
  
  return {
    post: posts[postId],
    hasVoted: userVoted[uid],
  }
}

export default connect(
  mapStateToProps,
)(PostContainer)
