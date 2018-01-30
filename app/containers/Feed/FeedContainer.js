import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as feedActionCreators from 'redux/modules/feed'
import { Feed } from 'components'

class FeedContainer extends Component {
  render() {
    return (
      <Feed 
        postTitle={this.props.postTitle}
        isFetching={this.props.isFetching}
        error={this.props.error}/>
    )
  }
}

FeedContainer.propTypes = {
  postIds: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

function mapStateToProps ({feed}) {
  console.log(feed)
  return {
    postIds: feed.postIds,
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
