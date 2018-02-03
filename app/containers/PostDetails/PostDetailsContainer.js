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
    if (this.props.postAlreadyFetched === false) {
      this.props.fetchAndHandlePost(postId)
    }
    else this.props.removeFetchingPosts()
  }
  
  option1Clicked (option) {
    console.log(this.props, 1)
  }
  
  option2Clicked (option) {
    console.log( 2)
  }
  
  render() {
    const postId = this.props.post.postId
    return (
      <PostDetails 
        post={this.props.post}
        option1Clicked={() =>  this.props.addAndHandleUserVote(postId, 1)}
        option2Clicked={() => this.props.addAndHandleUserVote(postId, 2)}/>
    )
  }
}

PostDetailsContainer.propTypes = {
  post: PropTypes.object.isRequired,
}

function mapStateToProps ({posts, voteCount, userVoted}, props) {
  const id = props.match.params.postId
  
  return {
    post: posts[id],
    voteCount: voteCount[id],
//    userVoted: userVoted[id].selected,
    postAlreadFetched: !!posts[id]
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
