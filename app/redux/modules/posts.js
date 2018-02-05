import { closeModal } from './modal'
import { addNewPostToFeed } from './feed'
import { savePost, fetchPost } from 'helpers/api'

const FETCHING_POSTS = 'FETCHING_POSTS'
const FETCHING_POSTS_ERROR = 'FETCHING_POSTS_ERROR'
const FETCHING_POSTS_SUCCESS = 'FETCHING_POSTS_SUCCESS'
const REMOVE_FETCHING_POSTS = 'REMOVE_FETCHING_POSTS'
const ADD_POST = 'ADD_POST'

const fetchingPosts = () => {
  return {
    type: FETCHING_POSTS,
  }
}

const fetchingPostsError = (error) => {
  console.warn(error)
  return {
    type: FETCHING_POSTS_ERROR,
    error: 'Error Fetching Post',
  }
}

export const fetchingPostsSuccess = (postsIds) => {
  return {
    type: FETCHING_POSTS_SUCCESS,
    postsIds,
  }
}

const addPost = (post) => {
  return {
    type: ADD_POST,
    post,
  }
}

export const removeFetchingPosts = () => {
  return {
    type: REMOVE_FETCHING_POSTS,
  }
}

export const postFanout = (post) => {
  return function (dispatch, getState) {
    const uid = getState().user.authedId
    savePost(post)
      .then((postWithId) => {
        const idOnly = postWithId.postId
        dispatch(addPost(postWithId))
        dispatch(addNewPostToFeed(idOnly))
        dispatch(closeModal())
      })
      .catch((error) => {
        console.warn('error in postFanout', error)
    })
  }
}

export function fetchAndHandlePost (postId) {
  return function (dispatch) {
    dispatch(fetchingPosts())
    
    fetchPost(postId)
      .then((post) => dispatch(AddPost(post)))
      .catch((error) => dispatch(fetchingPostsError(error)))
  }
}
  
const initialState = {
  isFetching: true,
  error: '',
}

export default function posts (state = initialState, action) {
  switch(action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case ADD_POST:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.post.postId]: action.post,
      }
    case FETCHING_POSTS_SUCCESS:
      return {
        ...state,
        ...action.postsIds,
        isFetching: false,
        error: '',
      }
    case REMOVE_FETCHING_POSTS:
      return {
        ...state,
        isFetching: false,
        error: '', 
      }
    default:
      return state
  }
}