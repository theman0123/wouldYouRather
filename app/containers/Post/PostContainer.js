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
      <Post {...this.props}/>
    )
  }
}

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
}
//posts[props.postsId]
function mapStateToProps ({posts}, props) {
  return {
    post: {id: '123', author: 'spencer jones', title: 'new', option1: 'one', option2: 'two', timestamp: Date.now()},
    hideLikeCount: true,
//    voted: ,
    numberOfVotes: 2,
  }
}

export default connect(
  mapStateToProps,
)(PostContainer)
