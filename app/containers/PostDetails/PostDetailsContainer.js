import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PostDetails } from 'components'

class PostDetailsContainer extends Component {
  
  componentDidMount () {
    //get voteCount 
    //get userVoted
  }
  
  render() {
    return (
      <PostDetails 
        post={this.props.post}/>
    )
  }
}

PostDetailsContainer.propTypes = {
  post: PropTypes.object.isRequired,
}

function mapStateToProps ({posts}, props) {
//  console.log(props)
  const id = props.match.params.postId
  return {
    post: posts[id],
  }
}

export default connect(
  mapStateToProps
)(PostDetailsContainer)