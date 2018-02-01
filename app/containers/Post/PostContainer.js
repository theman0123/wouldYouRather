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
      <Post
        onClick={() => console.log('post clicked')}
        {...this.props}/>
    )
  }
}

PostContainer.propTypes = {
  postId: PropTypes.string.isRequired,
}

function mapStateToProps ({posts}, props) {
  return {
    post: posts[props.postId],
//    hideLikeCount: true,
//    userVoted: ,
//    numberOfVotes: 2,
  }
}

export default connect(
  mapStateToProps,
)(PostContainer)
