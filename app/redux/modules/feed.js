import { fetchPostsIds } from 'helpers/api'
import { fetchingPostsSuccess } from './posts'
const FETCHING_FEED = 'FETCHING_FEED'
const FETCHING_FEED_ERROR = 'FETCHING_FEED_ERROR'
const FETCHING_FEED_SUCCESS = 'FETCHING_FEED_SUCCESS'
const ADD_NEW_POST_TO_FEED = 'ADD_NEW_POST_TO_FEED'

const fetchingFeed = () => {
  return {
    type: FETCHING_FEED,
  }
}

const fetchingFeedError = (error) => {
  console.warn(error)
  return {
    type: FETCHING_FEED_ERROR,
    error: 'Error Fetching Would You Rather Feed',
  }
}

const fetchingFeedSuccess = (postsIds) => {
  return {
    type: FETCHING_FEED_SUCCESS,
    postsIds,
  }
}

export const fetchAndHandlePostsIds = () => {
  return function (dispatch) {
    dispatch(fetchingFeed())
    fetchPostsIds()
      .then((postsIds) => {
        const sortedPostsIds = Object.keys(postsIds).sort((a, b) => postsIds[b].timestamp - postsIds[a].timestamp)
        
        dispatch(fetchingPostsSuccess(postsIds))
        return dispatch(fetchingFeedSuccess(sortedPostsIds))
      })
      .catch((error) => dispatch(fetchingFeedError(error)))
  }
}

//do i need this?
//const addNewPostToFeed = (newPostId) => {
//  return {
//    type: ADD_NEW_POST_TO_FEED,
//    newPostId,
//  }
//}

const initialState = {
  isFetching: true,
  error: '',
  postsIds: [],
}

export default function feed (state= initialState, action) {
  switch(action.type) {
    case FETCHING_FEED:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_FEED_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_FEED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        postsIds: action.postsIds,
      }
    case ADD_NEW_POST_TO_FEED:
      return {
        ...state,
        postIds: state.postIds.unshift(action.newPostId)
      }
    default:
      return state
  }
}
