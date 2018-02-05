import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as feedActionCreators from 'redux/modules/feed'
import { Feed } from 'components'

class FeedContainer extends Component {
  
  componentDidMount() {
    return this.props.fetchAndHandlePostsIds()
  }
  
  render() {
    return (
      <Feed 
        postTitle={this.props.postTitle}
        isFetching={this.props.isFetching}
        error={this.props.error}
        postsIds={this.props.postsIds}/>
    )
  }
}

FeedContainer.propTypes = {
  postsIds: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchAndHandlePostsIds: PropTypes.func.isRequired,
}

function mapStateToProps ({feed}) {
  return {
    postsIds: feed.postsIds,
    error: feed.error,
    isFetching: feed.isFetching,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(feedActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer)
