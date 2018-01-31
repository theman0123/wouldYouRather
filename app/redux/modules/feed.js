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

const fetchingFeedSuccess = (postIds) => {
  return {
    type: FETCHING_FEED_SUCCESS,
    postIds,
  }
}
//do i need this?
const addNewPostToFeed = (newPostId) => {
  return {
    type: ADD_NEW_POST_TO_FEED,
    newPostId,
  }
}

const initialState = {
  isFetching: true,
  error: '',
  postIds: [],
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
        isFetching: true,
        postIds,
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
