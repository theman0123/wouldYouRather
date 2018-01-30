import React from 'react'
import PropTypes from 'prop-types'
import { subHeader } from 'sharedStyles/styles.css'
import { postContainer, postTitle, postDateAndAuthor, feedContainer } from './styles.css'

const Feed = (props) => {
  console.log(props)
  return (
//    { return props.postIds > 0
//      ? (
//       <div className={feedContainer}>
//        <div className={subHeader}>
//          {'Decisions'}
//        </div>
//        {/*for loop this html template... key = date and Author?*/}
//
//        <div className={postContainer}>
//          <span className={postTitle}>{'Made up Title'}</span>
//          <span className={postDateAndAuthor}>{'01/12/18'} {'by'} {'Some Author'}</span>
//        </div>
//      </div>)
//       :  (
//         <p>{'Oh, geez. There aren\'t any posts yet...'}</p>
//       )
//     
//     return error ? <p>{'Error loading decision\'s posts'}</p> : null 
//    }
    <div>{props.isFetching ? <p>{'loading'}</p> : null}</div>
  )
}

Feed.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postOptions1: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  postAuthor: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
}

export default Feed
