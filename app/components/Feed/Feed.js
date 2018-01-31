import React from 'react'
import PropTypes from 'prop-types'

import { PostContainer } from 'containers'

import { subHeader, loading, error } from 'sharedStyles/styles.css'
import { postContainer, postTitle, postDateAndAuthor, feedContainer } from './styles.css'

const Feed = (props) => {
  return (
    <div className={feedContainer}>
      <div className={subHeader}>
        {'Decisions'}
      </div>
      
      <PostContainer />
      
      {props.isFetching ? <p className={loading}>{'loading'}</p> : null}
      
      {props.postIds > 0
        ? (
         <div className={feedContainer}>
          <div className={subHeader}>
            {'Decisions'}
          </div>
          {/*for loop this html template... key = date and Author?*/}

          <div className={postContainer}>
            <span className={postTitle}>{'Made up Title'}</span>
            <span className={postDateAndAuthor}>{'01/12/18'} {'by'} {'Some Author'}</span>
          </div>
        </div>)
         :  props.isFetching
           ?  null
           :  (
           <p className={feedContainer}>{'Oh, geez. There aren\'t any posts yet...'}</p>)
       }

       {props.error ? <p className={error}>{props.error}</p> : null} 
    </div>
  )
}

Feed.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  postsIds: PropTypes.string.isRequired,
}

export default Feed
