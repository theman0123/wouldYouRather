import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { subHeader, loading, error } from 'sharedStyles/styles.css'
import { postContainer, postTitle, postDateAndAuthor, feedContainer } from './styles.css'

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

const Post = (props) => (
  <Link to={`/post/${props.post.postId}`}>
    <div className={postContainer}>
      <span className={postTitle}>{props.post.title}</span>
      <span className={postDateAndAuthor}>{formatDate(props.post.timestamp)} {'by'} {props.post.author}</span>
    </div>
  </Link>
)

Post.propTypes = {
  post: PropTypes.object.isRequired,
//  numberOfVotes: PropTypes.number.isRequired,
}

export default Post
