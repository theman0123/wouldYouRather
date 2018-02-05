import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userVotedActionCreators from 'redux/modules/userVoted'
import * as voteCountActionCreators from 'redux/modules/voteCount'
import * as postsActionCreators from 'redux/modules/posts'

import { PostDetails } from 'components'

class PostDetailsContainer extends Component {
  
  componentDidMount () {
    const postId = this.props.match.params.postId
    
    this.props.initFetchVoteCount(postId)
  }
  
  render() {
    const postId = this.props.post.postId
    return (
      <PostDetails 
        post={this.props.post}
        option1Clicked={() =>  this.props.addAndHandleUserVote(postId, 1)}
        option2Clicked={() => this.props.addAndHandleUserVote(postId, 2)}
        voteCount={this.props.voteCount}
        userVoted={this.props.userVoted}/>
    )
  }
}

PostDetailsContainer.propTypes = {
  post: PropTypes.object.isRequired,
  option1Clicked: PropTypes.func.isRequired,
  option2Clicked: PropTypes.func.isRequired,
  userVoted: PropTypes.number.isRequired,
  voteCount: PropTypes.shape({
    0: PropTypes.number,
    1: PropTypes.number,
  })
}

function mapStateToProps ({user, posts, voteCount, userVoted}, props) {
  const uid = user.authedId
  const id = props.match.params.postId
  const votes = userVoted[uid]

  return {
    post: posts[id],
    voteCount: voteCount[id],
    userVoted: votes[id] ? votes[id].selected : null,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...userVotedActionCreators,
    ...voteCountActionCreators,
    ...postsActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsContainer)
