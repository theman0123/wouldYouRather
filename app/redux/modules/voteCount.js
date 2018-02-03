import { fetchVoteCount } from 'helpers/api'
import { ADD_VOTE } from './userVoted'

const FETCHING_VOTE_COUNT = 'FETCHING_VOTE_COUNT'
const FETCHING_VOTE_COUNT_SUCCESS = 'FETCHING_VOTE_COUNT_SUCCESS'
const FETCHING_VOTE_COUNT_ERROR = 'FETCHING_VOTE_COUNT_ERROR'

const fetchingVoteCount = () => {
  return {
    type: FETCHING_VOTE_COUNT,
  }
}

const fetchingVoteCountError = (error) => {
  return {
    type: FETCHING_VOTE_COUNT_ERROR,
    error: 'Error Fetching Vote Count',
  }
}

const fetchingVoteCountSuccess = (postId, voteCount) => {
  console.log(voteCount)
  return {
    type: FETCHING_VOTE_COUNT_SUCCESS,
    postId,
    voteCount,
  }
}

export function initFetchVoteCount (postId) {
  return function (dispatch) {
    dispatch(fetchingVoteCount())
    
    fetchVoteCount(postId)
      .then((voteCount) => dispatch(fetchingVoteCountSuccess(postId, voteCount)))
      .catch((error) => dispatch(fetchingVoteCountError(error)))
  }
}
  
function count (state = {
  1: 0,
  2: 0,
}, action) {
  
  switch(action.type) {
    case ADD_VOTE:
      console.log(state, action)
      
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '', 
}

export default function voteCount (state= initialState, action) {
  switch(action.type) {
    case FETCHING_VOTE_COUNT:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_VOTE_COUNT_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    case FETCHING_VOTE_COUNT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        [action.postId]: action.voteCount,
      }
    case ADD_VOTE:
      return {
        ...state,
        [action.postId]: count(state[action.postId], action),
        }
    default:
      return state
  }
}
  