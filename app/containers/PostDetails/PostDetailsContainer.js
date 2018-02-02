import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userVotedActionCreators from 'redux/modules/userVoted'
import * as voteCountActionCreators from 'redux/modules/voteCount'

import { PostDetails } from 'components'

class PostDetailsContainer extends Component {
  
  componentDidMount () {
    //get voteCount
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
        option1Clicked={() => {
          this.props.addAndHandleUserVote(postId, 1)
        }}
        option2Clicked={() => this.props.addAndHandleUserVote(postId, 2)}/>
    )
  }
}

PostDetailsContainer.propTypes = {
  post: PropTypes.object.isRequired,
}

function mapStateToProps ({posts}, props) {
  const id = props.match.params.postId
  
  return {
    post: posts[id],
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...userVotedActionCreators,
    ...voteCountActionCreators,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsContainer)
