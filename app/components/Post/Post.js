import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { subHeader, loading, error } from 'sharedStyles/styles.css'
import { postContainer, postTitle, postDateAndAuthor, feedContainer } from './styles.css'

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

//get span/voteIndicator working
const Post = (props) => {
const hasBallot = props.hasVoted
  ? Object.keys(props.hasVoted).filter(id => id === props.post.postId)
  : null

  return (
  <Link to={`/post/${props.post.postId}`} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
    <div className={postContainer}>
      <span className={postTitle}>{props.post.title}</span>
      <span className={postDateAndAuthor}>{formatDate(props.post.timestamp)} {'by'} {props.post.author}</span>
    </div>
    <span style={hasBallot ? {backgroundColor: 'green', height: '20px', width: '20px', borderRadius: '50%'}: null} />
  </Link>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  hasVoted: PropTypes.object,
}

export default Post
