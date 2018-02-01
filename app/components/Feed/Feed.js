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
      
      
      {props.isFetching ? <p className={loading}>{'loading'}</p> : null
      }
      
      {props.postsIds.map((id) => (
          <PostContainer 
            postId={id}
            key={id}/>
      ))}
                             
      {props.postsIds > 0
         ?  (
         <p className={feedContainer}>{'Oh, geez. There aren\'t any posts yet...'}</p>)
         :  null
      }

       {props.error ? <p className={error}>{props.error}</p> : null} 
    </div>
  )
}

Feed.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  postsIds: PropTypes.array.isRequired,
}

export default Feed
