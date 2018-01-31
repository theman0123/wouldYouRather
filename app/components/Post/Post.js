import React from 'react'
import PropTypes from 'prop-types'

import { subHeader, loading, error } from 'sharedStyles/styles.css'
import { postContainer, postTitle, postDateAndAuthor, feedContainer } from './styles.css'

const Post = (props) => (
  <div className={postContainer}>
    <span className={postTitle}>{props.post.title}</span>
    <span className={postDateAndAuthor}>{props.post.timestamp} {'by'} {props.post.author}</span>
  </div>
)

Post.propTypes = {
  post: PropTypes.object.isRequired,
  numberOfVotes: PropTypes.number.isRequired,
}

export default Post
